import React from "react";
import "./certification.css";

const Certification = () => {
  return (
    <div className="container-fluid main_container">
      <div className="row">
        <div className="col-lg-3 certification-page-left">
          <div className="row">
            <div className="col-lg-12">
              <div className="certificate_text">XcitEducation</div>
              <div className="btn-grp mt-5">
                <div>
                  <button className="btn-1">PERSONAL DETAILS</button>
                </div>
                <div>
                  <button className="btn-1">EDUCATION</button>
                </div>
                <div>
                  <button className="btn-1">WORK EXPERIENCE</button>
                </div>
                <div>
                  <button className="btn-1">CERTIFICATIONS</button>
                  <div className="bottom_line"></div>
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
            <div className="col-lg-7 add_ur_cert_text mb-5">
              Add your certifications/awards
            </div>
            <div className="col-lg-4"></div>
          </div>
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-5 mb-3">
              <div>
                <div className="text-cert">Name of course/accomplishments</div>
                <input type="text" className="input-control" />
              </div>
              <div className="col-lg-4"></div>
            </div>

            <div className="row mb-3">
              <div className="col-lg-3"></div>
              <div className="col-lg-5">
                <div className="text-cert">Name of the organisation</div>
                <input type="email" className="input-control" />
              </div>

              <div className="col-lg-4"></div>
            </div>

            <div className="row mb-3">
              <div className="col-lg-3"></div>
              <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-2">
                  <div className="text-cert">Start Date</div>
                  <input type="date" className="input-control" />
                </div>
                <div className="col-lg-2">
                  <div className="text-cert">End Date</div>
                  <input type="date" className="input-control" />
                </div>
              </div>

              <div className="col-lg-4"></div>
            </div>
            <div className="row mb-3">
              <div className="col-lg-3"></div>
              <div className="col-lg-5">
                <div className="text-cert">Certificate link</div>
                <input type="email" className="input-control" />
              </div>

              <div className="col-lg-4"></div>
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
export default Certification;
