import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const PrivateRoute = ({ element, ...props }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? (
    <Route {...props} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;