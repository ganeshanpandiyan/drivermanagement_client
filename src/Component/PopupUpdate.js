import React from "react";

function PopupUpdate(props) {

  

  return (
    <div id="id01" className="modal id01">
      <div className="right">
        <span
          onClick={() => {
            document.getElementById("id01").style.display = "none";
          }}
          className="close"
          title="Close Modal"
        >
          ×
        </span>

        <div className="container popup-container">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Update Duty</h4>
              <form onSubmit={props.editFormik.handleSubmit}>
                <div className="box">
                  <label>Vehicle No:</label>
                  <select
                    className="form-select" 
                    aria-label="Default select example"
                    name="vehicleNo"
                    value = {props.editFormik.values.vehicleNo}
                     onChange={props.editFormik.handleChange}
                    required
                  >
                    <option selected>Select vehicle number </option>
                    <option value="TN-52-E-7729">TN-52-E-7729</option>
                    <option value="TN-52-C-0848">TN-52-C-0848</option>
                    <option value="TN-52-C-0533">TN-52-C-0533</option>
                  </select>
                  {props.editFormik.errors.vehicleNo && <div className="warning">{"* "+props.editFormik.errors.vehicleNo}</div> }
                </div>
                
                <div className="box">
                  <label>Bus No:</label>
                  <select
                    className="form-select" 
                    aria-label="Default select example"
                    name="busNo"
                    value = {props.editFormik.values.busNo}
                    onChange={props.editFormik.handleChange}
                    required
                  >
                    <option selected>Select Bus number </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  {props.editFormik.errors.busNo && <div className="warning">{"* "+props.editFormik.errors.busNo}</div> }
                </div>

                <div className="box">
                  <label>Route :</label>
                  <select
                    className="form-select" 
                    aria-label="Default select example"
                    name="route"
                    value = {props.editFormik.values.route}
                     onChange={props.editFormik.handleChange}
                    required
                  >
                    <option selected>Select bus route </option>
                    <option value="Rediyur">Rediyur</option>
                    <option value="Pakkanadu">Pakkanadu</option>
                    <option value="Kaniyaalampatti">Kaniyaalampatti</option>
                  </select>
                  {props.editFormik.errors.route && <div className="warning">{"* "+props.editFormik.errors.route}</div> }
                </div>

            <div className="box">
              <label>Acting driver name :</label>
              <input
                name="actingName"
                type= 'text'
                onChange={props.editFormik.handleChange}
                value={props.editFormik.values.actingName}
              ></input>
              
            </div>

            <div className="box">
              <label>Acting driver phone no :</label>
              <input
                name="actingPhone"
                type= 'text'
                onChange={props.editFormik.handleChange}
                value={props.editFormik.values.actingPhone}
              ></input>
              {props.editFormik.errors.actingPhone && <div className="warning">{"* "+props.editFormik.errors.actingPhone}</div> }
            </div>

                <div className="box">
                  <button
                    type="submit"
                    // onClick={(e) => {
                    // //   document.getElementById("id01").style.display = "none";
                      
                    // }}
                    className="submit"
                  >
                    Submit
                  </button>
                </div>
                {/* {message && (
                <h6 style={{ color: "blue", textAlign: "center" }}>
                  Please wait...
                </h6>
              )} */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopupUpdate;
