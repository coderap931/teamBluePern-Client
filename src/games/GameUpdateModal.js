import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
//TODO Switch between Heroku and Localhost here:
import APIURL from '../helpers/environment';
// const APIURL = 'http://localhost:3000'
//TODO Switch back to Heroku URL when committing. 

const GameUpdateModal = (props) => {
    const [editName, setEditName] = useState('');
    const [editBoxart, setEditBoxart] = useState('');
    const [editGamedescription, setEditGamedescription] = useState('');
    const [editEsrbrating, setEditEsrbrating] = useState('');
    const [editReviewrating, setEditReviewrating] = useState('');
    const [editReviewdescription, setEditReviewdescription] = useState('');
    const [editPlatforms, setEditPlatforms] = useState('');
    const [editTags, setEditTags] = useState('');
    // const [editOwner_id, setEditOwner_id] = useState(''); -- Shouldnt change on edit, but unsure if needed to retain value, keeping for now

    const gameUpdate = (event, gameToUpdate) => {
        event.preventDefault();
        fetch(`${APIURL}/game/edit=${props.gameToUpdate.id}`, {
            method: 'PUT',
            // Add editOwner_id to the body if needed
            body: JSON.stringify({ game: { name: editName, boxart: editBoxart, gamedescription: editGamedescription, esrbrating: editEsrbrating, reviewrating: editReviewrating, reviewdescription: editReviewdescription, platforms: editPlatforms, tags: editTags } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => {
            props.fetchGames();
            props.updateOff();
        })
    }

    return (
        <Modal isOpen={true}>
            <ModalHeader>Edit Game/Review Details</ModalHeader>
            <ModalBody>
                <Form onSubmit={gameUpdate}>
                    <FormGroup>
                        <Label htmlFor='name' />
                        <Input name='name' value={editName} onChange={(event) => setEditName(event.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='boxart' />
                        <Input name='boxart' value={editBoxart} onChange={(event) => setEditBoxart(event.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='gamedescription' />
                        <Input name='gamedescription' value={editGamedescription} onChange={(event) => setEditGamedescription(event.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='esrbrating' />
                        <Input type='select' name='esrbrating' value={editEsrbrating} onChange={(event) => setEditEsrbrating(event.target.value)}>
                            <option value='eC'>Early Childhood (eC)</option>
                            <option value='E'>Everyone (E)</option>
                            <option value='E10+'>Everyone 10+ (E10+)</option>
                            <option value='T'>Teen (T)</option>
                            <option value='M'>Mature (M)</option>;
                            <option value='AO'>Adults Only (AO)</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='reviewrating' />
                        <Input type='select' name='reviewrating' value={editReviewrating} onChange={(event) => setEditReviewrating(event.target.value)}>
                            <option value='1'>1/10</option>
                            <option value='2'>2/10</option>
                            <option value='3'>3/10</option>
                            <option value='4'>4/10</option>
                            <option value='5'>5/10</option>
                            <option value='6'>6/10</option>
                            <option value='7'>7/10</option>
                            <option value='8'>8/10</option>
                            <option value='9'>9/10</option>
                            <option value='10'>10/10</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='reviewdescription' />
                        <Input name='reviewdescription' value={editReviewdescription} onChange={(event) => setEditReviewdescription(event.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='platforms' />
                        <Input type='select' name='platforms' value={editPlatforms} onChange={(event) => setEditPlatforms(event.target.value)}>
                            <option value='nswitch'>Nintendo Switch</option>
                            <option value='xone'>Xbox One</option>
                            <option value='ps4'>PlayStation 4</option>
                            <option value='xseriess'>Xbox Series S</option>
                            <option value='xseriesx'>Xbox Series X</option>
                            <option value='ps5'>PlayStation 5</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='tags' />
                        <Input name='tags' value={editTags} onChange={(event) => setEditTags(event.target.value)} />
                    </FormGroup>
                    <Button type='submit'>Submit Game</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}


export default GameUpdateModal;