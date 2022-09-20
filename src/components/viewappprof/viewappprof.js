import React, { useState } from "react";
import "./viewappprof.css";
const ViewappProfile = () => {
  return (
    <div className="container-fluid intern-main-div">
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-3 mt-5">
          <div
            classname="rectangle_1 bg-danger"
            style={{
              width: "220px",
              height: "40px",
              background: "#F97316",
              marginBottom: "25px",
            }}
          ></div>
          <div
            classname="rectangle_1"
            style={{
              width: "220px",
              height: "40px",
              background: "#F97316",
              marginBottom: "25px",
            }}
          ></div>
          <div
            classname="rectangle_1"
            style={{
              width: "220px",
              height: "40px",
              background: "#F97316",
              marginBottom: "25px",
            }}
          ></div>
          <div
            classname="rectangle_1"
            style={{
              width: "220px",
              height: "40px",
              background: "#F97316",
              marginBottom: "25px",
            }}
          ></div>
        </div>
        <div className="col-lg-4 mt-5">
          <div className="intern-div">
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-2 mt-5">
                <img src="images/circlemd.png" style={{ width: "80px" }} />
              </div>
              <div className="col-lg-5 mt-5 ">
                <div style={{ textAlign: "center" }}>
                  <div
                    className="mb-2"
                    style={{ fontSize: "18px", fontWeight: "bold" }}
                  >
                    Rajesh Sharma
                  </div>
                  <div>UI/UX Internship</div>
                </div>
              </div>
              <div className="col-lg-2"></div>
              <div className="col-lg-1 mt-2">
                <img src="/images/tag.png" />
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-1"></div>
              <div className="col-lg-10 mt-3">
                <div
                  className="degree_div"
                  style={{
                    textAlign: "justify",
                    padding: "5px",
                    fontSize: "13px",
                  }}
                >
                  Education degree in web design
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-8 mt-3">
                <div
                  className="degree_div"
                  style={{
                    textAlign: "justify",
                    padding: "5px",
                    fontSize: "13px",
                  }}
                >
                  Skills : Figma , Wireframing , UI&UX Design , Design Thinking
                  , Rapid Prototyping , Adobe XD , adobe Photoshop{" "}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-8 mt-3">
                <div
                  className="degree_div mb-5"
                  style={{
                    textAlign: "justify",
                    padding: "5px",
                    fontSize: "13px",
                  }}
                >
                  Experience: First internship as a product design Second as a
                  interface design
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4"></div>
              <div className="col-lg-8">
                <button className="msg-btn m-3">Message</button>
                <button className="hire-btn">Hire</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewappProfile;
