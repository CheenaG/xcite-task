import React, { useState } from "react";
import "./viewapp.css";
const ViewappMain = () => {
  const [appdata, setappdata] = useState([
    {
      id: 1,
      img: "/images/circlesm.png",
      text: "Diggligence",
      home: "/images/home.png",
      cal: "/images/Calendar.png",
      text1: "work from home",
      text2: "2 Months",
      text3: "UI/UX Design",
      tag: "images/tag.png",
      button: "view Profile",
    },
    {
      id: 2,
      img: "/images/circlesm.png",
      text: "Diggligence",
      home: "/images/home.png",
      cal: "/images/Calendar.png",
      text1: "work from home",
      text2: "2 Months",
      text3: "UI/UX Design",
      tag: "images/tag.png",
      button: "view Profile",
    },
    {
      id: 3,
      img: "/images/circlesm.png",
      text: "Diggligence",
      home: "/images/home.png",
      cal: "/images/Calendar.png",
      text1: "work from home",
      text2: "2 Months",
      text3: "UI/UX Design",
      tag: "images/tag.png",
      button: "view Profile",
    },
    {
      id: 4,
      img: "/images/circlesm.png",
      text: "Diggligence",
      home: "/images/home.png",
      cal: "/images/Calendar.png",
      text1: "work from home",
      text2: "2 Months",
      text3: "UI/UX Design",
      tag: "images/tag.png",
      button: "view Profile",
    },
  ]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 mt-5">
          <div
            classname="rectangle_1 bg-danger"
            style={{
              width: "220px",
              height: "40px",
              background: "#F97316",
              marginBottom: "25px",
            }}
          ></div>
          <div
            classname="rectangle_1"
            style={{
              width: "220px",
              height: "40px",
              background: "#F97316",
              marginBottom: "25px",
            }}
          ></div>
          <div
            classname="rectangle_1"
            style={{
              width: "220px",
              height: "40px",
              background: "#F97316",
              marginBottom: "25px",
            }}
          ></div>
          <div
            classname="rectangle_1"
            style={{
              width: "220px",
              height: "40px",
              background: "#F97316",
              marginBottom: "25px",
            }}
          ></div>
        </div>
        <div className="col-lg-8 mt-5">
          <div className="row">
            <div className="col-lg-4 shortlist">
              <button className="btn-shortlisted">All Applications</button>
            </div>
            <div className="col-lg-4 shortlist">
              <button className="btn-shortlisted">Shortlisted</button>
            </div>
          </div>
          <div className="row">
            {appdata.map((data, index) => {
              return (
                <div className="col-lg-9" key={index}>
                  <div className="card p-3 mb-4">
                    <div className="row">
                      <div className="col-lg-2 menu1">
                        <img src={data.img} />
                      </div>
                      <div className="col-lg-2 menu2">
                        <div style={{ paddingBottom: "12px" }}>{data.text}</div>
                        <div>{data.text3}</div>
                      </div>
                      <div className="col-lg-4">
                        <div className="menu2" style={{ textAlign: "left" }}>
                          <span>
                            <img src={data.home} className="" />
                          </span>
                          {data.text1}
                        </div>
                        <div className="menu2" style={{ textAlign: "left" }}>
                          <span>
                            <img src={data.cal} />
                          </span>
                          {data.text2}
                        </div>
                      </div>
                      <div className="col-lg-2"></div>
                      <div className="col-lg-2">
                        <div className="tag-div">
                          {" "}
                          <img src={data.tag} style={{ width: "12px" }} />
                        </div>
                        <div className="apply-btn2"> {data.button}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewappMain;
