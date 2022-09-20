import React from "react";
import "./postajob.css";
const PostaJob = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-5">
          <h5 className="post-text">post a Job</h5>
          <div className="paj-outer-div">
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-8">
                <div className="jt-text">Job Title</div>
                <div>
                  <input type="text" className="jt-inputdiv" />
                </div>
              </div>
              <div className="col-lg-1"></div>
            </div>
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-4">
                <div className="jt-text2">Job Type</div>
                <div>
                  <input type="text" className="jt-inputdiv2" />
                </div>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-4">
                <div className="jt-text3">Duration</div>
                <div>
                  <input type="text" className="jt-inputdiv3" />
                </div>
              </div>
              <div className="col-lg-1"></div>
            </div>
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-4">
                <div className="jt-text2">Location</div>
                <div>
                  <input type="text" className="jt-inputdiv2" />
                </div>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-4">
                <div className="jt-text3">Stipend</div>
                <div>
                  <input type="text" className="jt-inputdiv3" />
                </div>
              </div>
              <div className="col-lg-1"></div>
            </div>
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-4">
                <div className="jt-text2">Application Deadline</div>
                <div>
                  <input type="date" className="jt-inputdiv2" />
                </div>
              </div>
              <div className="col-lg-1"></div>

              <div className="col-lg-1"></div>
            </div>
            <div className="row">
              <div className="col-lg-9"></div>
              <div className="col-lg-3 mt-4">
                <button className="next_btn">next</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
};
export default PostaJob;
