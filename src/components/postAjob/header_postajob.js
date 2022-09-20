import React from "react";
import Employeereg2 from "../emp_reg2/employeereg2";
import Header from "../header/header";
import PostaJob from "./postajob";
const HeaderpostAJob = () => {
  return (
    <div className="container-fluid header_page">
      <div className="headerland_page">
        <div className="row pt-2">
          <div className="col-lg-7">
            <div className="text-xcite" style={{ fontWeight: "bold" }}>
              XciteEducation
            </div>
          </div>
          <div className="col-lg-5">
            <div className="menu">
              <div className="menu_text1">Post a job</div>
              <div
                className="menu_text2"
                style={{ color: "black", fontWeight: "bold" }}
              >
                employer name
              </div>
              <div className="menu_text3"></div>
              <div className="menu_text" style={{ fontWeight: 600 }}>
                Logout
              </div>
            </div>
          </div>
        </div>
        <Employeereg2 />
      </div>
    </div>
  );
};

export default HeaderpostAJob;
