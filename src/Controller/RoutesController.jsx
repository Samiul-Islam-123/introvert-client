import React from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Login from '../Pages/Public/Auth/Login/Login';
import Signup from '../Pages/Public/Auth/Signup/Signup';
import Home from '../Pages/Private/Home/Home';
import Private from '../Pages/Private/Private';
import LeftDrawer from '../Components/Drawer/LeftDrawer';

function RoutesController() {
  const location = useLocation();
  const navigate = useNavigate();

  function checkAuth() {
    // Your authentication logic here
    // For demonstration purposes, always return true
    const isAuthenticated = true;

    // If not authenticated and not already on the login page, navigate to the login page
    if (!isAuthenticated && location.pathname !== '/login') {
      navigate('/login');
    }

    return isAuthenticated;
  }

  return (
    <>
      {checkAuth() && location.pathname !== '/login' && location.pathname !== '/signup' && <LeftDrawer />}
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route path='/*' element={checkAuth() ? <Private /> : <Login />} />
      </Routes>
    </>
  )
}

export default RoutesController;
