import React,{useState} from "react";
import axios from 'axios';

const ChangePassword = (props) => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [conformPassword, setConformPassword] = useState("");

    const [checkOldPassword, setCheckOldPassword] = useState("");
    const [checkNewPassword, setCheckNewPassword] = useState("");
    const [checkConformPassword, setCheckConformPassword] = useState("");
    const [match, setMatch] = useState()

    const adminToken = localStorage.getItem('adminToken')
    const driverToken = localStorage.getItem('driverToken')
    let url = "https://servertransport.herokuapp.com" 

    const handleClick = () => {
        let isEmpty = true

        if (oldPassword === "") {
            setCheckOldPassword("oldPassword")
        }
        else {
            setCheckOldPassword("")
            
        };
        if (newPassword === "") {
            setCheckNewPassword("newPassword")
        }
        else {
            setCheckNewPassword("");
            isEmpty = false;
        }
        if (conformPassword === "") {
            setCheckConformPassword("conformPassword")
        }
        else {
            setCheckConformPassword("");
            isEmpty = false;
        }
        if (newPassword === conformPassword &&  !isEmpty) {
          setMatch("match")
          let values = {
            oldPassword: oldPassword,
            newPassword: newPassword,
            confirmPassword: conformPassword
          }
        
            if(props.value === "driver"){
              const changeDriverPassword=async() =>{
                try {
                  let res = await axios.put(url+'/api/drivers/changePassword',values,{
                    headers: {
                      "x-auth-token": driverToken,
                    },
                  })  
                    alert(res.data)
                } catch (error) {
                  alert(error.response.data)
                }
             }; changeDriverPassword()
            }
            else{
              const changeAdminPassword=async() =>{
                try {
                  let res = await axios.put(url+'/api/admins/changePassword',values,{
                    headers: {
                      "x-auth-token": adminToken,
                    },
                  })  
                    alert(res.data)
                } catch (error) {
                  alert(error.response.data)
                }
             }; changeAdminPassword()
              
            }
        }
        else {setMatch("notmatch");}


    }

    return(
        <div className="card">
        <div className="card-body">
        <h4 className="card-title">Change Password</h4>
          <form>
            <div className="box">
              <label>Old Password : </label>
              <input
                type="text"
                placeholder="Old Password"
                onChange={(e) => {
                    setOldPassword(e.target.value)
                    if (oldPassword.length < 4)document.getElementById("old-validation").innerHTML ="*Password must be 5 Characters"

                    else document.getElementById("old-validation").innerHTML = "";
                    }}
                required
              ></input>
              <p id="old-validation" className="warning"></p>
              {checkOldPassword === "oldPassword" && (
                <p className="warning"> *Please Fill The Old Password</p>
              )}
              
              
            </div>
  
  
            <div className="box">
              <label>New Password : </label>
              <input
                type="password"
                placeholder="New Password "
                onChange={(e) => {
                    setNewPassword(e.target.value)
                    if (newPassword.length < 4)
                    document.getElementById("new-validation").innerHTML =
                      "*Password must be 5 Characters";
                    else document.getElementById("new-validation").innerHTML = "";
                    }}
                required
              ></input>
              <p id="new-validation" className="warning"></p>
              {checkNewPassword === "newPassword" && (
                <p className="warning"> *Please Fill The New Password</p>
              )}
            </div>
  
            <div className="box">
              <label>Conform Password : </label>
              <input
                type="password"
                placeholder="Conform Password"
                onChange={(e) => {
                  setConformPassword(e.target.value);
                  if (conformPassword.length < 4)
                    document.getElementById("conform-validation").innerHTML =
                      "*Password must be 5 Characters";
                  else document.getElementById("conform-validation").innerHTML = "";
                }}
                required
              ></input>
              <p id="conform-validation" className="warning"></p>
              {checkConformPassword === "conformPassword" && (
                <p className="warning"> *Please fill the Conform Password</p>
              )}
            </div>
            {match === "match" && <h6 style={{color: "green", textAlign: "center"}}>Password Matched</h6>}
            {match === "notmatch" && <h6 className="warning" style={{textAlign: "center"}}>Password Not Matched</h6>}
            <div className="box"> 
              <input type="button" value="Submit" onClick={handleClick}></input>
            </div>
            
            
          </form>
        </div>
      </div>
    )

}

export default ChangePassword;