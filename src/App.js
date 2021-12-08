import "./App.css";
import Sidebar from "./home/Sidebar";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import APIURL from "./helpers/environment";

function App() {
  const [sessionToken, setSessionToken] = useState("");
  const [games, setGames] = useState([]);
  const [updateGame, setUpdateGame] = useState({});
  const [updateActive, setUpdateActive] = useState(false);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log("This is the sessionToken:", sessionToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
    console.log("This is the clearedToken:", sessionToken);
  };

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

  const editUpdateGame = (games) => {
    setUpdateGame(games);
  };

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
    fetchGames();
  }, []);

  return (
    <div className="App">
      <Router>
        <Sidebar
          updateToken={updateToken}
          clearToken={clearToken}
          sessionToken={sessionToken}
          games={games}
          fetchGames={fetchGames}
          editUpdateGame={editUpdateGame}
          updateOn={updateOn}
          updateOff={updateOff}
        />
      </Router>
    </div>
  );
}

export default App;
