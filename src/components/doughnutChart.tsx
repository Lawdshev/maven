import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Cell,
  Pie,
} from "recharts";

const data = [
  { name: "Jan", value: 63.0 },
  { name: "Feb", value: 37.0 },
];

const DoughnutChartComponent: React.FC = () => {
  const COLORS = ["#25d366", "#E6FFDA"];

    return (
      <div className="mx-auto w-full h-full">
        <ResponsiveContainer width="100%">
          <PieChart margin={{ left: 20 }}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="45%"
              cy="50%"
              innerRadius={60}
              outerRadius="100%"
              fill="#8884d8"
              label={(entry) => `${entry.value}`} // Custom label function to show the value
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

export default DoughnutChartComponent;
