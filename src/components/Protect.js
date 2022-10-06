import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const Protect = ({children}) => {
    const location = useLocation()
    const password = localStorage.getItem("bachelor-password")
    const component =  password == "seu-123-.." ? children :  <Navigate to={'/login'} state={{from: location.pathname}} replace />
    return component;
};

export default Protect;