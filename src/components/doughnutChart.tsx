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

const DoughnutChartComponent: React.FC = () => {
  const data = useSelector((state: RootState) => state.data?.chartSections?.revenue) ?? [];
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
              innerRadius={50}
              outerRadius="80%"
              fill="#8884d8"
              label={({ value }) => `${value}%`}
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

export default DoughnutChartComponent;
