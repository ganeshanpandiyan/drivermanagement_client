import React from "react";
import { Navigate, Outlet} from "react-router-dom";

const SecureComponent= ()=>{
    const auth = localStorage.getItem('adminToken')
    return auth? <Outlet />:<Navigate to="/" />
}

export default SecureComponent;