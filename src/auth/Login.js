//* Imports replaced here
import React from 'react';
import { useState } from 'react';
//import from reactstrap the modal component, and the button component, and the input component, and the row and col components, and the container component
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modal, setModal] = useState(false);

    // login function that sets username+email and password to state
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/user/login', {
            method: 'POST',
            body: JSON.stringify({ user: { username: username, email: email, passwordhash: password } }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken);
        })
    }

    const toggle = () => {
        setModal(!modal);
    }

    return (
        //* Modal opens on login button click and closes on cancel button click. onChange set username and email to same value. prompt for register if user doesn't exist.
        <div>
            <Button color="primary" onClick={toggle}>Login</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input type="text" name="username" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </FormGroup>
                        <Button type="submit" color="primary">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default Login;