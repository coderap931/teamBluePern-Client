import './App.css';
import HomePage from './home/Home'; //Game Grid with all Games //!Jaylen
import Sidebar from './home/Sidebar';
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';

function App() {
  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log("This is the sessionToken:", sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('')
    console.log("This is the clearedToken:", sessionToken);
  }

  // const protectedViews = () => {
  //   return (sessionToken === localStorage.getItem('token') ? <HomePage updateToken={updateToken} clearToken={clearToken} /> : <div>You are not logged in</div>)
  // }

  return (
    <div className="App">
      <Router>
      <Sidebar updateToken={updateToken} clearToken={clearToken} />
      </Router>
    </div>
  );
}
//{protectedViews()}
export default App;