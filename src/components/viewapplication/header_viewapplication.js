import React from "react";
import PostJob from "../postjob/postjob";
import ViewappProfile from "../viewappprof/viewappprof";
import "./viewapplication.css";
const HeaderViewApp = () => {
  return (
    <div className="container-fluid viewapp-con">
      <div className="row ">
        <div className="col-lg-2 p-1">
          <img src="/images/xcitelogo.png" style={{ height: "70px" }} />
        </div>
        <div className="col-lg-6"></div>
        <div className="col-lg-4">
          <div className="row">
            <div className="col-lg-4 viewapp_menu">
              <button className="paj_btn">Post a job</button>
            </div>
            <div
              className="col-lg-4 viewapp_menu"
              style={{ fontSize: "16px", fontWeight: "600" }}
            >
              Rajesh Sharma
              <span className="p-2">
                <img src="images/angledown.png" />
              </span>
            </div>
            <div className="col-lg-4 p-2">
              <img src="images/circle.png" style={{ width: "60px" }} />
            </div>
          </div>
        </div>
        <ViewappProfile />
      </div>
    </div>
  );
};
export default HeaderViewApp;
