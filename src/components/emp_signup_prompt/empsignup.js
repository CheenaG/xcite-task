import * as React from "react";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

import Dialog from "@mui/material/Dialog";

import { FcGoogle } from "react-icons/fc";
import "./empsignup.css";

export default function SignUpPrompt() {
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
        Sign
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={"xs"}
        borderradius={"20px"}
        height={500}
        padding={"30px"}
      >
        <div
          className="mt-3 mb-3"
          style={{
            textAlign: "center",
            fontSize: "26px",
            fontWeight: "bold",
          }}
        >
          Signup to get started
        </div>

        <div className="input_fname  mt-2  p-3">
          <div>
            First name
            <input type="text" className="inputdiv" />
          </div>

          <div>
            Last name
            <input type="text" className="inputdiv" />
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div className="p-3">
            <div className="signup-text"> Name of the company</div>
            <div>
              {" "}
              <input
                type="text"
                style={{ width: "400px", borderRadius: "6px", padding: "2px" }}
              />
            </div>
          </div>
          <div className="p-3">
            <div className="signup-text">Email ID</div>
            <div>
              {" "}
              <input
                type="text"
                style={{ width: "400px", borderRadius: "6px", padding: "2px" }}
              />
            </div>
          </div>
          <div className="p-3">
            <div className="signup-text"> Password</div>
            <div>
              {" "}
              <input
                type="text"
                style={{ width: "400px", borderRadius: "6px", padding: "2px" }}
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="mt-5 mb-5">
            <div className="btndiv-grp">
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
                  Signup
                </button>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
