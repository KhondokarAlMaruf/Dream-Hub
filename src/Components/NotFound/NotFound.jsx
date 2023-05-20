import React from "react";
// import notFound from "../../Image/notFOund.png";
import notfound from "../../Image/NotFoundd.png";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <img src={notfound} alt="notFOund" />
    </div>
  );
};

export default NotFound;
