import React from "react";
import "./header.css";
import { FaAngleDown } from "react-icons/fa";

const Header = () => {
  return (
    <div className="container-fluid header">
      <div className="row p-3">
        <div className="col-lg-2">
          <button className="logo_btn">Logo</button>
        </div>
        <div className="col-lg-5"></div>
        <div className="col-lg-2">
          <button className="post_btn">Post a job</button>
        </div>
        <div className="col-lg-2">
          <button className="applicants_btn">
            applicants name
            <span>
              <FaAngleDown />
            </span>
          </button>
        </div>
        <div className="col-lg-1">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
};
export default Header;
