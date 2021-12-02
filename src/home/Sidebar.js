// import material ui drawer from material ui
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import { useState, useEffect } from 'react';
import HomePage from './Home';
import { Router, Switch, Route, Link } from 'react-router-dom';

//! Alex's Imports
import Login from '../auth/Login'; //Login Page | Likely being moved into Sidebar. //!Alex
import Signup from '../auth/Signup'; //Signup Page | Likely being moved into Sidebar. //!Alex
//! Adam's Imports

const Sidebar = (props) => {

        const [isOpen, setIsOpen] = useState(false);
        const toggleCollapse = () => {
            setIsOpen(!isOpen);
        }

        // drawer for the sidebar where you can click log in, sign up, and home
        return (
            <div>
                <Drawer
                    variant="permanent"
                    anchor="left"
                    open={true}
                    className="sidebar"
                >
                    <List>
                        <ListItem button component={Link} to="/">
                            <ListItemIcon>
                                <MenuIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button component={Link} to="/login">
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Login" />
                        </ListItem>
                        <ListItem button component={Link} to="/signup">
                            <ListItemIcon>
                                <MailIcon />
                            </ListItemIcon>
                            <ListItemText primary="Signup" />
                        </ListItem>
                    </List>
                </Drawer>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/signup">
                        <Signup />
                    </Route>
                </Switch>
            </div>
        )
    }

    export default Sidebar;