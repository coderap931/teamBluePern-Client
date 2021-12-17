//* Insert imports here
import { useState } from 'react';
// navigate to switch between pages on React-Router-Dom https://dev.to/salehmubashar/usenavigate-tutorial-react-js-aop
import { useNavigate} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
//TODO Switch between Heroku and Localhost here:
import APIURL from '../helpers/environment';
//TODO Switch back to Heroku URL when committing. 

const Signup = (props) => {
    //* username and email state variable and setter
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    //* password is not stored in state, but is used to hash the password
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [modal, setModal] = useState(false);
    //* useState and variable to store server response and redirect to home page
    const [serverResponse, setServerResponse] = useState('');
    const [serverStatus, setServerStatus] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        let responseStatus;
        event.preventDefault();
        fetch(`${APIURL}/user/register`, {
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

    // validate password
    const validPassword = () => {
        return password.length > 8 && password.match(/[A-Z]/) !== null && password.match(/[a-z]/) !== null && password.match(/[0-9]/) !== null;
    }

    // validate confirm password. return error if passwords don't match
    const validConfirmPassword = () => {
        if (password !== confirmPassword) {
            return 'Passwords do not match!';
        }
        return '';
    }

    // validate email
    const validEmail = () => {
        if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) === null) {
            return 'Invalid email!';
        }
        return '';
    }

    // validate username
    const validUsername = () => {
        if (username.length < 3) {
            return 'Username must be at least 3 characters long!';
        }
    }
    // return a checkmark once you validate all fields
    const validAll = () => {
        if (validEmail() && validUsername() && validPassword() && validConfirmPassword() === '') {
            return '✔';
        }
        return '';
    }

    // show user password requirements until they're met
    const passwordRequirements = () => {
        if (password.length < 8) {
            return "Password must be at least 8 characters long.";
        }
        else if (password.match(/[A-Z]/) === null) {
            return "Password must contain at least one uppercase letter.";
        }
        else if (password.match(/[a-z]/) === null) {
            return "Password must contain at least one lowercase letter.";
        }
        else if (password.match(/[0-9]/) === null) {
            return "Password must contain at least one number.";
        }
        else {
            return "";
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

    return (
        <div>
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={closeModal}>Sign Up</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input type="text" name="username" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            <p style={{color: '#27496D', fontSize: '0.7em'}}>{validUsername()}</p>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="text" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <p style={{color: '#27496D', fontSize: '0.7em'}}>{validEmail()}</p>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            {passwordRequirements()}
                        </FormGroup>
                        <FormGroup>
                            <Label for="confirmPassword">Confirm Password</Label>
                            <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            {validConfirmPassword()}
                        </FormGroup>
                        <Button style={customButton} type="submit">Sign Up</Button>
                        {validAll()}
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
    }
    





export default Signup;