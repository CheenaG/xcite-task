import { fontSize } from "@mui/system";
import React, { useState } from "react";
import "./landingpage.css";

const JobsTitle = () => {
  const [jobs, setJobs] = useState([
    {
      id: 0,
      badge: "/images/badge.png",
      title: "Jobs Title",
      tag: "/images/tag.png",
      name: "companyname",
      location: "location",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have  ",
      design: "design",
      fulltime: "fulltime",
      stipend: "stipend",
      time: "25 minutesago",
      button: "APPLYNOW",
    },
    {
      id: 1,
      badge: "/images/badge.png",
      title: "Jobs Title",
      tag: "/images/tag.png",
      name: "companyname",
      location: "location",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have  ",
      design: "design",
      fulltime: "fulltime",
      stipend: "stipend",
      time: "25 minutesago",
      button: "APPLYNOW",
    },
    {
      id: 2,
      badge: "/images/badge.png",
      title: "Jobs Title",
      tag: "/images/tag.png",
      name: "companyname",
      location: "location",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have  ",
      design: "design",
      fulltime: "fulltime",
      stipend: "stipend",
      time: "25 minutesago",
      button: "APPLYNOW",
    },
    {
      id: 3,
      badge: "/images/badge.png",
      title: "Jobs Title",
      tag: "/images/tag.png",
      name: "companyname",
      location: "location",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have  ",
      design: "design",
      fulltime: "fulltime",
      stipend: "stipend",
      time: "25 minutesago",
      button: "APPLYNOW",
    },
    {
      id: 4,
      badge: "/images/badge.png",
      title: "Jobs Title",
      tag: "/images/tag.png",
      name: "companyname",
      location: "location",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have  ",
      design: "design",
      fulltime: "fulltime",
      stipend: "stipend",
      time: "25 minutesago",
      button: "APPLYNOW",
    },
    {
      id: 5,
      badge: "/images/badge.png",
      title: "Job Title",
      tag: "/images/tag.png",
      name: "companyname",
      location: "location",
      content:
        "There are many variations of passages of Lorem Ipsum available, but the majority have  ",
      design: "design",
      fulltime: "fulltime",
      stipend: "stipend",
      time: "25 minutesago",
      button: "APPLYNOW",
    },
  ]);

  return (
    <div className="container-fluid ">
      <div className="row job-title-main">
        <div
          style={{ textAlign: "left", paddingTop: "20px", fontSize: "30px" }}
        >
          {jobs.length} Jobs found{" "}
        </div>

        {jobs.map((elements, index) => {
          return (
            <div className="col-lg-4 mt-5" key={index}>
              <div className="card p-2 border-danger">
                <div>
                  <div className="jt_main_div">
                    <div className="d-flex">
                      <img src={elements.badge} />

                      <div className="title-subtitle">
                        <div style={{ textAlign: "left", fontWeight: "bold" }}>
                          {elements.title}
                        </div>
                        <div className="d-flex">
                          <div>{elements.name}</div>
                          <div>{elements.location}</div>
                        </div>
                      </div>
                    </div>
                    <div className="jt_div_right">
                      <img src={elements.tag} />
                    </div>
                  </div>

                  <div className="jt_second_div">
                    <div style={{ textAlign: "justify", padding: "20px" }}>
                      {elements.content}
                    </div>
                  </div>
                  <div className="jt_second_div_submenu ">
                    <div className="submenu-jt">{elements.design}</div>
                    <div className="submenu-jt">{elements.fulltime}</div>
                    <div className="submenu-jt">{elements.stipend}</div>
                  </div>

                  <div
                    className="d-flex mt-3"
                    style={{ justifyContent: "space-around" }}
                  >
                    <div className="time-btn" style={{ fontSize: "18px" }}>
                      {elements.time}
                    </div>
                    <div className="apply-btn">{elements.button}</div>
                  </div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default JobsTitle;
