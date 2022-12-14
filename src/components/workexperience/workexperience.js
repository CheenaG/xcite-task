import React from "react";
import "./workexperience.css";

const WorkExperience = () => {
  return (
    <div className="container-fluid main_container">
      <div className="row">
        <div className="col-lg-3 work-page-left">
          <div className="row">
            <div className="col-lg-12">
              <div className="work_text">XcitEducation</div>
              <div className="btn-grp mt-5">
                <div>
                  <button className="btn-1">PERSONAL DETAILS</button>
                </div>
                <div>
                  <button className="btn-1">EDUCATION</button>
                </div>
                <div>
                  <button className="btn-1">WORK EXPERIENCE</button>
                  <div className="bottom_line"></div>
                </div>
                <div>
                  <button className="btn-1">CERTIFICATIONS</button>
                </div>
                <div>
                  <button className="btn-1">SKILLS</button>
                </div>
                <div>
                  <button className="btn-1">PROFILE LINKS</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-1 prev_icon">
              <img src="/images/previousicon.png" />
            </div>
            <div className="col-lg-7 add_ur_work_text">
              Add your work experience
            </div>
            <div className="col-lg-4"></div>
          </div>
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-3 mb-3">
              <div>
                <div className="text-work">Job Title</div>
                <input type="text" className="form-control" />
              </div>
              <div className="col-lg-6"></div>
            </div>

            <div className="row mb-3">
              <div className="col-lg-3"></div>
              <div className="col-lg-5">
                <div className="text-work">Name of the organisation</div>
                <input type="email" className="form-control" />
              </div>

              <div className="col-lg-4"></div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-3"></div>
              <div className="col-lg-3">
                <div className="text-work">Location</div>
                <input type="email" className="form-control" />
              </div>

              <div className="col-lg-6"></div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-3"></div>
              <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-2">
                  <div className="text-work">Start Date</div>
                  <input type="date" className="form-control" />
                </div>
                <div className="col-lg-2">
                  <div className="text-work">End Date</div>
                  <input type="date" className="form-control" />
                </div>
              </div>

              <div className="col-lg-4"></div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-3"></div>
              <div className="col-lg-3" style={{ textAlign: "left" }}>
                <img src="/images/plus.png" />
                <button className="btn_school">ADD EXPERIENCE</button>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-7"></div>
              <div className="col-lg-2">
                <button className="btn-edu-next">next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkExperience;
