import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
  const detail = useLoaderData();
  const { id } = detail;
  console.log(detail);
  return (
    <div>
      <h2>{detail.companyName}</h2>
    </div>
  );
};

export default Details;
