import React from 'react';
import { Table, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import APIURL from '../helpers/environment';
// const APIURL = 'http://localhost:3000'

const GameTable = (props) => {
    const deleteGame = (game) => {
        fetch(`${APIURL}/game/remove/${game.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then(() => props.fetchGames())
    }

    const gameMapper = () => {
        return props.games.map((game, index) => {
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