import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthcontextProvider';

const PrivateRoute = ({ children }) => {
    // location before entry PrivateRoute
    const currentLocation = useLocation();

    const { user, loading } = useContext(AuthContext);

    // check loading information to handle currentUser set time delay
    if (loading) {
        return (<h1>Waiting........</h1>);
    }


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