import React from "react";
import { useState, useEffect } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody
} from 'mdb-react-ui-kit';


const GameViewModal = (props) => {
    const [games, setGames] = useState('')
    const [optSmModal, setOptSmModal] = useState(false);


    const viewGame = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3000/game/${props.id}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.sessionToken}`
            })
        }).then((res) => res.json())
            .then((gameData) => {
                setGames(gameData)
            })
    }

    useEffect(() => {
        viewGame();
    }, [])

    const gameModalMapper = () => {
        return props.games.map((game, index) => {
            return (
                <MDBModalContent key={index}>
                    <MDBModalHeader>
                        <MDBModalTitle>{game.name}</MDBModalTitle>
                    </MDBModalHeader>
                    <MDBModalBody>
                        {game.gamedescription}
                        {game.esrbrating}
                        {game.reviewrating}
                        {game.reviewdescription}
                        {game.platforms}
                        {game.tags}
                    </MDBModalBody>
                </MDBModalContent>
            )
        })
    }

    return (
        <div className="game-view-modal">
            <MDBBtn onClick={viewGame}>View Game</MDBBtn>
            <MDBModal show={optSmModal} tabIndex='-1' setShow={setOptSmModal}>
                <MDBModalDialog size='sm'>
                    <MDBModalContent>
                        {gameModalMapper()}
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </div>
    )
}

export default GameViewModal;