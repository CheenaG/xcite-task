import React, { useState } from "react";
import "./registernowpage.css";
import { FcGoogle } from "react-icons/fc";
const RegisterNowPage = () => {
  const [userdata, setUserData] = useState({
    fname: {
      value: "",
      message: "please enter your Firstname",
      display: false,
    },
    lname: {
      value: "",
      message: "please enter your Lastname",
      display: false,
    },
    email: { value: "", message: "please enter your email", display: false },
    password: {
      value: "",
      message: "please enter correct password",
      display: false,
    },
  });
  const SaveUserData = (e, name) => {
    const newdata = { ...userdata };
    newdata[name].value = e.target.value;
    newdata[name].display = false;
    setUserData(newdata);
  };

  const validataData = () => {
    const getdata = { ...userdata };
    if (getdata.fname.value === "") {
      getdata.fname.display = true;
      setUserData(getdata);
    }
    if (getdata.lname.value === "") {
      getdata.lname.display = true;
      setUserData(getdata);
    }
    if (getdata.email.value === "") {
      getdata.email.display = true;
      setUserData(getdata);
    }
    if (getdata.password.value === "") {
      getdata.password.display = true;
      setUserData(getdata);
    }
  };

  return (
    <div className="container-fluid main_container">
      <div className="row">
        <div className="col-lg-4 register-page-left">
          <div className="row">
            <div className="col-lg-8">
              <div className="main_text">XcitEducation</div>
            </div>
            <div className="col-lg-4"></div>
          </div>
          <div className="row">
            <div className="col-lg-12 registerpage_img">
              <img src="/images/mainpage.png" style={{ width: "450px" }} />
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-6 text_started">Let’s get started.</div>
            <div className="col-lg-5"></div>
          </div>

          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-3 input_first">
              <div className="first_name"> First Name</div>
              {userdata.fname.display ? (
                <div
                  style={{
                    color: "red",
                    textAlign: "right",
                    fontSize: "10px",
                    padding: "2px",
                  }}
                >
                  {userdata.fname.message}
                </div>
              ) : null}
              <input
                type="text"
                className="input-control text_input"
                onChange={(obj) => SaveUserData(obj, "fname")}
                value={userdata.fname.value}
              />
            </div>
            <div className="col-lg-7"></div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="last_name"> Last Name</div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-3  lastname_text_input">
              {userdata.lname.display ? (
                <div
                  style={{
                    color: "red",
                    textAlign: "right",
                    fontSize: "10px",
                    padding: "2px",
                  }}
                >
                  {userdata.lname.message}
                </div>
              ) : null}
              <input
                type="text"
                className="input-control"
                onChange={(obj) => SaveUserData(obj, "lname")}
                value={userdata.lname.value}
              />{" "}
            </div>
            <div className="col-lg-1 div_or">OR</div>
            <div className="col-lg-3">
              <button className="google_btn">
                Sign Up with Google
                <span className="google_icon">
                  <FcGoogle />
                </span>
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-3 input_first">
              <div className="Email_name"> Email</div>
              {userdata.email.display ? (
                <div
                  style={{
                    color: "red",
                    textAlign: "right",
                    fontSize: "10px",
                    padding: "2px",
                  }}
                >
                  {userdata.email.message}
                </div>
              ) : null}
              <input
                type="text"
                className="input-control text_input"
                onChange={(obj) => SaveUserData(obj, "email")}
                value={userdata.email.value}
              />
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-2"></div>
          </div>
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-3 input_first">
              <div className="first_name"> Password</div>
              {userdata.password.display ? (
                <div
                  style={{
                    color: "red",
                    textAlign: "right",
                    fontSize: "10px",
                    padding: "2px",
                  }}
                >
                  {userdata.password.message}
                </div>
              ) : null}
              <input
                type="text"
                className="input-control text_input"
                onChange={(obj) => SaveUserData(obj, "password")}
                value={userdata.password.value}
              />
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-2"></div>
          </div>
          <div className="row btn_row">
            <button
              className="signup_btn mt-5"
              style={{ width: "100px" }}
              onClick={() => validataData()}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterNowPage;
