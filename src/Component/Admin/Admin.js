import React, { useState } from "react";
import "../App.css";
import CreateDriver from "./CreateDriver";
import ChangePassword from "./ChangePassword";
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
import CreateAdmin from "./CreateAdmin";
import DutyList from "./DutyList";

const Admin = () => {
  const [content, setContent] = useState("createDriver");
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

  return(
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
                                  setContent("createDriver");
                                }}
                              >
                                Create Driver
                                <span>
                                  <FontAwesomeIcon icon={faBus} className="arrow-icon" />
                                </span>
                              </p>
                            </li>
                            <li className="nav-item">
                            <p
                                className="nav-link"
                                onClick={() => {
                                  setContent("createDuty");
                                }}
                              >
                                Create Duty
                                <span>
                                  <FontAwesomeIcon icon={faListCheck} className="arrow-icon" />
                                </span>
                              </p>
                            </li>
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

    <div className="right">
          {content === "createDriver" && <CreateDriver />}
          {content === "changePassword" && <ChangePassword value = "admin"/>}
          {content === "createAdmin" && <CreateAdmin />}
        </div>
        {content === "createDuty" && <DutyList />}
    </>
  )
};

export default Admin;
