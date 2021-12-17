//* Imports replaced here
import React from 'react';
import { useState } from 'react';
//* navigate to switch between pages on React-Router-Dom | Reference: https://dev.to/salehmubashar/usenavigate-tutorial-react-js-aop
import { useNavigate } from 'react-router-dom';
//*import from reactstrap
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
//TODO Switch between Heroku and Localhost here:
import APIURL from '../helpers/environment';
//TODO Switch back to Heroku URL when committing. 

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modal, setModal] = useState(false);
    const [serverResponse, setServerResponse] = useState('');
    const [serverStatus, setServerStatus] = useState('');
    const navigate = useNavigate();

    // login function that sets username+email and password to state
    const handleSubmit = (event) => {
        let responseStatus;
        event.preventDefault();
        fetch(`${APIURL}/user/login`, {
            method: 'POST',
            body: JSON.stringify({ user: { username: username, email: email, passwordhash: password } }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => {
                setServerStatus(`${response.status}`);
                console.log(response.status);
                responseStatus = response.status;
                console.log(responseStatus);
                return response.json();
            }
        ).then((data) => {
            props.updateToken(data.sessionToken)
            setServerResponse(data.message);
            console.log("data.message: " + data.message);
            console.log("responseStatus:", responseStatus);
            if (responseStatus == '200')
                navigate('/all');
        })
    }

    // toggle function that toggles the modal
    const toggle = () => {
        setModal(!modal);
    }

    // toggle function that closes the modal when ModalHeader is clicked
    const closeModal = () => {
        setModal(false);
        if (modal === false) {
            navigate('/all');
        }
    }

    //* custom color button
    const customButton = {
        backgroundColor: '#0c7b93',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '10px',
        fontSize: '16px',
        margin: '10px',
        cursor: 'pointer'
    }

    //! Show password and its button
// button in password to show/hide password
    const showPassword = () => {
        let x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
    const showPasswordButton = {
        backgroundColor: '#FCD1D1',
        color: 'black',
        border: 'none',
        borderRadius: '5px',
        padding: '10px',
        fontSize: '16px',
        margin: '10px',
        cursor: 'pointer',
        float: 'right',
        width: '50px',
        height: '25px',
        backgroundImage: 'url(https://img.icons8.com/material/15/000000/visible--v1.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
        right: '20px',
        top: '167px',
    }


    return (
        <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={closeModal}>Login</ModalHeader>

        <ModalBody>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                <Label for="username-and-email">Username or Email</Label>
                <Input type="text" name="username-and-email" id="username-and-email" placeholder="Username or Email" value={username, email} onChange={(e) => { setUsername(e.target.value); setEmail(e.target.value) }} />
                </FormGroup>
                <FormGroup>
                <Label for="password">Password</Label>
                
                <Input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button style={showPasswordButton} onClick={showPassword}></Button>
                </FormGroup>
                <Button style={customButton} type="submit">Login</Button>
            </Form>
            </ModalBody>
        </Modal>
    )
}

export default Login;