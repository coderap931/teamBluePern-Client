// import material ui drawer+elements from material ui
import { makeStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import material ui icons for the sidebar visuals
import { Drawer, MenuIcon, AddIcon, HomeIcon, LoginIcon, HowToRegIcon, GamesIcon, ModeEditIcon, ListItemText, ListItem, List, ListItemIcon } from '@material-ui/icons/Menu';
// imports the components for the sidebar
import HomePage from './Home';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import GameCreateModal from '../games/GameCreateModal';
import GameEditDeleteModal from '../games/GameEditDeleteModal';
// import GameViewModal from './GameViewModal';
// import React features
import { useHistory } from 'react-router-dom';
import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
    console.log(props);
    // const [open, setOpen] = useState(false);
    // const [user, setUser] = useState(null);
    // const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }

    

    const useStyles = makeStyles({
        list: {
            width: 250,
        },
        fullList: {
            width: 'auto',
        },
    });
    
    const classes = useStyles();
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                <ListItem button key={'Home'}>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary={'Home'} />
                </ListItem>
                <ListItem button key={'Login'}>
                    <ListItemIcon><LoginIcon /></ListItemIcon>
                    <ListItemText primary={'Login'} />
                </ListItem>
                <ListItem button key={'Signup'}>
                    <ListItemIcon><HowToRegIcon /></ListItemIcon>
                    <ListItemText primary={'Signup'} />
                </ListItem>
                <ListItem button key={'Create Game'}> 
                    <ListItemIcon><ModeEditIcon /></ListItemIcon>
                    <ListItemText primary={'Create Game'} />
                </ListItem>
                <ListItem button key={'Edit Game'}>
                    <ListItemIcon><ModeEditIcon /></ListItemIcon>
                    <ListItemText primary={'Edit Game'} />
                </ListItem>
                <ListItem button key={'Delete Game'}>
                    <ListItemIcon><ModeEditIcon /></ListItemIcon>
                    <ListItemText primary={'Delete Game'} />
                </ListItem>
            </List>
        </div>
    );

        // material ui responsive drawer, permanent for wider screen, temporary for small screens.


        
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
                    </Nav>
                </Collapse>
            </Navbar>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/login" element={<Login updateToken={props.updateToken} sessionToken={props.sessionToken} />} />
                <Route path="/signup" element={<Signup updateToken={props.updateToken} sessionToken={props.sessionToken} />} />
                <Route path="/creategame" element={<GameCreateModal sessionToken={props.sessionToken}/>} />
                {/* <Route path="/editgame" element={<GameEditDeleteModal sessionToken={props.sessionToken} games={props.games} fetchGames={props.fetchGames} updateOn={props.updateOn} updateOff={props.updateOff} editUpdateGame={props.editUpdateGame} />} /> */}
                <Route path="/editgame" element={<GameEditDeleteModal 
                                                        props={props}
                                                        updateActive={props.updateActive} 
                                                        updateGame={props.updateGame} 
                                                        updateOn={props.updateOn} 
                                                        updateOff={props.updateOff} 
                                                        sessionToken={props.sessionToken} 
                                                        games={props.games}
                                                        updateModalActive={props.updateModalActive}
                                                        editModalActive={props.editModalActive}
                                                        gameMapper={props.gameMapper}
                    />} />
            </Routes>
        </div>
    );
}

export default Sidebar;