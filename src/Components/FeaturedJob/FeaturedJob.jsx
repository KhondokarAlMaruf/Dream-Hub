import React, { useEffect, useState } from "react";
import "./FeaturedJob.css";

const FeaturedJob = () => {
  const [featured, setfeatured] = useState([]);

  useEffect(() => {
    fetch("featuredjob.json")
      .then((res) => res.json())
      .then((data) => setfeatured(data));
  }, []);

  return (
    <div>
      <div className="job">
        <h2>Featured Jobs</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div>
        {featured.map((feature) => (
          <div key={feature.id}>
            <h2>{feature.id}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedJob;
