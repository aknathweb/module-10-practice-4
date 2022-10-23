import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthcontextProvider';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    // location before entry PrivateRoute
    const currentLocation = useLocation();

    if (!user) {
        // Navigate time; set location state from currentLocation 
        // and replace indicate the location set or replace process
        return <Navigate to={'/login'} state={{ from: currentLocation }} replace></Navigate>
    }
    return children;
    /* return (
        <div>
            
        </div>
    ); */
};

export default PrivateRoute;