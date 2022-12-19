import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faArrowRightToBracket,
 } from "@fortawesome/free-solid-svg-icons";


const LoginForm = (props) => {
    const navigate = useNavigate()
    const [alert, setAlert] = useState(false)
    const [message, setMessage] = useState('')
    let url = "https://servertransport.herokuapp.com"
    const formik = useFormik({
        initialValues: {
          phone: "",
          password: ""
        },
        onSubmit: async(values) => {
          setAlert(true)
          setMessage("")
          if(props.value === "driver"){
              try {
                let res = await axios.post(url+'/api/auth/driver',values)  
                  setMessage("Login Success")
                  localStorage.setItem('driverToken',res.data)
                  setAlert(false)
                  setTimeout(()=>{navigate("/driver")}, 500)
              } catch (error) {
                setMessage(error.response.data)
                setAlert(false)
              }
           
          }
          else{
            let {phone, password} = values

                axios.post(url+'/api/auth/admin',{email: phone, password: password})  
                .then(response => {
                  setMessage("Login Success")
                  localStorage.setItem('adminToken',response.data)
                  setAlert(false)
                  setTimeout(()=>{navigate("/admin")}, 500)
                })
                .catch(error=>{
                  setMessage(error.response.data)
                  setAlert(false)
                })

          }
        },
    
        validate: (values) => {
          let errors = {};
          if (!values.phone) errors.phone = "Required";
          if(props.value === "driver"){
            if(values.phone.length !== 10  ) errors.phone = "Phone number is must 10 digite";
            // check the input contain only numbers
            let isnum = /^\d+$/.test(values.phone)
            if(!isnum) errors.phone = "Enter only numbers"
          }

          if (values.password.length < 5) errors.password = "give more than 5 letters";
          return errors;
        }
      });

    return(
        <div className="card">
        <div className="card-body">
        <h4 className="card-title">{props.value === 'driver' ? "Driver Login" : "Admin Login"}</h4>
          <form onSubmit={formik.handleSubmit}>
            <div className="box">
              <label>{props.value === "driver" ? "PhoneNo :" : "Email :" } </label>
              <input
                id="phone"
                name="phone"
                type= 'text'
                onChange={formik.handleChange}
                value={formik.values.phone}
                required
              ></input>
              {formik.errors.phone ? <div className="warning">{"* "+formik.errors.phone}</div> : null}
            </div>
            
            <div className="box">
              <label>Password : </label>
              <input

                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                required
              ></input>
              {formik.errors.password ? <div className="warning">{"* "+formik.errors.password}</div> : null}
            </div>
            
            <div className="box">
              <button type="submit" className="submit"> Login <span>
                                  <FontAwesomeIcon icon={faArrowRightToBracket} className="arrow-icon" />
                                </span></button>
            </div>
            {alert && <h6 style={{color: "blue", textAlign:"center"}}>Please wait...</h6>}
            {message !== "" && <h5 style={{color: message === "Login Success" ? "green" : "red", textAlign:"center"}}> {"* "+message} </h5>}
        </form>
        </div>

        </div>
    )
}

export default LoginForm