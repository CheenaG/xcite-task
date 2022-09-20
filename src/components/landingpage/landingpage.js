import React from "react";
import "./landingpage.css";

import Switch from "@mui/material/Switch";

const Landing = () => {
  return (
    <div className="container main_page">
      <div className="row mt-5">
        <div className="col-lg-1"></div>

        <div className="col-lg-2">
          <input
            type="text"
            placeholder="search by title,skills"
            className="input_1"
          />
        </div>
        <div className="col-lg-3">
          <input type="text" placeholder="location" className="input_2" />
        </div>
        <div className="col-lg-1">
          <button className="input_3">Search</button>
        </div>
        <div className="col-lg-4">
          <div>
            Create a job alert
            <Switch />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-9 filter_div mt-5">Filter</div>
        <div className="col-lg-1"></div>
      </div>
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-5 jobs_div mt-5">
          <input
            type="text"
            placeholder="jobs matching your skills and interest"
            className="jobs_input"
          />
        </div>
        <div className="col-lg-5"></div>

        <div className="row mt-5">
          <div className="col-lg-1"></div>
          <div className="col-lg-3">
            <div className="main_div">
              <div className="sub_div bg-info">
                <div className="circle2"></div>
                <div className="rectangle"></div>
                <div className="img_tag">
                  <img src="/images/tag.png" />
                </div>
              </div>
              <div className="rect_2">hello</div>
              <div className="rect_2">hello</div>
              <div className="rect_2">hello</div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="main_div">
              <div classname="row">
                <div className="circle2"></div>
                <div className="rectangle"></div>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="main_div">
              <div className="circle"></div>
              <div className="rectangle"></div>
              <div className="/images/tag.png"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
