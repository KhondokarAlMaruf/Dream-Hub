import React from "react";
import "./Details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faTable } from "@fortawesome/free-solid-svg-icons";

import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
  const detail = useLoaderData();
  const {
    id,
    jobDescription,
    jobResponsibility,
    experiences,
    educationalRequirements,
    salary,
    jobTitle,
    contactInformation,
    location,
  } = detail;
  console.log(detail);
  return (
    <div>
      <h2 className="job">Job Details</h2>
      <div className="job-details">
        <div className="information">
          <p>
            <span className="job-span">Job Description: </span> {jobDescription}
          </p>
          <p>
            <span className="job-span">Job Responsibility: </span>
            {jobResponsibility}
          </p>
          <p>
            <span className="job-span">Educational Requirements: </span>
            <br />
            {educationalRequirements}
          </p>
          <p>
            <span className="job-span">Experiences:</span>
            <br />
            {experiences}
          </p>
        </div>
        <div className="contact">
          <h3>Job details</h3>
          <p>
            <FontAwesomeIcon icon={faSackDollar} />
            <span className="job-span"> Salary: </span>
            {salary}
          </p>
          <p>
            <FontAwesomeIcon icon={faTable} />
            <span className="job-span"> Job title: </span>
            {jobTitle}
          </p>
          <h3>Contact Information</h3>
          <p>
            <FontAwesomeIcon icon={faPhone} />
            <span className="job-span"> Phone: </span>

            {contactInformation.phone}
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="job-span"> Email: </span>
            {contactInformation.email}
          </p>
          <p>
            <FontAwesomeIcon icon={faLocationDot} />
            <span className="job-span"> Address: </span>
            {location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
