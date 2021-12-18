import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
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
    const [serverResponse, setServerResponse] = useState('');
    const [serverStatus, setServerStatus] = useState('');
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();
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

    //! toggles for modals
    //* toggle function that toggles the modal
    const toggle = () => {
        setModal(modal);
    }

    //* toggle function that closes the modal when ModalHeader is clicked
    const closeModal = () => {
        setModal(false);
        if (modal === false) {
            navigate('/editdeleteall');
        }
    }

    //! Arrays for form options
    //* list of gaming platforms
    const platformsArray = [
        { value: '3DS', label: '3DS' },
        { value: 'DS', label: 'DS' },
        { value: 'GB', label: 'Game Boy' },
        { value: 'GBC', label: 'Game Boy Color' },
        { value: 'GBA', label: 'Game Boy Advance' },
        { value: 'Mbl', label: 'Mobile' },
        { value: 'Other', label: 'Other' },
        { value: 'PC', label: 'PC (Steam, Origin, Epic...)' },
        { value: 'PS1', label: 'Playstation 1' },
        { value: 'PS2', label: 'Playstation 2' },
        { value: 'PS3', label: 'Playstation 3' },
        { value: 'PS4', label: 'Playstation 4' },
        { value: 'PS5', label: 'Playstation 5' },
        { value: 'PSP', label: 'Playstation Portable' },
        { value: 'Switch', label: 'Nintendo Switch' },
        { value: 'VR', label: 'Virtual Reality' },
        { value: 'Wii', label: 'Wii' },
        { value: 'WiiU', label: 'Wii U' },
        { value: 'Xbox', label: 'Xbox' },
        { value: 'XB360', label: 'Xbox 360' },
        { value: 'XB1', label: 'Xbox One' },
    ]

    //* list of tags
    const tagsArray = ['Action', 'Adventure', 'Arcade', 'Casual', 'Educational', 'Fighting', 'Music', 'Puzzle', 'Racing', 'Role-Playing', 'Shooter', 'Simulation', 'Sports', 'Strategy', 'Trivia', 'Other']

    //*list of ESRB ratings
    const esrbArray = [
        { value: 'E', label: 'E (Everyone)' },
        { value: 'eC', label: 'EC (Early Childhood)' },
        { value: 'e10', label: 'E10+ (Everyone 10+)' },
        { value: 'T', label: 'T (Teen)' },
        { value: 'M', label: 'M (Mature)' },
        { value: 'AO', label: 'AO (Adults Only)' },
        { value: 'RP', label: 'RP (Rating Pending)' },
    ]

    //*list of review ratings
    const reviewArray = [
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        { value: '6', label: '6' },
        { value: '7', label: '7' },
        { value: '8', label: '8' },
        { value: '9', label: '9' },
        { value: '10', label: '10' },
    ]

    //! Dropdown menus

    //* dropdown menu for platforms
    const PlatformDropdown = () => {
        return (
            <FormGroup>
                <Label for="platforms">Platform(s)</Label>
                <Input type="select" name="platforms" id="platforms" multiple onChange={(e) => setEditPlatforms(e.target.value)}>
                    {platformsArray.map((platform) => {
                        return <option key={platform.value} value={platform.value}>{platform.label}</option>
                    })}
                </Input>
            </FormGroup>
        )
    }

    //* dropdown menu for tags
    const TagsDropdown = () => {
        return (
            <FormGroup>
                <Label for="tags">Tags</Label>
                <Input type="select" name="tags" id="tags" multiple onChange={(e) => setEditTags(e.target.value)}>
                    {tagsArray.map((tag) => {
                        return <option key={tag} value={tag}>{tag}</option>
                    })}
                </Input>
            </FormGroup>
        )
    }

    //* dropdown menu for ESRB ratings
    const EsrbDropdown = () => {
        return (
            <FormGroup>
                <Label for="esrbrating">ESRB Rating</Label>
                <Input type="select" name="esrbrating" id="esrbrating" onChange={(e) => setEditEsrbrating(e.target.value)}>
                    {esrbArray.map((esrb) => {
                        return <option key={esrb.value} value={esrb.value}>{esrb.label}</option>
                    })}
                </Input>
            </FormGroup>
        )
    }

    //* dropdown menu for review ratings
    const RatingScoreDropdown = () => {
        return (
            <FormGroup>
                <Label for="reviewrating">Review Rating</Label>
                <Input type="select" name="reviewrating" id="reviewrating" onChange={(e) => setEditReviewrating(e.target.value)}>
                    {reviewArray.map((review) => {
                        return <option key={review.value} value={review.value}>{review.label}</option>
                    })}
                </Input>
            </FormGroup>
        )
    }

    //! End of Dropdown Menus

    //! Cover Art Handling
    //*Boxart upload file feature. Would need to figure out how to address this is in Game Model on Server Side. Not enough time to implement or be able to test on Heroku.
    // const handleFileUpload = (event) => {
    //     const file = event.target.files[0];
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //         setBoxart(reader.result);
    //     };
    //     reader.readAsDataURL(file);
    // }

    //*Boxart image link (string) required conditional to end with either .jpg, .jpeg, or .png. return in form error if not.
    const handleBoxart = (event) => {
        const boxart = event.target.value;
        if (boxart.toLowerCase().endsWith('.jpg') || boxart.toLowerCase().endsWith('.jpeg') || boxart.toLowerCase().endsWith('.png')) {
            setEditBoxart(boxart);
        } else {
            setEditBoxart('');
            setServerResponse('Please enter a valid boxart image link.');
            setServerStatus('danger');
        }
    }
    //! End of Cover Art Handling


    //! Validate Fields
    // validate handleBoxArt
    const validBoxart = () => {
        if (editBoxart.toLowerCase().endsWith('.jpg') || editBoxart.toLowerCase().endsWith('.jpeg') || editBoxart.toLowerCase().endsWith('.png')) {
            return <p style={{ color: '#0C7B93', fontSize: '0.6em' }}>Valid Boxart Image Link</p>
        } else {
            return <p style={{ color: '#0C7B93', fontSize: '0.6em' }}>Please enter a valid cover art link ending in ".jpg", ".jpeg", or ".png".</p>;
        }
    }

    // validate handleName
    const validName = () => {
        if (editName.length > 0) {
            return '';
        } else {
            return 'Please enter anything but nothing.';
        }
    }

    // validate handleGamedescription
    const validGamedescription = () => {
        if (editGamedescription.length > 0) {
            return '';
        } else {
            return "What's this game about?";
        }
    }

    // validate handleEsrbrating
    const validEsrbrating = () => {
        if (editEsrbrating.length > 0) {
            return '';
        } else {
            return "If it's M for Mature, don't ask your parents for it.";
        }
    }

    // validate handleReviewrating
    const validReviewrating = () => {
        if (editReviewrating.length < 2) {
            return <div style={{marginTop: '-25px'}}><p style={{ color: '#0C7B93', fontSize: '0.7em' }}>How many stars would you give this out of 10?</p></div>;
        }
    }

    // validate handleReviewdescription
    const validReviewdescription = () => {
        if (editReviewdescription.length > 0) {
            return '';
        } else {
            return 'What did you think of this game?';
        }
    }

    // validate handlePlatforms
    const validPlatforms = () => {
        if (editPlatforms.length > -1) {
            return <div style={{marginTop: '-25px'}}><p style={{ color: '#0C7B93', fontSize: '0.7em' }}>Platform(s) title was played on.</p></div>;
    }
    }

    // validate handleTags
    const validTags = () => {
        if (editTags.length > 0) {
            return '';
        } else {
            return 'What tag would you give this?';
        }
    }

    // validate all fields or else can't submit and show error
    const validSubmit = () => {
        if (validName() === '' && validGamedescription() === '' && validReviewdescription() === '') {
            return '';
        } else {
            return 'Be a team player please and fill out all fields first.';
        }
    }

    //! Submit <button>
    const submitButton = {
        backgroundColor: '#0c7b93',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px',
        fontSize: '16px',
        margin: '10px',
        cursor: 'pointer'
    }


    return (
        <Modal isOpen={true} toggle={toggle}>
            <ModalHeader toggle={closeModal}>Update Your Game Review</ModalHeader>
            <ModalBody>
                <Form onSubmit={gameUpdate}>
                    <FormGroup>
                        <Label>Game Title</Label>
                        <Input name='name' value={editName} placeholder="Elder Scrolls 6..." onChange={(event) => setEditName(event.target.value)} />
                        <p style={{ color: '#0C7B93', fontSize: '0.7em' }}>{validName()}</p>
                    </FormGroup>
                    <FormGroup>
                        <Label>Cover Art Image Link</Label>
                        <Input name='boxart' value={editBoxart} placeholder="Must end with .jpg, jpeg, or .png." onChange={handleBoxart} />
                        {validBoxart()}
                    </FormGroup>

                    <div className="platformDropdown">
                        {PlatformDropdown()}
                        {validPlatforms()}
                </div>

                    <FormGroup>
                        <Label>Game Description</Label>
                        <Input type="textarea" name='gamedescription' value={editGamedescription} placeholder="Elder Scrolls 6..." onChange={(event) => setEditGamedescription(event.target.value)} />
                        <p style={{ color: '#0C7B93', fontSize: '0.7em' }}>{validGamedescription()}</p>
                    </FormGroup>

                    <div className="esrbDropdown">
                        {EsrbDropdown()}
                    </div>

                    <FormGroup>
                        <Label>Your Review</Label>
                        <Input type="textarea" name='reviewdescription' value={editReviewdescription} onChange={(event) => setEditReviewdescription(event.target.value)} />
                        <p style={{ color: '#0C7B93', fontSize: '0.7em' }}>{validReviewdescription()}</p>
                    </FormGroup>

                    <div className="reviewRating">
                        {RatingScoreDropdown()}
                        {validReviewrating()}
                    </div>

                    <div className="tags">
                        {TagsDropdown()}
                    </div>

                    <Button style={submitButton} type='submit'>Submit Game</Button>
                    <p style={{ color: '#0C7B93', fontSize: '0.6em', margin: '15px' }}>{validSubmit()}</p>
                </Form>
            </ModalBody>
        </Modal>
    )
}


export default GameUpdateModal;