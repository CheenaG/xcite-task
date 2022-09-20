import React from "react";
import Switch from "@mui/material/Switch";
import JobsTitle from "./jobstitle";
import PostaJob from "../postAjob/postajob";

const HeaderLandingPage = () => {
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
              <div className="menu_text1">Register now</div>
              <div className="menu_text2">Login</div>
              <div className="menu_text3"></div>
              <div className="menu_text" style={{ fontWeight: 600 }}>
                For employers
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-7 left_landingpage">
            <div className="location_main_input2">
              <img src="/images/search (2).png" className="location_img" />
              <input
                type="text"
                placeholder="search jobs by title or skills"
                className="location_input2"
              />
            </div>
            <div className="location_main_input2">
              <img src="/images/location.png" className="location_img" />
              <input
                type="text"
                placeholder="city,state"
                className="location_input2"
              />
            </div>
            <div className="searchbtn2">
              <button className="search_btn">Search</button>
            </div>
          </div>
          <div className="col-lg-4">
            <div>
              Create a job alert
              <Switch />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-7">
              <div
                style={{
                  textAlign: "left",
                  marginLeft: "190px",
                  fontWeight: "bold",
                }}
              >
                Filters
              </div>
              <div className="dropdown_menu">
                <div className="dd_1">
                  Category
                  <span>
                    <img className="dd_img" src="images/dropdown.png" />
                  </span>
                </div>
                <div className="dd_1">
                  Date posted{" "}
                  <span>
                    <img src="images/dropdown.png" className="dd_img" />
                  </span>
                </div>
                <div className="dd_1">
                  Job type
                  <span>
                    <img src="images/dropdown.png" className="dd_img" />
                  </span>
                </div>
                <div className="dd_1">
                  Stipend{" "}
                  <span>
                    <img src="images/dropdown.png" className="dd_img" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-5 toggle-div">
              <div className="toggle-btn-2">
                <div className="toggle-btn-inner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderLandingPage;
