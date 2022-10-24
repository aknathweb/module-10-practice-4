import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthcontextProvider';

const SignUp = () => {
    // to set trams and conditions conditjion
    const [accepted, setAccepted] = useState(false);

    // show error message
    const [error, setError] = useState("");

    // user createUser and updateProfile function use from AuthContext Context api
    const { createUser, updateUserProfile, verificationUserEmail } = useContext(AuthContext);

    // to set user name and photoURL make function
    const handleUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    // to verification user email
    const handleEmailVerification = () => {
        verificationUserEmail()
            .then(() => { })
            .catch(error => console.error(error))
    }

    //  to check trams and condition checkmark are marked or not
    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }


    // take Sign Up form information and perform login operation start
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);
        // createUser Sign up function use and then for resolved promise
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // successfully signUp clear error message
                setError('')
                form.reset();
                // to set user name and photoURL call function 
                handleUpdateProfile(name, photoURL);
                // to verification email
                handleEmailVerification();
            })
            .catch(e => {
                console.error(e);
                // for error set error message
                setError(e.message);
            });
    }
    // take Sign Up form information and perform login operation end

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name="name" type="text" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    onClick={handleAccepted}
                    label={<>Accept <Link to="/termsandconditions">Terms and conditions</Link></>} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
            <br />
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
    );
};

export default SignUp;