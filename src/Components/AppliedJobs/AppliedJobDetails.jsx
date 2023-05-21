import React from "react";
import "./AppliedJobDetails.css";
const AppliedJobDetails = ({ data }) => {
  const {
    id,
    companyLogo,
    jobTitle,
    companyName,
    remoteOrOnsite,
    fulltimeOrPartTime,
    location,
    salary,
  } = data;
  return (
    <div className="applied-job-details-container">
      {/* <h2 className="job-h2">Applied Jobs</h2> */}
      <div>
        <img className="company-imgg" src={companyLogo} alt="" />
      </div>
      <div className="detailss">
        <p className="feature-h3">{jobTitle}</p>
        <p className="company-name">{companyName}</p>
        <div className="retime">
          <p className="remote">{remoteOrOnsite}</p>
          <p className="time">{fulltimeOrPartTime}</p>
        </div>
        <div className="locsalary">
          <p>{location}</p>
          <p>{salary}</p>
        </div>
      </div>
      <button className="btn-view"> View Details</button>
    </div>
  );
};

export default AppliedJobDetails;
