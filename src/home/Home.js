// import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage, MDBBtn} from 'mdb-react-ui-kit';
// //TODO Switch between Heroku and Localhost here:
// //TODO Switch back to Heroku URL when committing. 
import React, { useState } from 'react';
import {Card, Button, CardBody, CardImg, CardTitle} from 'reactstrap';
//TODO Switch between Heroku and Localhost here:
//TODO Switch back to Heroku URL when committing. 

const HomePage = (props) => {
    console.log("Home Props:", props)
    console.log("Home Props.Games:", props.games)
    const [button, setButton] = useState(false);

    const gameGridMapper = () => {
        return props.games.games?.map((game, index) => {
            return (
                <Card key={index}>
                    <CardBody>
                        <CardImg src={game.boxart} />
                        <CardTitle>{game.name}</CardTitle>
                        <Button onClick={() => {setButton(!button)}}> View Game </Button>
                    </CardBody>
                </Card>
            )
        })
    }

    return (
        <div className="home-page">
            {gameGridMapper()}
            {button ? props.gameModalMapper(props) : null}
        </div>
    )
};

export default HomePage;