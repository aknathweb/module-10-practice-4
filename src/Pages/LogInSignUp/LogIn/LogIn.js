import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthcontextProvider';

const LogIn = () => {
    // show error message
    const [error, setError] = useState("");
    // user sign function use from AuthContext Context api
    const { signIn } = useContext(AuthContext);
    // useNavigate to create link
    const navigate = useNavigate();

    // collect browser current location information
    const location = useLocation();
    // collect browser current location path and if no path found set '/' path
    const from = location.state?.from?.pathname || '/';

    // take login form information and perform login operation start
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // sign in function use and then for resolved promise
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                // successfully login clear error message
                setError('');
                // set dynamic path base on location path information and replace condition set true
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.error(error);
                // for error set error message
                setError(error.message);
            })
    }
    // take login form information and perform login operation end

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
            <br />
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </Form>
    );
};

export default LogIn;