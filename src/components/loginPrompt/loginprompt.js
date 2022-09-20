import * as React from "react";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

import Dialog from "@mui/material/Dialog";

import { FcGoogle } from "react-icons/fc";
import "./loginprompt.css";

export default function LoginPrompt() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        LoginPrompt
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={"xs"}
        borderRadius={"20px"}
        height={500}
      >
        <div
          className="mt-3"
          style={{
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          Login
        </div>
        <div className="d-flex justify-content-center">
          <div className="radio_div  mt-2 ">
            <FormControlLabel
              value="female"
              control={<Radio style={{ color: "orange" }} />}
              label="Student"
            />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Employer"
            />
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div className="p-4">
            <input
              type="text"
              placeholder="Email id"
              style={{ width: "300px", borderRadius: "6px", padding: "2px" }}
            />
          </div>
          <div className="p-2">
            <input
              type="password"
              placeholder="Password"
              style={{ width: "300px", borderRadius: "6px", padding: "2px" }}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className=" mt-5 radio_div">
            <div className="btndiv-grp">
              <div>
                <button
                  style={{
                    border: "none",
                    backgroundColor: "#fff",
                    textDecorationLine: "underline",
                    color: "#F97316",
                  }}
                >
                  Forgot Password
                </button>
              </div>
              <div>
                <button
                  style={{
                    backgroundColor: "#F97316",
                    color: "white",
                    border: "none",
                    borderRadius: "30px",
                    fontSize: "16px",
                    padding: "2px 17px",
                  }}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">OR</div>
        <div className="text-center mt-4">
          <button
            className="p-2"
            style={{
              width: "70%",
              borderRadius: "16px",
              backgroundColor: "white",
              fontSize: "15px",
            }}
          >
            <span
              style={{
                fontSize: "25px",
                paddingRight: "20px",
              }}
            >
              <FcGoogle />
            </span>
            Login with Google Account
          </button>
        </div>
        <div
          className="text-center mt-4 mb-5"
          style={{
            textDecoration: "underline",
            fontSize: "15px",
            color: "#F97316",
            fontWeight: "600",
          }}
        >
          Don't have an account?Register Now
        </div>
      </Dialog>
    </div>
  );
}
