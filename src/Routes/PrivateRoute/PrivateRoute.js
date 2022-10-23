import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthcontextProvider';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (!user) {
        return <Navigate to={'/login'}></Navigate>
    }
    return children;
    /* return (
        <div>
            
        </div>
    ); */
};

export default PrivateRoute;