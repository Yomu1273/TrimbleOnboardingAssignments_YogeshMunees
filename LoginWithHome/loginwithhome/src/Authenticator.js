import React from 'react';
import { Outlet } from 'react-router';
import Login from './pages/Login';
import NavPage from './pages/NavPage';

const Authenticator = ({canweallow}) => {
    return canweallow ? <Outlet/> : <Login/>;
}

export default Authenticator;