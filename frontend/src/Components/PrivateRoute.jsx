import React, { useContext } from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const PrivateRoute = ({ children }) => {
    let authContext = useContext(AuthContext); // Using useContext hook to access AuthContext
    let location = useLocation();

    if (!authContext) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} />;
    }
    
    return children;
}

export default PrivateRoute;