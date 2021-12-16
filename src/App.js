import "./App.css";
import Sidebar from "./home/Sidebar";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import APIURL from "./helpers/environment";
import GameUpdateModal from './games/GameUpdateModal';
import { Table, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { MDBModalContent, MDBModalBody, MDBModalTitle, MDBModalHeader} from 'mdb-react-ui-kit';

function App() {
  const [sessionToken, setSessionToken] = useState("");
  const [games, setGames] = useState({});
  const [updateGame, setUpdateGame] = useState({});
  const [updateActive, setUpdateActive] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);


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

//! GameEditDeleteModal and GameUpdateModal 
//TODO - get this thing to work

  const deleteGame = (game) => {
    console.log("deleteGame Function, games!:", games);
    console.log("deleteGame Function, games.games.y2k!:", games.games);
    fetch(`${APIURL}/game/remove/${game.id}`, {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionToken}`
        })
    }).then(() => fetchGames())
  }

  const gameMapper = (props) => {
    console.log("gameMapper Function, games!:", games);
    console.log("gameMapper Function, games.games.y2k!:", games.games);
    return props.games.games.map((game, index) => {
        return (
            <tr key={index}>
                <th scope='row'>{game.id}</th>
                <td>{game.name}</td>
                <td>{game.boxart}</td>
                <td>{game.reviewrating}</td>
                <td>
                    <Button color='warning' onClick={() => { updateModalActive(props); }}>Update</Button>
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
    )
  
}
  //! Modal for Update
  //TODO - updateOff for GameUpdateModal to set updateActive to false for table to show again?
  const updateModalActive = (props) => {
    updateOn(true)
    console.log("updateModalActive:", props)
      return (
        <GameUpdateModal
            changeGame={changeGame(props.games.games[0])}
            updateOn={updateOn}
            isOpen={true}
            sessionToken={sessionToken}
            updateOff={updateOff}
            fetchGames={fetchGames}
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

//! Modal for GameView
// !!! Change from mapper, mapper runs through whole DB, should be a normal method !!!
  const gameModalMapper = (props) => {
    return props.games.map((game, index) => {
        return (
            <MDBModalContent key={index}>
                <MDBModalHeader>
                    <MDBModalTitle>Game's Details:</MDBModalTitle>
                </MDBModalHeader>
                <MDBModalBody>
                    Description: {game.gamedescription}
                    <br/>
                    ESRB Rating: {game.esrbrating}
                    <br/>
                    Rating: {game.reviewrating} / 10
                    <br/>
                    Review Description: {game.reviewdescription}
                    <br/>
                    Platforms: {game.platforms}
                    <br/>
                    Tags: {game.tags}
                </MDBModalBody>
            </MDBModalContent>
        )
    })
  }

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
      <Router>
        <Sidebar
          updateToken={updateToken}
          sessionToken={sessionToken}
          logout={logout}
          isAuthenticated={isAuthenticated}
          games={games}
          fetchGames={fetchGames}
          updateGame={updateGame}
          updateOn={updateOn}
          updateOff={updateOff}
          updateActive={updateActive}
          changeGame={changeGame}
          updateModalActive={updateModalActive}
          editModalActive={editModalActive}
          gameMapper={gameMapper}
          gameModalMapper={gameModalMapper}
        />
      </Router>
    </div>
  );
}

export default App;