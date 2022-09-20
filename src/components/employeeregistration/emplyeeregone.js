import React from "react";
import "./employeereg.css";
const EmployeeRegOne = () => {
  return (
    <div className="container signupdiv">
      <div className="row mt-5">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <div>Complete Your profile</div>
          <div>Employer Details</div>
          <div className="Ed_main_div">
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-3">
                <div className="noc_text">First name</div>
                <div>
                  <input type="text" style={{ background: "darkgrey" }} />
                </div>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-3">
                <div className="noc_text">Last name</div>
                <div>
                  <input type="text" style={{ background: "darkgrey" }} />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-3">
                  <div className="noc_text">Email id</div>
                  <div>
                    <input type="text" style={{ background: "darkgrey" }} />
                  </div>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-3">
                  <div className="noc_text">Contact no</div>
                  <div>
                    <input type="text" style={{ background: "darkgrey" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
};
export default EmployeeRegOne;
