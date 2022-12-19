import React, { useState } from "react";
import "../App.css";

import ChangePassword from "../Admin/ChangePassword";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faBus,
  faBars,
  faXmark,
  faUnlock,
  faListCheck
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


const Driver = () => {
  const [content, setContent] = useState("changePassword");
  const [icon, setIcon] = useState(false)
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

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

                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto ">
                            <li className="nav-item">
                            <p
                                className="nav-link"
                                onClick={() => {
                                  setContent("changePassword");
                                }}
                              >
                                Change Password
                                <span>
                                  <FontAwesomeIcon icon={faUnlock} className="arrow-icon" />
                                </span>
                              </p>
                            </li>
                            <li className="nav-item logout-li">
                            <p
                                className="nav-link logout"
                                onClick={() => {
                                  logOut()
                                }}
                              >
                                Log Out
                                <span>
                                  <FontAwesomeIcon icon={faArrowRightFromBracket} className="arrow-icon" />
                                </span>
                              </p>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment> 





      {/* <div className="container-fluid">
      <div className="row">
        <div className="left">
        <div className="toggle">
        <button
            className="btn btn-light toggle-btn"
            onClick={() => {
              toggleing()
            }}
          >
            Menu
            <span>
              <FontAwesomeIcon icon={icon ? faXmark : faBars } className="arrow-icon" />
            </span>
          </button>

          </div>

          <div id="menu" className="menu">
          <button
            className="btn btn-secondary"
            onClick={() => {
              setContent("createDriver");
            }}
          >
            Create Driver
            <span>
              <FontAwesomeIcon icon={faCaretRight} className="arrow-icon" />
            </span>
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              setContent("changePassword");
            }}
          >
            Change Password
            <span>
              <FontAwesomeIcon icon={faCaretRight} className="arrow-icon" />
            </span>
          </button>

          <button className="btn btn-secondary">
            Create Duty
            <span>
              <FontAwesomeIcon icon={faCaretRight} className="arrow-icon" />
            </span>
          </button>

          <button className="btn btn-secondary"
          onClick={() => {
              setContent("createAdmin");
            }}
          >
            Create Admin
            <span>
              <FontAwesomeIcon icon={faCaretRight} className="arrow-icon" />
            </span>
          </button>
          <button className="btn btn-danger" onClick={logOut}>
            Log out
            <span>
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                className="arrow-icon"
              />
            </span>
          </button>
          </div>
        </div>
        <div className="right">
          {content === "createDriver" && console.log("hello")}
          {content === "changePassword" && 
            <ChangePassword 
              value="driver"
            />
          }
          {content === "createAdmin" && console.log("hello")}
        </div>
      </div>
    </div> */}
    <div className="right">
          
          {content === "changePassword" && 
            <ChangePassword 
              value="driver"
            />
          }
          
        </div>
    </>
  );
};

export default Driver;
