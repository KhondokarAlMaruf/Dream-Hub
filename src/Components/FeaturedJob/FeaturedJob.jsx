import React, { useEffect, useState } from "react";
import "./FeaturedJob.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { Link } from "react-router";

const FeaturedJob = () => {
  const [featured, setfeatured] = useState([]);

  useEffect(() => {
    fetch("featuredjob.json")
      .then((res) => res.json())
      .then((data) => setfeatured(data));
  }, []);

  return (
    <div className="feature-full-continer">
      <div className="job">
        <h2>Featured Jobs</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="feature-container">
        {featured.map((feature) => (
          <div key={feature.id} className="feature">
            <img src={feature.companyLogo} alt="" />
            <h3>{feature.jobTitle}</h3>
            <p className="company-name">{feature.companyName}</p>

            <div className="remote-time">
              <div className="remote">
                <p>{feature.remoteOrOnsite}</p>
              </div>
              <div className="time">
                <p>{feature.fulltimeOrPartTime}</p>
              </div>
            </div>
            <div className="location-salary">
              <div>
                <p>
                  <FontAwesomeIcon icon={faLocationDot} />
                  {feature.location}
                </p>
              </div>
              <div>
                <p>
                  <FontAwesomeIcon icon={faSackDollar} />
                  Salary:{feature.salary}
                </p>
              </div>
            </div>

            <Link to={`/details/${feature.id}`} className="btn-view">
              View Details
            </Link>
          </div>
        ))}
      </div>
      <div className="btn-see-all-container">
        <button className="btn-see-all">
          {/* <Link to="#">See All Jobs</Link> */}
          <a to="#">See All Jobs</a>
        </button>
      </div>
    </div>
  );
};

export default FeaturedJob;
