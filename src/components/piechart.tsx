import React from "react";
import {
  Legend,
  ResponsiveContainer,
  PieChart,
  Cell,
  Pie,
} from "recharts";

const data = [
  { name: "Jan", value: 40 },
  { name: "Feb", value: 30 },
  { name: "mar", value: 20 },
  { name: "apr", value: 10 },
];

const PieChartComponent: React.FC = () => {
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
            outerRadius="100%"
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
