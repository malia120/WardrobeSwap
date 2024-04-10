import React, {useContext} from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';



const PrivateRoute = ({user, redirectPath = '/login', props, element }) => {
    const { isAuthenticated } = useContext(AuthContext);

    if (!user) {
      return <Navigate to={redirectPath} replace />;
    }
  
  return isAuthenticated ? (
    <Route {...props} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;