import React from "react";
import { useSelector } from "react-redux";
import {
  ResponsiveContainer,
  PieChart,
  Cell,
  Pie,
  Tooltip,
} from "recharts";
import { RootState } from "../redux/store";


const PieChartComponent: React.FC = () => {
   const data =
     useSelector((state: RootState) => state.data?.chartSections?.sales) ??
     [];
  const COLORS = ["#1c3353", "#477fcf", "#7ea5dd", "#c8d9f1"];

  return (
    <div className="mx-auto w-full h-full">
      <ResponsiveContainer width="100%">
        <PieChart margin={{  left: 20 }}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="45%"
            cy="50%"
            innerRadius={0}
            outerRadius="85%"
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
