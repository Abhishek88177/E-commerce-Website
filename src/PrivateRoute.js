// PrivateRoute.js
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import LoginContext from './context/LoginContext';

const PrivateRoute = ({ element, ...rest }) => {
  const { authentication } = useContext(LoginContext);

  return (
    authentication ? (
      <Route {...rest} element={element} />
    ) : (
      <Navigate to="/login" replace />
    )

  );
};

export default PrivateRoute;
