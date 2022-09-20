import React from "react";
import "./foremployers.css";
const ForEmployers = () => {
  return (
    <div className="container-fluid main_container">
      <div className="row">
        <div className="col-lg-4 main-page-left">
          <div className="row">
            <div className="col-lg-8">
              <div className="main_text">XcitEducation</div>
            </div>
            <div className="col-lg-4"></div>
          </div>
          <div className="row">
            <div className="col-lg-12 mainpage_img">
              <img src="/images/mainpage.png" style={{ width: "450px" }} />
            </div>
          </div>
        </div>
        <div className="col-lg-8 main-page-right">
          <div className="row mt-5">
            <div className="col-lg-3"></div>
            <div className="col-lg-3"></div>
            <div className="col-lg-2">
              <button className="register_btn">Register now</button>
            </div>

            <div className="col-lg-2 login_btn">Login</div>
          </div>
          <div className="row center_div">
            <div className="col-lg-2"></div>

            <div className="col-lg-8 text_div">
              <p className="text1">Hire your ideal candidate now</p>
            </div>
            <div className="borderbottom"></div>
            <div className="col-lg-2"></div>
          </div>
          <div className="row">
            <div className="col-lg-3"></div>

            <div className="col-lg-6 mt-5">
              <p className="text1">How it works</p>
            </div>
            <div className="col-lg-3"></div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-1"></div>
            <div className="col-lg-3">
              <div className="one">1</div>
              <div className="bold_text">Register</div>
              <div>Register as an employer</div>
              <div>and provide details about </div>
              <div>the company.</div>
            </div>
            <div className="col-lg-3">
              <div className="one">2</div>
              <div className="bold_text">Post a job</div>
              <div>Post jobs under different </div>
              <div>categoies, add job description</div>
              <div> and requirements.</div>
            </div>
            <div className="col-lg-3">
              <div className="one">3</div>
              <div className="bold_text">Hire candidates</div>
              <div>Review applications, conduct</div>{" "}
              <div>interviews and get the perfect</div>{" "}
              <div>candidate for the job.</div>
            </div>

            <div className="col-lg-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForEmployers;
