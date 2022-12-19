import React, {useState} from "react";
import {useFormik} from 'formik'
import axios from "axios";

function PopupUseList({details}) {
    const [message, setMessage] = useState(false)
    let url = "https://servertransport.herokuapp.com";
    const token = localStorage.getItem('adminToken')
    

    const formik = useFormik({
        initialValues: {
          date: "",
        },
        onSubmit: async (values) => {
          setMessage(true);
          try {
            // create Duty list from previous list
            let res = await axios.post(url + "/api/driver/duty/create", {...values, details}, {
              headers: {
                "x-auth-token": token,
              },
            });
            alert(res.data);
            setMessage(false);
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
    


  return (
    <div id="id02" className="modal id01">
      <div className="right">
        <span
          onClick={() => {
            document.getElementById("id02").style.display = "none";
          }}
          className="close"
          title="Close Modal"
        >
          ×
        </span>

        <div className="container popup-container">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">###</h4>
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
                  Submit{" "}
                  <span>
                    {/* <FontAwesomeIcon icon={faList} className="arrow-icon" /> */}
                  </span>
                </button> 
              </div>
              
              {message && (
                <h6 style={{ color: "blue", textAlign: "center" }}>
                  Please wait...
                </h6>
              )}
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupUseList;
