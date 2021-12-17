//* Insert imports here
import { useState, useEffect } from 'react';
// navigate to switch between pages on React-Router-Dom https://dev.to/salehmubashar/usenavigate-tutorial-react-js-aop
import { useNavigate} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
//TODO Switch between Heroku and Localhost here:
import APIURL from '../helpers/environment';
//TODO Switch back to Heroku URL when committing. 

const Signup = (props) => {
    console.log("Signup.js: props: ", props);
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

    //! Fetch for signup submit function
    //* signup function that sets username+email and password to state
    //* hash the password before sending to server
    //* compare password and confirmPassword to ensure they match
    //* if passwords match, send to server
    //* if passwords do not match, display error message
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

    //! toggles for modals and sidebar
    //* toggle function that toggles the modal
    const toggle = () => {
        setModal(!modal);
    }

        //* toggle function that closes the modal when ModalHeader is clicked
        const closeModal = () => {
            setModal(false);
            if (modal === false) {
                navigate('/all');
            }
        }

    //* closes sidebar when modal is opened
    const closeSidebar = () => {
        if (modal === true) {
            props.setToggleSidebar(false);
        }
    }

    //* useEffect to close sidebar when modal is opened
    useEffect(() => {
        closeSidebar();
        console.log(modal)
    }, [modal]);


    //! Validation fields
    //* validate password
    const validPassword = () => {
        return password.length > 8 && password.match(/[A-Z]/) !== null && password.match(/[a-z]/) !== null && password.match(/[0-9]/) !== null;
    }

    //* validate confirm password. return error if passwords don't match
    const validConfirmPassword = () => {
        if (password !== confirmPassword) {
            return 'Passwords do not match!';
        }
        return '';
    }

    //* validate email
    const validEmail = () => {
        if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) === null) {
            return 'Invalid email!';
        }
        return '';
    }

    //* validate username
    const validUsername = () => {
        if (username.length < 3) {
            return 'Username must be at least 3 characters long!';
        }
    }

    //TODO get this working
    //* return a checkmark once you validate all fields
    const validAll = () => {
        if (validEmail() && validUsername() && validPassword() && validConfirmPassword() === '') {
            return '✔';
        }
        return '';
    }
    

    //* show user password requirements until they're met
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
    }   //! End of validation fields
    

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

    //* show Password fields
    //! showPassword function()
    const showPassword = () => {
        let x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    //! showPassword <button>
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
        top: '315px',
    }

    //* show Confirm Password fields
    //! showConfirmPassword function()
    const showConfirmPassword = () => {
        let x = document.getElementById("confirmPassword");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    //! showConfirmPassword <button>
    const showConfirmPasswordButton = {
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
        top: '445px',
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
                            <p style={{color: '#0C7B93', fontSize: '0.7em'}}>{validUsername()}</p>
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="text" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <p style={{color: '#0C7B93', fontSize: '0.7em'}}>{validEmail()}</p>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <p style={{color: '#0C7B93', fontSize: '0.7em'}}>{passwordRequirements()}</p>
                            <Button style={showPasswordButton} onClick={showPassword}></Button>
                        </FormGroup>
                        <FormGroup>
                            <Label for="confirmPassword">Confirm Password</Label>
                            <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                            <p style={{color: '#0C7B93', fontSize: '0.7em'}}>{validConfirmPassword()}</p>
                            <Button style={showConfirmPasswordButton} onClick={showConfirmPassword}></Button>
                        </FormGroup>
                        <Button style={submitButton} type="submit">Sign Up</Button>
                        <p>{validAll()}</p>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
    }
    





export default Signup;