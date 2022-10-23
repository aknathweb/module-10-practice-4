import React from 'react';
import { Link } from 'react-router-dom';

const TramsAndConditions = () => {
    return (
        <div>
            <h3>Here is our Trams and Conditions</h3>
            <p>Go back to: <Link to={'/signup'}>Sign Up</Link></p>
        </div>
    );
};

export default TramsAndConditions;