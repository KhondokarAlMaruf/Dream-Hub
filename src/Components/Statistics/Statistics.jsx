import React from "react";
import "./Statistics.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = [
    {
      name: "Assignment-1",
      marks: 60,
    },
    {
      name: "Assignment-2",
      marks: 55,
    },
    {
      name: "Assignment-3",
      marks: 60,
    },
    {
      name: "Assignment-4",
      marks: 57,
    },
    {
      name: "Assignment-5",
      marks: 43,
    },
  ];

  return (
    <div className="statistics-container">
      <h2>Marks of 5 Assignment</h2>
      <div>
        <AreaChart width={1000} height={500} data={data}>
          <Area dataKey="marks"></Area>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </AreaChart>
      </div>
    </div>
  );
};

export default Statistics;
