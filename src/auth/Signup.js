//* Insert imports here
import { useState } from 'react';
// navigate to switch between pages on React-Router-Dom https://dev.to/salehmubashar/usenavigate-tutorial-react-js-aop
import { useNavigate} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
//TODO Switch between Heroku and Localhost here:
import APIURL from '../helpers/environment';
//TODO Switch back to Heroku URL when committing. 

const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [modal, setModal] = useState(false);
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
             navigate('/home');
        })
    }

    const toggle = () => {
        setModal(!modal);
    }

    // validate password
    const validPassword = () => {
        return password.length > 8 && password.match(/[A-Z]/) !== null && password.match(/[a-z]/) !== null && password.match(/[0-9]/) !== null;
    }

    return (
        <div>
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>Sign Up</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="username">Username</Label>
                            <Input type="text" name="username" id="username" placeholder="Username" value={username} onChange={(event) => setUsername(event.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="confirmPassword">Confirm Password</Label>
                            <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
                        </FormGroup>
                        <Button type='submit' color="primary" disabled={!validPassword()}>Submit</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}



export default Signup;