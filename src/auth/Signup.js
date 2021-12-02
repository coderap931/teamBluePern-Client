//* Insert imports here
import { UseState } from 'react';
//import material ui modal, button, and form
import { modal } from '@material-ui/core';
import { button } from '@material-ui/core';
import { form } from '@material-ui/core';

const Signup = (props) => {
    const [username, setUsername] = UseState('');
    const [email, setEmail] = UseState('');
    const [password, setPassword] = UseState('');
    const [confirmPassword, setConfirmPassword] = UseState('');
    const [modal, setModal] = UseState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:3000/user/register",{ 
            method: 'POST',
            body: JSON.stringify({ user: { username: username, email: email, passwordhash: password } }), 
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json() 
        ).then((data) => {
            props.updateToken(data.sessionToken) 
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
                <button onClick={toggle}>Sign Up</button>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <div>
                        <button type="submit" disabled={!validPassword()}>Submit</button>
                    </div>
                </form>
                <modal open={modal} onClose={toggle}>
                    <div>
                        <h1>You've Signed Up!</h1>
                    </div>
                </modal>
            </div>
        )
}


export default Signup;