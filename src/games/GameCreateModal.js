import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
//TODO Switch between Heroku and Localhost here:
import Sidebar from '../home/Sidebar';
import APIURL from '../helpers/environment';
// const APIURL = 'http://localhost:3000'
//TODO Switch back to Heroku URL when committing. 

const GameCreateModal = (props) => {
    console.log(props)
    const [name, setName] = useState('');
    const [boxart, setBoxart] = useState('');
    const [gamedescription, setGamedescription] = useState('');
    const [esrbrating, setEsrbrating] = useState('');
    const [reviewrating, setReviewrating] = useState('');
    const [reviewdescription, setReviewdescription] = useState('');
    const [platforms, setPlatforms] = useState('');
    const [tags, setTags] = useState('');
    const [owner_id, setOwner_id] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/game/create`, {
            method: 'POST',
            body: JSON.stringify({ game: { name: name, boxart: boxart, gamedescription: gamedescription, esrbrating: esrbrating, reviewrating: reviewrating, reviewdescription: reviewdescription, platforms: platforms, tags: tags, owner_id: owner_id } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.sessionToken}`
            })
        }).then((res) => res.json())
            .then((gameData) => {
                console.log(gameData);
                setName('');
                setBoxart('');
                setGamedescription('');
                setEsrbrating('');
                setReviewrating('');
                setReviewdescription('');
                setPlatforms('');
                setTags('');
                setOwner_id('');
                // props.fetchGames(); --Pretty sure this is only for loading a new page, unneseccary since is modal, leaving for now
            })
    }

    return (
        <Modal isOpen={true}>
            <ModalHeader>Create Game</ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label htmlFor='name' />
                        <Input name='name' value={name} onChange={(event) => setName(event.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='boxart' />
                        <Input name='boxart' value={boxart} onChange={(event) => setBoxart(event.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='gamedescription' />
                        <Input name='gamedescription' value={gamedescription} onChange={(event) => setGamedescription(event.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='esrbrating' />
                        <Input type='select' name='esrbrating' value={esrbrating} onChange={(event) => setEsrbrating(event.target.value)}>
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
                        <Input type='select' name='reviewrating' value={reviewrating} onChange={(event) => setReviewrating(event.target.value)}>
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
                        <Input name='reviewdescription' value={reviewdescription} onChange={(event) => setReviewdescription(event.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor='platforms' />
                        <Input type='select' name='platforms' value={platforms} onChange={(event) => setPlatforms(event.target.value)}>
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
                        <Input name='tags' value={tags} onChange={(event) => setTags(event.target.value)} />
                    </FormGroup>
                    <Button type='submit'>Submit Game</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}


export default GameCreateModal;