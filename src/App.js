import "./App.css";
import Sidebar from "./home/Sidebar";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import APIURL from "./helpers/environment";
import GameUpdateModal from './games/GameUpdateModal';
import { Table, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import GameChestLogo from './assets/GameChestLogo.png';


function App() {
  //* Authentication useStates
  const [sessionToken, setSessionToken] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  //* Games useStates
  const [games, setGames] = useState({});
  const [updateGame, setUpdateGame] = useState({});
  const [updateActive, setUpdateActive] = useState(false);
  const [gameToUpdate, setGameToUpdate] = useState([]);
  const [yourGames, setYourGames] = useState([]);


  //! Token fun for session
  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    setIsAuthenticated(true);
    console.log("This is the sessionToken:", sessionToken);
  };

  //! Logout Function
  const logout = () => {
    localStorage.clear();
    setSessionToken('')
    setIsAuthenticated(false);
    console.log("This is the {LogOut} clearedToken:", sessionToken);
  }

  //! This is the fetch for the games
  const fetchGames = () => {
    fetch(`${APIURL}/game/all`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((gameData) => {
        setGames(gameData);
      });
  };

  //! Fetching Individual Games
  const fetchYourGames = () => {
    if (sessionToken !== '') {
      fetch(`${APIURL}/game/editdeleteall`, {
        method: "GET",
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionToken}`
        })
      }).then((res) => res.json())
        .then((yourGameData) => {
          console.log(yourGameData);
          setYourGames(yourGameData);
        })
    } else {
      alert("You have no games, returning to home page");


    //!CHANGE TO 'APIURL' FOR HEROKU DEPLOYMENT
    window.location.href = `${APIURL}/all`;

  }
  };

  //! Delete Game
  const deleteGame = (game) => {
    console.log("deleteGame Function, games!:", games);
    fetch(`${APIURL}/game/remove/${game.id}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionToken}`
      })
    }).then(() => fetchYourGames())
  }


  //! Maps the games to the table
  const gameMapper = (props) => {
    console.log(yourGames);
    return yourGames.map((game, index) => {

      return (
        <tr key={index}>
          <th scope='row'>{game.id}</th>
          <td>{game.name}</td>
          <td>{game.boxart}</td>
          <td>{game.reviewrating}</td>
          <td>
            <Button color='warning' onClick={() => { setGameToUpdate(game); updateModalActive(props); }}>Update</Button>
            <Button color='danger' onClick={() => { deleteGame(game) }}>Delete</Button>
          </td>
        </tr>
      )

    })
  }

  //! Edit Table
  const editModalActive = (props) => {
    console.log("editModalActive:", props)

    return (
      <div className="editModal">
      <Modal isOpen={true}>
        <ModalHeader>Edit/Delete a Game</ModalHeader>
        <ModalBody>
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Boxart</th>
                <th>Review Rating</th>
              </tr>
            </thead>
            <tbody>
              {gameMapper(props)}
            </tbody>
          </Table>
        </ModalBody>
      </Modal>
      </div>
    )
  }

  //! Modal for Update
  //TODO - updateOff for GameUpdateModal to set updateActive to false for table to show again?
  const updateModalActive = (props) => {
    updateOn(true)
    console.log("updateModalActive:", props)
    return (
      <GameUpdateModal
        changeGame={changeGame(gameToUpdate)}
        updateOn={updateOn}
        isOpen={true}
        sessionToken={sessionToken}
        updateOff={updateOff}
        fetchYourGames={fetchYourGames}
      />
    )
  }

  const changeGame = (game) => {
    setUpdateGame(game);
    console.log("changeGame:", updateGame)
    return (
      updateGame
    )
  };

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };

  //! gameChestLoad styling.
  //* Very center of the screen always. Text is centered, and dynamic with screen size.
  const gameChestLoad = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    fontSize: "50px",
    color: "white",
    fontFamily: "Courier New",
    fontWeight: "bold",
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: "10px",
    padding: "10px",
    width: "50%",
    height: "50%",
    zIndex: "1"
  };

  //! GameChestLogo styling. Image right above the gameChestLoad. 
  const gameChestLogo = {
    position: "absolute",
    marginBottom: "140px",

  };

  //! centerDiv that holds the gameChestLoad and gameChestLogo. GameChestLogo always is above the gameChestLoad. Responsive.
  const centerDiv = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "auto",
    zIndex: "0",
    size: "50%",
  };

  //! useEffect for token session
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
    fetchGames();
  }, []);

  //! App Return
  return (
    <div className="App">
    <div style={centerDiv}>
        <img src={GameChestLogo} alt="GameChest Logo" style={gameChestLogo} />
        <p style={gameChestLoad}>Click the sidebar to open the GameChest!</p>
      </div>
    <section>
      <Router>
        <Sidebar
          updateToken={updateToken}
          sessionToken={sessionToken}
          logout={logout}
          isAuthenticated={isAuthenticated}
          games={games}
          fetchGames={fetchGames}
          fetchYourGames={fetchYourGames}
          updateGame={updateGame}
          updateOn={updateOn}
          updateOff={updateOff}
          updateActive={updateActive}
          changeGame={changeGame}
          updateModalActive={updateModalActive}
          editModalActive={editModalActive}
          gameMapper={gameMapper}
        // gameModalMapper={gameModalMapper}
        />
      </Router>
      </section>
    </div>
  );
}

export default App;