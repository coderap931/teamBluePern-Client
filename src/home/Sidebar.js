// import material ui drawer+elements from material ui
// import { makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import material ui icons for the sidebar visuals
import { MenuIcon, AddIcon, HomeIcon, LoginIcon, HowToRegIcon, GamesIcon, ModeEditIcon } from '@material-ui/icons/Menu';
// imports the components for the sidebar
import HomePage from './Home';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import GameCreateModal from '../games/GameCreateModal';
import GameEditDeleteModal from '../games/GameEditDeleteModal';
// import GameViewModal from './GameViewModal';
// import React features
import { useHistory } from 'react-router-dom';
import { Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// 
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button,
    NavLink,
} from 'reactstrap';

//TODO add back to route when completed -> // <Route exact path="/gameview" component={GameView} />

const Sidebar = (props) => {
    // const [open, setOpen] = useState(false);
    // const [user, setUser] = useState(null);
    // const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }

    // reacstrap sidebar where you can click home, log in, sign up, create game, edit game, and delete game
    return (
        <div>
        <Navbar color="faded" light expand="md">
                <NavbarToggler onClick={toggleCollapse} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/home">
                                <Button color="primary">

                                </Button>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/login">
                                <Button color="primary">

                                </Button>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/signup">
                                <Button color="primary">

                                </Button>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/creategame">
                                <Button color="primary">

                                </Button>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/editgame">
                                <Button color="primary">
                                </Button>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/deletegame">
                                <Button color="primary">
                                </Button>
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/login" element={<Login updateToken={props.updateToken} sessionToken={props.sessionToken}/>} />
                <Route path="/signup" element={<Signup updateToken={props.updateToken} sessionToken={props.sessionToken}/>} />
                <Route path="/creategame" element={<GameCreateModal />} />
                <Route path="/editgame" element={<GameEditDeleteModal />} />
                <Route path="/deletegame" element={<GameEditDeleteModal />} />
            </Routes>
        </div>
    );
}


export default Sidebar;