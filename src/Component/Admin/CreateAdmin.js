import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";

const CreateAdmin = ()=>{
    let url = "https://servertransport.herokuapp.com"
    const token = localStorage.getItem('adminToken')
    
    const formik = useFormik({
        initialValues: {
          name: "",
          email: "",
          password: "",
          designation: ""
        },
        onSubmit: async(values) => {
            const CreateAdmin=async() =>{
              console.log("driver creation")
              try {
                let res = await axios.post(url+'/api/admins/create',values,{
                  headers: {
                    "x-auth-token": token,
                  },
                })  
                  alert(res.data)
              } catch (error) {
                alert(error.response.data)
              }
           }; CreateAdmin()
        },
    
        validate: (values) => {
          let errors = {};
          if (values.email.length === 0) errors.email = "Required";
          if(values.name.length <= 0) errors.name = "Name is required"
          if(values.designation.length <= 0) errors.designation = "Designation is required"
          if (values.password.length < 5) errors.password = "Give more than 5 letters";
          return errors;
        }
      });

    return(
        <div className="card">
        <div className="card-body">
        <h4 className="card-title">Create Admin</h4>
          <form onSubmit={formik.handleSubmit}>
            <div className="box">
              <label>Name : </label>
              <input
                name="name"
                type= 'text'
                onChange={formik.handleChange}
                value={formik.values.name}
                required
              ></input>
              {formik.errors.name ? <div className="warning">{"* "+formik.errors.name}</div> : null}
            </div>

            <div className="box">
              <label>Email : </label>
              <input
                name="email"
                type= 'text'
                onChange={formik.handleChange}
                value={formik.values.email}
                required
              ></input>
              {formik.errors.email ? <div className="warning">{"* "+formik.errors.email}</div> : null}
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
              <label>Designation : </label>
              <input
                name="designation"
                type= 'text'
                onChange={formik.handleChange}
                value={formik.values.designation}
                required
              ></input>
              {formik.errors.designation ? <div className="warning">{"* "+formik.errors.designation}</div> : null}
            </div>

            <div className="box">
              <input type="submit" value="Submit" ></input>
            </div>
        </form>
        </div>
        </div>
    )
























































    // const [name, setName] = useState("");
    // const [phone, setPhone] = useState("");
    // const [password, setPassword] = useState("");
    // // const [imageUrl, setImageUrl] = useState("");
    // // const [licenceNo, setLicenceNo] = useState("");
    // // const [status, setStatus] = useState("");
  
    // const [checkPhone, setCheckPhone] = useState("");
    // const [checkPassword, setCheckPassword] = useState("");
    // const [warning, setWarning] = useState(false);
  
    // const handleClick = async () => {
    //   if (phone === "") setCheckPhone("phone");
    //   else setCheckPhone("");
    //   if (password === "") setCheckPassword("password");
    //   else setCheckPassword("");
    //   if (phone !== "" && password !== "" && password.length > 4) {
    //     if (
    //       name !== "" 
    //       // imageUrl !== "" &&
    //       // licenceNo !== "" &&
    //       // status !== ""
    //     ) {
    //       console.log({name, phone, password})
          
    //       // let res = await axios.post(
    //       //   "http://localhost:3001/createuser",
    //       //   JSON.stringify({
    //       //     fName: fName,
    //       //     lName: lName,
    //       //     email: email,
    //       //     password: password,
    //       //     licenceNo: licenceNo,
    //       //     imgUrl: imageUrl,
    //       //     status: status,
    //       //   }),
    //       //   {
    //       //     headers: {
    //       //       "Content-Type": "application/x-www-form-urlencoded",
    //       //     },
    //       //   }
    //       // );
    //       // if (res.data) {
    //       //   alert(res.data);
    //       // }
    //       setWarning(false);
    //     } else setWarning(true);
    //   }
    // };
  
  

    // return(
    //     <div className="card">
    //     <div className="card-body">
    //     <h4 className="card-title">Create Driver</h4>
    //       <form>
    //         <div className="box">
    //           <label>Name : </label>
    //           <input
    //             type="text"
    //             placeholder="Enter Driver Name"
    //             onChange={(e) => setName(e.target.value)}
    //             required
    //           ></input>
    //         </div>
  
            
  
    //         <div className="box">
    //           <label>Phone No : </label>
    //           <input
    //             type="text"
    //             placeholder="Phone No"
    //             onChange={(e) => setPhone(e.target.value)}
    //             required
    //           ></input>
    //           {checkPhone === "phone" && (
    //             <p className="warning"> *Please Fill The Phone number</p>
    //           )}
    //         </div>
  
    //         <div className="box">
    //           <label>Password : </label>
    //           <input
    //             type="password"
    //             placeholder="Password"
    //             onChange={(e) => {
    //               setPassword(e.target.value);
    //               if (password.length < 4)
    //                 document.getElementById("validation").innerHTML =
    //                   "*Password must be 5 Characters";
    //               else document.getElementById("validation").innerHTML = "";
    //             }}
    //             required
    //           ></input>
    //           <p id="validation" className="warning"></p>
    //           {checkPassword === "password" && (
    //             <p className="warning"> *Please Fill The Password</p>
    //           )}
    //         </div>
  
    //         {/* <div className="box">
    //           <label>Image URL :</label>
    //           <input
    //             type="text"
    //             placeholder="Image URL"
    //             onChange={(e) => setImageUrl(e.target.value)}
    //             required
    //           ></input>
    //         </div> */}
  
    //         {/* <div className="box">
    //           <label>Licence No : </label>
    //           <input
    //             type="text"
    //             id="birthday"
    //             name="birthday"
    //             onChange={(e) => setLicenceNo(e.target.value)}
    //             required
    //           ></input>
    //         </div> */}
  
    //         {/* <div className="box">
    //           <label>Choose a Status:</label>
    //           <select
    //             name="status"
    //             id="status"
    //             onChange={(e) => setStatus(e.target.value)}
    //             required
    //           >
    //             <option>Select Status</option>
    //             <option value="active">Active</option>
    //             <option value="inactive">Inactive</option>
    //           </select>
    //         </div> */}
  
    //         <div className="box">
    //           {warning && (
    //             <h6 className="warning" id="">
    //               * Fill the All feilds
    //             </h6>
    //           )}
    //           <input type="button" value="Submit" onClick={handleClick}></input>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // )
}

export default CreateAdmin;