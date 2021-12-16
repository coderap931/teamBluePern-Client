//! import icons for Sidebar
// import { HomeIcon } from 'react-icons-kit';
// import { CgLogIn, CgLogOut } from 'react-icons/cg';
// import { MdOutlineEditNote } from 'react-icons/md';
// import { AiOutlinePlusCircle } from 'react-icons/ai';
// import { BiUserPlus } from "react-icons/bi";
//! import SideBar react-burger-menu library
import { slide as Menu } from 'react-burger-menu';
//! imports the components for the sidebar
import HomePage from './Home';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import GameCreateModal from '../games/GameCreateModal';
import GameEditDeleteModal from '../games/GameEditDeleteModal';
// import GameViewModal from './GameViewModal';
//! import React features
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
//! import of brandLogo from the assets folder
import brandLogo from '../assets/Gamechest.png';


//TODO add back to route when completed -> // <Route exact path="/gameview" component={GameView} />

const Sidebar = (props) => {
    console.log(props);
    const [isOpen, setIsOpen] = useState(false); //used to open and close the sidebar
    const [route, setRoute] = useState(''); //used to set the route to the current route
    const [isAuthenticated, setIsAuthenticated] = useState(false); //used to check if the user is authenticated

    var styles = {
        bmBurgerButton: {
            position: 'fixed',
            width: '36px',
            height: '30px',
            left: '36px',
            top: '36px'
        },
        bmBurgerBars: {
            background: '#373a47'
        },
        bmBurgerBarsHover: {
            background: '#a90000'
        },
        bmCrossButton: {
            height: '24px',
            width: '24px'
        },
        bmCross: {
            background: '#bdc3c7'
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%'
        },
        bmMenu: {
            background: '#373a47',
            padding: '2.5em 1.5em 0',
            fontSize: '1.15em'
        },
        bmMorphShape: {
            fill: '#373a47'
        },
        bmItemList: {
            color: '#b8b7ad',
            padding: '0.8em'
        },
        bmItem: {
            display: 'inline-block'
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)'
        }
    }

    //! setIsAuthenticated to true if the user is authenticated
    useEffect(() => {
        setIsAuthenticated(props.isAuthenticated);
    }, [props.isAuthenticated]);


    //if "/home" or "/" is the route, then set sidebar to true. Else, set to false
    useEffect(() => {
        if (route === '/home') {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [route]);

    // react-burger-menu sidebar
    // terenary operator to determine if the user is authenticated or not
    // if the user is authenticated, the sidebar will show logout
    // if the user is not authenticated, the sidebar will show login and signup
    return (
        <div>
            <Menu styles={styles} isOpen={isOpen}>
                <div className="sidebar-header">
                    <img src={brandLogo} width='200'></img>
                </div>
                <div className="sidebar-content">
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/home" style={{color: 'white'}} activeStyle={{color: 'red'}}>Home</NavLink>
                        </NavItem>
                        {isAuthenticated ? (
                            <NavItem>
                            <NavLink href="/home" onClick={props.logout} style={{color: 'white'}}>Logout</NavLink>
                        </NavItem>
                        ) : (
                            <>
                        <NavItem>
                            <NavLink href="/login" style={{color: 'white'}}>Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/signup" style={{color: 'white'}}>Register</NavLink>
                        </NavItem>
                        </>
                        )}
                        <NavItem>
                            <NavLink href="/creategame" style={{color: 'white'}}>Create Game</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/editgame" style={{color: 'white'}}>Edit Game</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </Menu>
            <Routes>
                {/* <Route path={route} element={<HomePage games={props.games}/>} /> 
                <Route path="/" element={<HomePage games={props.games} gameModalMapper={props.gameModalMapper}/>} />*/}
                <Route path="/home" element={<HomePage games={props.games} gameModalMapper={props.gameModalMapper} />} />
                <Route path="/login" element={<Login updateToken={props.updateToken} sessionToken={props.sessionToken} />} />
                <Route path="/signup" element={<Signup updateToken={props.updateToken} sessionToken={props.sessionToken} />} />
                <Route path="/creategame" element={<GameCreateModal sessionToken={props.sessionToken} />} />
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