import React from "react";
import "./employeereg.css";
const EmployeeReg = () => {
  return (
    <div className="container signupdiv">
      <div className="row mt-5">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <div className="signup_main_div">
            <h4 style={{ textAlign: "center" }}>Signup!</h4>
            <div className="row">
              <div className="col-lg-6">
                <div className="noc_text">First name</div>
                <div>
                  <input type="text" style={{ background: "darkgrey" }} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="noc_text">Last name</div>
                <div>
                  <input type="text" style={{ background: "darkgrey" }} />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="noc_text">Name of the company</div>
                  <div>
                    <input
                      type="text"
                      style={{ background: "darkgrey" }}
                      className="sign_up_input"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="noc_text">email Id</div>
                  <div>
                    <input
                      type="text"
                      style={{ background: "darkgrey" }}
                      className="sign_up_input"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="noc_text">password</div>
                  <div>
                    <input
                      type="text"
                      style={{ background: "darkgrey" }}
                      className="sign_up_input"
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-lg-12">
                  <div className="btn-div"></div>
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
export default EmployeeReg;
