import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import PopupUpdate from "../PopupUpdate";
import PopupUseList from "./PopupUseList";

const DutyList = () => {
  const [message, setMessage] = useState(false);
  const [data, setData] = useState();
  const [refresh, setRefresh] = useState(false);
  const [index, setIndex] = useState()
  const [driverList, setDriverList] = useState()
  const [showUpdate, setShowUpdate] = useState(false)
  const [err, setErr] = useState(false)
  let url = "https://servertransport.herokuapp.com";
  const token = localStorage.getItem('adminToken')

// Date formik for geting date and show the duty list

  const formik = useFormik({
    initialValues: {
      date: "",
    },
    onSubmit: async (values) => {
      setMessage(true);
      try {
        // geting  Duty list 
        let res = await axios.post(url + "/api/driver/duty/dutyList", values, {
          headers: {
            "x-auth-token": token,
          },
        });
        setData(res.data);
        setMessage(false);
        setErr(false)
      } catch (error) {
        alert(error.response.data);
        setMessage(false);
      }
    },

    validate: (values) => {
      let errors = {};
      if (values.date.length === 0) errors.date = "Required";
      return errors;
    },
  });

//   create duty list

  const createTable = (detail, index) => {
    const {
      driverName,
      driverPhone,
      driverType,
      vehicleNo,
      busNo,
      busRoute,
      actingName,
      actingPhone,
    } = detail;
    return (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{driverName}</td>
        <td>{driverPhone}</td>
        <td>{driverType}</td>
        <td>{vehicleNo}</td>
        <td>{busNo}</td>
        <td>{busRoute}</td>
        <td>{actingName}</td>
        <td>{actingPhone}</td>
        <td>
          <button
            className="btn btn-warning edit"
            onClick={() => edit(index)}
          >
            Edit
            <span>
              <FontAwesomeIcon icon={faPencil} className="arrow-icon" />
            </span>
          </button>
        </td>
        <td>
          <button
            className="btn btn-outline-danger "
            onClick={() => deleting(index)}
          >
            Delete
            <span>
              <FontAwesomeIcon icon={faTrash} className="arrow-icon" />
            </span>
          </button>
        </td>
      </tr>
    );
  };

//   edit function to show the edit popup
  function edit(clickedIndex) {
    setIndex(clickedIndex) 
    document.getElementById("id01").style.display = "block";
  }

// Edit formik for geting values
const editFormik = useFormik({
    initialValues: {
      vehicleNo: "",
      busNo: "",
      route: "",
      actingName: "",
      actingPhone: "",
    },
    onSubmit:  (values) => {
        const {vehicleNo, busNo, route, actingName, actingPhone} = values
        
        data[0].details[index].vehicleNo = vehicleNo;
        data[0].details[index].busNo = busNo;
        data[0].details[index].busRoute = route;
        data[0].details[index].actingName = actingName;
        data[0].details[index].actingPhone = actingPhone;
  
        if (refresh) setRefresh(false);
        else setRefresh(true);
        
        // to show update button
        setShowUpdate(true)
        // popup
        document.getElementById("id01").style.display = "none";
    },

    validate: (values) => {
      let errors = {};
      if(values.vehicleNo.length === 0) errors.vehicleNo = "Required";
      if(values.busNo.length === 0) errors.busNo = "Required";
      if(values.route.length === 0) errors.route = "Required";
      if(values.actingName.length !== 0){
        if(values.actingPhone.length !== 10  ) errors.actingPhone = "Phone number is must 10 digite";
        let isnum = /^\d+$/.test(values.actingPhone)
        if(!isnum) errors.actingPhone = "Enter only numbers"
      }
      return errors;
    },
  }); 

  // Get driver list and bus list 

  const getDriverList = async () => {
    try {
      let res = await axios.get(url + "/api/driver/duty", {
          headers: {
            "x-auth-token": token,
          },
        });
      setDriverList(res.data);
      
    } catch (error) {      
      alert(error.response.data)
    }
  }

  useEffect(()=>{
    getDriverList()
  },[])

  // Update dutyList
  const update = async () => {
    try {
      delete data[0]._id
      delete data[0].__v
      const res = await axios.put(url + "/api/driver/duty/update", data[0], {
        headers: {
          "x-auth-token": token,
        },
      })
      alert(res.data)
      setShowUpdate(false)
    } catch (error) {
      alert(error.response.data)      
    }
  }

  function deleting(clickedIndex) {
    data[0].details.splice(clickedIndex, 1)
    if (refresh) setRefresh(false);
    else setRefresh(true);
    setShowUpdate(true)    
  }

// creating new date feild

const freshDate = (e) => {
  
  if(typeof data === "object" ) {
    setErr(false)
    e.target.checked ? (document.getElementById("id02").style.display = "block")  : (document.getElementById("id02").style.display = "none")
  }
  else setErr(true)
}

  return (
    <>
      <div className="right">
        <div className="card">
          <div className="card-body">
            <form onSubmit={formik.handleSubmit}>
              <div className="box">
                <label>Select date :</label>

                <input
                  name="date"
                  type="date"
                  onChange={formik.handleChange}
                  value={formik.values.date}
                  required
                ></input>
                {formik.errors.date ? (
                  <div className="warning">{"* " + formik.errors.date}</div>
                ) : null}
              </div>
              <div className="box">
                <button type="submit" className="submit">
                  Get List{" "}
                  <span>
                    <FontAwesomeIcon icon={faList} className="arrow-icon" />
                  </span>
                </button> 
              </div>
              
              {message && (
                <h6 style={{ color: "blue", textAlign: "center" }}>
                  Please wait...
                </h6>
              )}
              {err && (
                  <div className="warning" style={{ textAlign: "center" }}>{"* " + "First get the old list"}</div>
                ) }
            </form>
            <div className="form-check center">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={freshDate}/>
                <label className="form-check-label check-lable" for="flexCheckDefault">
                  Use this List
                </label>
              </div>
          </div>
        </div>
      </div>
      {data !== undefined && (
        <div className="container-fluid details">
          {data === "No duty list found" ? (
            <h4 className="warning">{data}</h4>
          ) : (
            <div className="table-responsiv table-container">
              <table className="table table-light table-striped table-bordered align-middle table-hover table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone No</th>
                    <th scope="col">Type</th>
                    <th scope="col">Vehicle No</th>
                    <th scope="col">Bus No</th>
                    <th scope="col">Route</th>
                    <th scope="col">AD Name</th>
                    <th scope="col">AD Phone No</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>{data[0].details.map(createTable)}</tbody>
              </table>
            </div>
          )}
                <PopupUpdate  editFormik={editFormik}  driverList={driverList} />
                <PopupUseList details={data[0].details}/>
                <div class="d-grid gap-2 col-6 mx-auto">
                 {showUpdate && <button className="btn btn-primary submit p-md-2" onClick={update}>Update</button> }
                </div>
        </div>
      )}
    </>
  );
};

export default DutyList;
