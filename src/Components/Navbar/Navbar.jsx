import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <h3 className="header">DreamHub</h3>
      <a href="">Statistics</a>
      <a href="">Applied Jobs</a>
      <a href="">Blog</a>
      <button className="btn">Star Applying</button>
    </div>
  );
};

export default Navbar;
