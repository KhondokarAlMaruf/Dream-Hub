import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <h3 className="header">DreamHub</h3>
      <div className="link">
        <Link to="/">Home</Link>
        <Link to="/statistics">Statistics</Link>
        <Link to="/">Applied Jobs</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <button className="btn">Star Applying</button>
    </div>
  );
};

export default Navbar;
