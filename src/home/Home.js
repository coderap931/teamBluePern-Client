import React, { useState } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage} from 'mdb-react-ui-kit';

const HomePage = (props) => {

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

    // const gameGridMapper = () => {
    //     return props.games.map((game, index) => {
    //         return (
    //             <Card key={index}>
    //                 <CardBody>
    //                     <CardImg src={game.boxart} />
    //                     <CardTitle>{game.name}</CardTitle>
    //                     {/* <Button onClick={() => {setButton(!button)}}> View Details </Button> */}
    //                 </CardBody>
    //             </Card>
    //         )
    //     })
    // }

    return (
        <div className="home-page">
            {gameGridMapper()}
        </div>
    )
};


export default HomePage;