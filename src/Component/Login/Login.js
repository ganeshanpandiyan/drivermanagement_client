import React, { useState } from "react";
import "../App.css";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 

  faBars,
  faArrowRightToBracket,
  faXmark } from "@fortawesome/free-solid-svg-icons";


import LoginForm from "./LoginForm";

const Login = () => {
  const [content, setContent] = useState("Driver");
  const [icon, setIcon] = useState(false)


  function toggleing() {
    if(icon) setIcon(false)
    else setIcon(true)
 }

  return (
    <>
    <React.Fragment>
                
                <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
                    <a className="brand"><span className="title">T</span>ransport <span className="title">M</span>anagement <span className="title">S</span>ystem</a>
                    <button onClick={toggleing} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""><FontAwesomeIcon icon={icon ? faXmark : faBars} className="arrow-icon" /></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto ">
                            <li className="nav-item">
                            <p
                                className="nav-link"
                                onClick={() => {
                                  setContent("Driver");
                                }}
                              >
                                Driver Login
                                <span>
                                  <FontAwesomeIcon icon={faArrowRightToBracket} className="arrow-icon" />
                                </span>
                              </p>
                            </li>
                            <li className="nav-item">
                            <p
                                className="nav-link"
                                onClick={() => {
                                  setContent("Admin");
                                }}
                              >
                                Admin Login
                                <span>
                                  <FontAwesomeIcon icon={faArrowRightToBracket} className="arrow-icon" />
                                </span>
                              </p>
                            </li>
                            
                        </ul>
                    </div>
                </nav>
            </React.Fragment> 
  

  
    <div className="right">
         {content === "Driver" && <LoginForm  
              value = "driver"
          />}
          {content === "Admin" && <LoginForm 
              value = "admin"
          />}
        </div>
    </>
  );
};

export default Login;
