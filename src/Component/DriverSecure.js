import React from "react";
import { Navigate, Outlet} from "react-router-dom";

const DriverSecure= ()=>{
    const auth = localStorage.getItem('driverToken')
    return auth? <Outlet />:<Navigate to="/" />
}

export default DriverSecure;