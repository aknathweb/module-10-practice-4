import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { FaGoogle, FaGithub } from "react-icons/fa";

const LoginWith = () => {
    return (
        <ButtonGroup vertical>
            <Button className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
            <Button variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>
        </ButtonGroup>
    );
};

export default LoginWith;