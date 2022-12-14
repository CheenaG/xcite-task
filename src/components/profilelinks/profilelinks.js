import React from "react";
import "./profilelinks.css";
import { FiLink } from "react-icons/fi";
import { FaBehanceSquare, FaLinkedin } from "react-icons/fa";

const ProfileLinks = () => {
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
                </div>
                <div>
                  <button className="btn-1">SKILLS</button>
                </div>
                <div>
                  <button className="btn-1">PROFILE LINKS</button>
                  <div className="bottom_line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <form>
            <div className="row ">
              <div className="col-lg-2">
                <div className="prev_icon">
                  <img src="/images/previousicon.png" />
                </div>
              </div>
              <div className="col-lg-6 ">
                <p className="profile_text1"> Add Links to your profiles</p>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="links_div">
                      <span className="in_icon">
                        <FaLinkedin />
                        <p className="link_text">Linkedin Profile</p>
                      </span>

                      <div>
                        <input type="text" className="input-control" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="links_div">
                      <span className="in_icon">
                        <FaBehanceSquare />
                        <p className="link_text">Behance profile</p>
                      </span>

                      <div>
                        <input type="text" className="input-control" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="links_div">
                      <span className="in_icon">
                        <FiLink />
                        <p className="link_text">portfolio link</p>
                      </span>

                      <div>
                        <input type="text" className="input-control" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-1">
                <div className="row">
                  <div className="col-lg-12 btn_done">
                    <button className="btn_text" style={{ fontWeight: "bold" }}>
                      Done
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ProfileLinks;
