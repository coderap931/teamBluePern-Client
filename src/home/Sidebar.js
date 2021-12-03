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
import { Switch, Route, Link } from 'react-router-dom';
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
            <Navbar color="faded" light>
                <NavbarToggler onClick={toggleCollapse} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <Link to="/home">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/login">Login</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/signup">Signup</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/creategame">Create Game</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/editgame">Edit Game</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/deletegame">Delete Game</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <Switch>
                <Route exact path="/home" component={HomePage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/creategame" component={GameCreateModal} />
                <Route exact path="/editgame" component={GameEditDeleteModal} />
                <Route exact path="/deletegame" component={GameEditDeleteModal} />
                {/* // <Route exact path="/gameview" component={GameView} /> */}
            </Switch>
        </div>
    );
}


export default Sidebar;