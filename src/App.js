import "./App.css";
import Sidebar from "./home/Sidebar";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import APIURL from "./helpers/environment";
import GameUpdateModal from './games/GameUpdateModal';
import { Table, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

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

  const [serverResponse, setServerResponse] = useState('');
  const [serverStatus, setServerStatus] = useState('');
  let navigate = useNavigate();


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
  let responseStatus;
  if (sessionToken !== ''){
    fetch(`${APIURL}/game/editdeleteall`, {
      method: "GET",
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionToken}`
      })
    }).then((response) => {
      setServerStatus(`${response.status}`);
      console.log(response.status);
      responseStatus = response.status;
      console.log(responseStatus);
      return response.json();
    }).then((data) => {
      setYourGames(data);
      console.log("data.message: " + data.message);
      console.log("responseStatus:", responseStatus);
      if (responseStatus == '200')
        navigate('/all');
    })
  }
}
    

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


// //! Modal for GameView
//   const gameModalMapper = (props) => {
//     return props.games.map((game, index) => {
//         return (
//             <MDBModalContent key={index}>
//                 <MDBModalHeader>
//                     <MDBModalTitle>Game's Details:</MDBModalTitle>
//                 </MDBModalHeader>
//                 <MDBModalBody>
//                     Description: {game.gamedescription}
//                     <br/>
//                     ESRB Rating: {game.esrbrating}
//                     <br/>
//                     Rating: {game.reviewrating} / 10
//                     <br/>
//                     Review Description: {game.reviewdescription}
//                     <br/>
//                     Platforms: {game.platforms}
//                     <br/>
//                     Tags: {game.tags}
//                 </MDBModalBody>
//             </MDBModalContent>
//         )
//     })
//   }


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
        <Sidebar
          updateToken={updateToken}
          sessionToken={sessionToken}
          logout={logout}
          isAuthenticated={isAuthenticated}
          games={games}
          fetchGames={fetchGames}
          fetchYourGames = {fetchYourGames}
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
    </div>
  );
}

export default App;