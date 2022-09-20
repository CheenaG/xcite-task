import React from "react";
import "./employeereg2.css";

const Employeereg2 = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-5">
          <h2 style={{ fontSize: "18px", textAlign: "left" }} className="mt-4">
            Complete your profile
          </h2>
          <h3 style={{ fontSize: "14px", textAlign: "left" }} className="mt-4">
            Employer details
          </h3>
          <section className="empdetails">
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-5 mt-2 mb-2">
                <div className="ed-text">First name</div>
                <div>
                  <input type="text" className="ed_input" />
                </div>
              </div>
              <div className="col-lg-3 mt-2 mb-2">
                <div className="ed-text2">Last name</div>
                <div className="ed-input-main">
                  <input type="text" className="ed_input2" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-5 mt-2 mb-2">
                <div className="ed-text">Email id</div>
                <div>
                  <input type="text" className="ed_input" />
                </div>
              </div>
              <div className="col-lg-3 mt-2 mb-2">
                <div className="ed-text2">Contact No</div>
                <div className="ed-input-main">
                  <input type="text" className="ed_input2" />
                </div>
              </div>
            </div>
          </section>
          <h3 style={{ fontSize: "14px", textAlign: "left" }} className="mt-4">
            Company details
          </h3>
          <section className="empdetails mt-2">
            <div className="row">
              <div className="col-lg-8 mt-2 mb-2">
                <div className="ed-text3">Name of the company </div>
                <div>
                  <input
                    type="text"
                    className="ed_input"
                    style={{ width: "75%" }}
                  />
                </div>
              </div>
              <div className="col-lg-3 mt-2 mb-2">
                <div className="ed-text2">Logo</div>
                <div className="ed-input-main">
                  <input
                    type="text"
                    className="ed_input3"
                    placeholder="choose File*"
                    style={{
                      width: "70%",
                      background: "#EEEEEE",
                      fontSize: "12px",
                      border: "none",
                      border: "0.5px solid lightgrey",
                      padding: "0px 12px",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-7 mt-2 mb-2">
                <div className="ed-text3">Company email address </div>
                <div>
                  <input
                    type="text"
                    className="ed_input"
                    style={{ width: "70%" }}
                  />
                </div>
              </div>
              <div className="col-lg-5 mt-2 mb-2">
                <div className="ed-text2">Contact no</div>
                <div className="ed-input-main">
                  <input type="text" className="ed_input2" />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 mt-2 mb-2">
                <div className="ed-text3"> Office address </div>
                <div>
                  <input
                    type="text"
                    className="ed_input"
                    style={{ width: "83%" }}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-3 mt-2 mb-2">
                <div className="ed-text">City</div>
                <div style={{ textAlign: "left" }}>
                  <input
                    type="text"
                    className="ed_input"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="col-lg-4 mt-2 mb-2">
                <div className="ed-text2">State</div>
                <div className="ed-input-main">
                  <input
                    type="text"
                    className="ed_input2"
                    style={{ width: "80%" }}
                  />
                </div>
              </div>
              <div className="col-lg-4 mt-2 mb-2">
                <div className="ed-text2">Pincode</div>
                <div className="ed-input-main">
                  <input
                    type="text"
                    className="ed_input2"
                    style={{ width: "70%" }}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7 mt-2 mb-2">
                <div className="ed-text3">Certificate of incorporation</div>
                <div className="pdf-div">
                  <button className="btn-pdf">Add pdf or link*</button>
                </div>
              </div>
            </div>
          </section>
          <h3 style={{ fontSize: "14px", textAlign: "left" }} className="mt-3">
            About the company
          </h3>
          <section className="empdetails mt-2 mb-5">
            <div>
              <div className="description-div">
                A short description about the organisation
              </div>
            </div>
          </section>
          <button className="btn-save2">Save</button>
        </div>

        <div className="col-lg-2"></div>
      </div>
    </div>
  );
};
export default Employeereg2;
