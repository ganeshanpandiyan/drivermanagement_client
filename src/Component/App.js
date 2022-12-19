import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './Admin/Admin.js'
import Driver from "./Driver/Driver";
import Login from './Login/Login'
import SecureComponent from "./SecureComponent";
import DriverSecure from "./DriverSecure"


function App() {
  return (
    <>
    <BrowserRouter>
        
        <Routes>
          <Route element={<SecureComponent />}>
            <Route path='/admin' element={<Admin/> }></Route>
          </Route>

          <Route element={<DriverSecure />}>
            <Route path='/driver' element={<Driver /> }></Route>
          </Route>
          <Route path='/' element={<Login  /> }> </Route>
        </Routes>
      </BrowserRouter>
      </>
    );
}

export default App;
