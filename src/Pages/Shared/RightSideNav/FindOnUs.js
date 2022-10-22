import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa";

const FindOnUs = () => {
    return (
        <ListGroup>
            <ListGroup.Item className='mb-2'><FaFacebook /> Facebook</ListGroup.Item>
            <ListGroup.Item className='mb-2'><FaWhatsapp /> WhatsApp</ListGroup.Item>
            <ListGroup.Item className='mb-2'><FaTwitter /> Twitter</ListGroup.Item>
            <ListGroup.Item className='mb-2'><FaTwitch /> Twitch</ListGroup.Item>
        </ListGroup>
    );
};

export default FindOnUs;