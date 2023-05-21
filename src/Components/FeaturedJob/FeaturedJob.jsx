import React, { useEffect, useState } from "react";
import "./FeaturedJob.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const FeaturedJob = () => {
  const [featured, setFeatured] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("featuredjob.json")
      .then((res) => res.json())
      .then((data) => setFeatured(data));
  }, []);

  const visibleCards = showAll ? featured : featured.slice(0, 4);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="feature-full-container">
      <div className="job">
        <h2>Featured Jobs</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. It's your future.
        </p>
      </div>
      <div className="feature-container">
        {visibleCards.map((feature) => (
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
                  Salary: {feature.salary}
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
        {!showAll && (
          <button className="btn-see-all" onClick={toggleShowAll}>
            See All Jobs
          </button>
        )}
      </div>
    </div>
  );
};

export default FeaturedJob;
