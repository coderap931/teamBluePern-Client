//* Imports replaced here
import React, { UseState } from 'react';
import { MDBContainer, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBBtn, MDBIcon, MDBInput, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';

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
        <MDBContainer>
        <MDBBtn onClick={toggle}>Login</MDBBtn>
        <MDBModal isOpen={modal} toggle={toggle}>
            <MDBModalHeader toggle={toggle}>Login</MDBModalHeader>
            <MDBModalBody>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol>
                            <form onSubmit={handleSubmit}>
                                <MDBInput
                                    label="Username"
                                    icon="user"
                                    group
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <MDBInput
                                    label="Email"
                                    icon="envelope"
                                    group
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <MDBInput
                                    label="Password"
                                    icon="lock"
                                    group
                                    type="password"
                                    validate
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div className="text-center">
                                    <MDBBtn type="submit">Login</MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </MDBModalBody>
            <MDBModalFooter>
                <MDBBtn color="secondary" onClick={toggle}>Cancel</MDBBtn>
                <MDBBtn color="primary" onClick={handleSubmit}>Login</MDBBtn>
            </MDBModalFooter>
        </MDBModal>
    </MDBContainer>
);
}

export default Login;