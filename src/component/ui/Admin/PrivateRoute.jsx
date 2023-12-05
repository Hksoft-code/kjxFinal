import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ Component }) => {
  
  console.log('PrivateRoute is rendering');
  const { authenticated } = useAuth();

  return (
    <>{authenticated ? Component : <Navigate to="/=kjxsofttechbdhd-h652hdsnadmin=login" />}</>
  );
};

export default PrivateRoute;
