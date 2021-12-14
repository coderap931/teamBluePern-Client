import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

const GameGrid = (props) => {
    console.log("Props:", props)
    console.log("Props.Games:", props.games)

    const gameGridMapper = () => {
        return props.games.games.map((game, index) => {
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
                    {gameGridMapper()}
                </MDBCardBody>
            </MDBCard>
        </div>
    )
}


export default GameGrid
