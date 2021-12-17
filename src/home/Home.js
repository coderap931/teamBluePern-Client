import React, { useState } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage } from 'mdb-react-ui-kit';

const HomePage = (props) => {

    const gameGridMapper = () => {
        return props.games.games?.map((game, index) => {
            return (
                <MDBCard key={index}>
                    <MDBCardBody className="cardbody">
                        <MDBCardImage className="boxart" src={game.boxart} />
                        <MDBCardTitle>{game.name}</MDBCardTitle>
                        <p>Description:</p> {game.gamedescription}
                        <br />
                        <p>ESRB Rating:</p>  {game.esrbrating}
                        <br />
                        <p>Rating:</p>  {game.reviewrating} / 10
                        <br />
                        <p>Review Description:</p>  {game.reviewdescription}
                        <br />
                        <p>Platforms:</p>  {game.platforms}
                        <br />
                        <p>Tags:</p>  {game.tags}
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