/**
 * @module
 */

import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";
import "./styles.css"
import KEYS from '../../configs/KEYS';

/*
  Data for Pie Chart
*/
const data = [
    { name: "Completed Orders", value: 2 },
    { name: "PickUp Pending", value: 3 },
    { name: "Service Pending", value: 4 },
    { name: "Delivery Pending", value: 3 }
  ];
  

/**
 * function to render shape of the pie in piechart
 * @param {Object} props - Data about the shape of the pieChart
 * @returns {g} - React Component g(Scalable Vector Component)
 */
const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";
  

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >{`Value ${value}`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
          {`(${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

/**
 * Function to create the pie chart with different sectors
 * @returns {div} - React Component div
 */
function OrderChart(){
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
      (_, index) => {
        setActiveIndex(index);
      },
      [setActiveIndex]
    );
  
    return (
      <div>
        <PieChart className = 'piechart'
        width={600} height={400} >
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx={300}
            cy={200}
            innerRadius={80}
            outerRadius={120}
            fill= {KEYS.COLORS.MAIN}
            dataKey="value"
            onMouseEnter={onPieEnter}
          />
        </PieChart>
      </div>
    );
}
export default OrderChart
