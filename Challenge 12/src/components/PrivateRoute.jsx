import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export const PrivateRoute = ({ children }) => {
  const { user } = useContext(UserContext);
  const { pathname, search } = useLocation(); 
  localStorage.setItem('lastPath', `${pathname}${search}`);
  return user ? children : <>Error 403</>;
}
