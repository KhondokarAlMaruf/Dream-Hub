import React, { useEffect, useState } from "react";
import "./JobCategory.css";

const JobCategory = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("job.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <div className="job">
        <h2>Job Category List</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="job-container">
        {jobs.map((job) => (
          <div className="job-section">
            <img src={job.logo} alt="" />
            <h2>{job.name}</h2>
            <p>{job.job}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCategory;
