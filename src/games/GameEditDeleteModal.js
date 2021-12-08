import React from 'react';
import { Table, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
//TODO Switch between Heroku and Localhost here:
import APIURL from '../helpers/environment';
//TODO Switch back to Heroku URL when committing. 

const GameTable = (props) => {
    console.log("EditDelete:", props)
    const deleteGame = (game) => {
        fetch(`${APIURL}/game/remove/${game.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.sessionToken}`
            })
        }).then(() => props.fetchGames())
    }

    const gameMapper = () => {
        return props.games.games.map((game, index) => {
            return (
                <tr key={index}>
                    <th scope='row'>{game.id}</th>
                    <td>{game.name}</td>
                    <td>{game.boxart}</td>
                    <td>{game.reviewrating}</td>
                    <td>
                        <Button color='warning' onClick={() => { props.editUpdateGame(game); props.updateOn() }}>Updated</Button>
                        <Button color='danger' onClick={() => { deleteGame(game) }}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <Modal isOpen={true}>
            <ModalHeader>Edit/Delete a Game</ModalHeader>
            <ModalBody>
                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Boxart</th>
                            <th>Review Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gameMapper()}
                    </tbody>
                </Table>
            </ModalBody>
        </Modal>
    )
}


export default GameTable;