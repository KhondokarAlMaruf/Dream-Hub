import React from "react";
import "./Header.css";
import img from "../../Image/person.png";

const Header = () => {
  return (
    <div>
      <div className="banner">
        <div className="banner-text">
          <h2>
            One Step <br /> Closer To Your <br /> <span>Dream Job</span>
          </h2>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn">Get Started</button>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
