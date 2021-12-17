import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
//TODO Switch between Heroku and Localhost here:
import APIURL from '../helpers/environment';
//TODO Switch back to Heroku URL when committing. 

const GameUpdateModal = (props) => {
    console.log("Update:", props)
    const [editName, setEditName] = useState('');
    const [editBoxart, setEditBoxart] = useState('');
    const [editGamedescription, setEditGamedescription] = useState('');
    const [editEsrbrating, setEditEsrbrating] = useState('');
    const [editReviewrating, setEditReviewrating] = useState('');
    const [editReviewdescription, setEditReviewdescription] = useState('');
    const [editPlatforms, setEditPlatforms] = useState('');
    const [editTags, setEditTags] = useState('');
    // const [editOwner_id, setEditOwner_id] = useState(''); -- Shouldnt change on edit, but unsure if needed to retain value, keeping for now

    const gameUpdate = (event) => {
        console.log("gameUpdate()", props)
        event.preventDefault();
        fetch(`${APIURL}/game/edit/${props.changeGame.id}`, {
            method: 'PUT',
            body: JSON.stringify({ game: { name: editName, boxart: editBoxart, gamedescription: editGamedescription, esrbrating: editEsrbrating, reviewrating: editReviewrating, reviewdescription: editReviewdescription, platforms: editPlatforms, tags: editTags } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.sessionToken}`
            })
        }).then(() => {
            props.fetchYourGames();
            props.updateOff();
        })
    }

    useEffect(() => {
        console.log("UseEffect for GameUpdateModal:", props)
    }, [])

    return (
        <Modal isOpen={true}>
            <ModalHeader>Edit Game/Review Details</ModalHeader>
            <ModalBody>
                <Form onSubmit={gameUpdate}>
                    <FormGroup>
                        <Label>Game Name</Label>
                        <Input name='name' value={editName} placeholder={props.changeGame.name} onChange={(event) => setEditName(event.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Game Boxart (Link)</Label>
                        <Input name='boxart' value={editBoxart} placeholder={props.changeGame.boxart} onChange={(event) => setEditBoxart(event.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Game Description</Label>
                        <Input name='gamedescription' value={editGamedescription} placeholder={props.changeGame.gamedescription} onChange={(event) => setEditGamedescription(event.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label>ESRB Rating</Label>
                        <Input type='select' name='esrbrating' value={editEsrbrating} placeholder={props.changeGame.esrbrating} onChange={(event) => setEditEsrbrating(event.target.value)}>
                            <option value='eC'>Early Childhood (eC)</option>
                            <option value='E'>Everyone (E)</option>
                            <option value='E10+'>Everyone 10+ (E10+)</option>
                            <option value='T'>Teen (T)</option>
                            <option value='M'>Mature (M)</option>;
                            <option value='AO'>Adults Only (AO)</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Review Score (Out of 10)</Label>
                        <Input type='select' name='reviewrating' value={editReviewrating} placeholder={props.changeGame.reviewrating} onChange={(event) => setEditReviewrating(event.target.value)}>
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
                        <Label>Review Details</Label>
                        <Input name='reviewdescription' value={editReviewdescription} placeholder={props.changeGame.reviewdescription} onChange={(event) => setEditReviewdescription(event.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Platfrom Played On</Label>
                        <Input type='select' name='platforms' value={editPlatforms} placeholder={props.changeGame.platforms} onChange={(event) => setEditPlatforms(event.target.value)}>
                            <option value='nswitch'>Nintendo Switch</option>
                            <option value='xone'>Xbox One</option>
                            <option value='ps4'>PlayStation 4</option>
                            <option value='xseriess'>Xbox Series S</option>
                            <option value='xseriesx'>Xbox Series X</option>
                            <option value='ps5'>PlayStation 5</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Tags (Comma Seperated)</Label>
                        <Input name='tags' value={editTags} placeholder={props.changeGame.tags} onChange={(event) => setEditTags(event.target.value)} />
                    </FormGroup>
                    <Button type='submit'>Submit Game</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}


export default GameUpdateModal;