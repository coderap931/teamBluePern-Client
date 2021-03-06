import React, {useState, useEffect} from 'react';
import { Container } from 'reactstrap';
//TODO Switch between Heroku and Localhost here:
import APIURL from '../helpers/environment';
//TODO Switch back to Heroku URL when committing. 


const GameTable = (props) => {
    useEffect(() => {
        props.fetchYourGames();
      }, []);

    return (
        <Container>
        <>{props.updateActive ? props.updateModalActive(props) : props.editModalActive(props)}</>
        </Container>
    )
}


export default GameTable;