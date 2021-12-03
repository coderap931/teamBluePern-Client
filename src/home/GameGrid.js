import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';


const GameGrid = (props) => {

    const gameMapper = () => {
        return props.games.map((game, index) => {
            return (
                <MDBCardBody key={index}>
                    <MDBCardImage src={game.boxart} />
                    <MDBCardTitle>{game.name}</MDBCardTitle>
                    <MDBBtn> View Game </MDBBtn>
                </MDBCardBody>
            )
        })
    }

    return (
        <div>
            <MDBCard>
                <MDBCardBody>
                    {gameMapper()}
                </MDBCardBody>
            </MDBCard>
        </div>
    )
}

export default GameGrid
