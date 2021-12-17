// import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage, MDBBtn} from 'mdb-react-ui-kit';
// //TODO Switch between Heroku and Localhost here:
// //TODO Switch back to Heroku URL when committing. 
import React, { useState } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage} from 'mdb-react-ui-kit';
//TODO Switch between Heroku and Localhost here:
//TODO Switch back to Heroku URL when committing.

const HomePage = (props) => {
    console.log("Home Props:", props)
    console.log("Home Props.Games:", props.games)
    const [button, setButton] = useState(false);

    const gameGridMapper = () => {
        return props.games.games?.map((game, index) => {
            return (
                <MDBCard key={index}>
                    <MDBCardBody>
                        <MDBCardImage src={game.boxart} />
                        <MDBCardTitle>{game.name}</MDBCardTitle>
                        Description: {game.gamedescription}
                        <br/>
                        ESRB Rating: {game.esrbrating}
                        <br/>
                        Rating: {game.reviewrating} / 10
                        <br/>
                        Review Description: {game.reviewdescription}
                        <br/>
                        Platforms: {game.platforms}
                        <br/>
                        Tags: {game.tags}
                    </MDBCardBody>
                </MDBCard>
            )
        })
    }

    return (
        <div className="home-page">
            {gameGridMapper()}
        </div>
    )
};


export default HomePage;