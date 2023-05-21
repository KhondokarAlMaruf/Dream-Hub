import React from "react";
import AppliedJobDetails from "./AppliedJobDetails";

const AppliedJobs = () => {
  const dataFromLocal = JSON.parse(localStorage.getItem("applied-Jobs")) || [];
  console.log(dataFromLocal);
  return (
    <div>
      {dataFromLocal.map((data) => (
        <AppliedJobDetails key={data.id} data={data}></AppliedJobDetails>
      ))}
    </div>
  );
};

export default AppliedJobs;
