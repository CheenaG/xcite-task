import React, { useState } from "react";
import "./postjob.css";
const PostJob = () => {
  return (
    <div className="container">
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
        <div className="col-lg-5">
          <div className="outer-div mt-3">
            <div className="row">
              <div className="col-lg-10 mt-5 ">
                <div className="jd-text">Job Description</div>
                <div className="jd-outer-div">
                  <input type="text" className="jd-div" />
                </div>
              </div>
              <div className="col-lg-1"></div>
            </div>
            <div className="row">
              <div className="col-lg-10 mt-3 ">
                <div className="jd-text2">Roles and responsibilities</div>
                <div className="jd-outer-div">
                  <input type="text" className="jd-div" />
                </div>
              </div>
              <div className="col-lg-1"></div>
            </div>
            <div className="row">
              <div className="col-lg-10 mt-3 ">
                <div className="jd-text">Qualifications</div>
                <div className="jd-outer-div">
                  <input type="text" className="jd-div" />
                </div>
              </div>
              <div className="col-lg-1"></div>
            </div>
            <div className="row">
              <div className="col-lg-10 mt-3 ">
                <div className="jd-text2">Add skills/interest tags</div>
                <div>
                  <input type="text" className="skills-input" />
                </div>
                <div className="jd-outer-div">
                  <input type="text" className="jd-div" />
                </div>
              </div>
              <div className="col-lg-1"></div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-9"></div>
              <div className="col-lg-2">
                <button className="next-btn">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostJob;
