import React, { useState, useCallback } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import "./styles.css"

const data = [
    {
      name: "Day 1",
      "New Orders": 40,
      "New Users": 12,
      Bussiness: 24000
    },
    {
      name: "Day  2",
      "New Orders": 30,
      "New Users": 13,
      Bussiness: 22100
    },
    {
      name: "Day 3",
      "New Orders": 20,
      "New Users": 9,
      Bussiness: 2290
    },
    {
      name: "Day 4",
      "New Orders": 52,
      "New Users": 39,
      Bussiness: 20000
    },
    {
      name: "Day 5",
      "New Orders": 18,
      "New Users": 8,
      Bussiness: 21810
    },
    {
      name: "Day 6",
      "New Orders": 23,
      "New Users": 13,
      Bussiness: 25000
    },
    {
      name: "Day 7",
      "New Orders": 34,
      "New Users": 23,
      Bussiness: 21000
    }
  ];
function GraphChart(){
    const [opacity, setOpacity] = useState({
        "New Orders": 1,
        "New Users": 1
      });
    
      const handleMouseEnter = useCallback(
        (o) => {
          const { dataKey } = o;
    
          setOpacity({ ...opacity, [dataKey]: 0.5 });
        },
        [opacity, setOpacity]
      );
      const handleMouseLeave = useCallback(
        (o) => {
          const { dataKey } = o;
          setOpacity({ ...opacity, [dataKey]: 1 });
        },
        [opacity, setOpacity]
      );
    
      return (
        <div>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            <Line
              type="monotone"
              dataKey="New Users"
              strokeOpacity={opacity["New Users"]}
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="New Orders"
              strokeOpacity={opacity["New Orders"]}
              stroke="#82ca9d"
            />
          </LineChart>
          {/* <p className="notes">Tips: Hover the legend !</p> */}
        </div>
      );
}

export default GraphChart