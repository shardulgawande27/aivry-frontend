"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "January",
    2024: 4000,
    2025: 5000,
  },
  {
    month: "February",
    2024: 4200,
    2025: 5300,
  },
  {
    month: "March",
    2024: 4500,
    2025: 5800,
  },
  {
    month: "April",
    2024: 4700,
    2025: 6000,
  },
  {
    month: "May",
    2024: 4900,
    2025: 6300,
  },
  {
    month: "June",
    2024: 5100,
    2025: 6700,
  },
  {
    month: "July",
    2024: 5300,
    2025: 7000,
  },
  {
    month: "August",
    2024: 5500,
    2025: 7400,
  },
  {
    month: "September",
    2024: 5700,
    2025: 7800,
  },
  {
    month: "October",
    2024: 5900,
    2025: 8200,
  },
  {
    month: "November",
    2024: 6100,
    2025: 8600,
  },
  {
    month: "December",
    2024: 6300,
    2025: 9000,
  },
];

const AreaChartContainer = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="2024"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="2025"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default AreaChartContainer;
