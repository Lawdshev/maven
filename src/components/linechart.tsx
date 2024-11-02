import { AreaChart, Area, ResponsiveContainer } from "recharts";

const data = [
  { name: "Day 1", value: 20 },
  { name: "Day 2", value: 22 },
  { name: "Day 3", value: 15 },
  { name: "Day 4", value: 30 },
  { name: "Day 5", value: 18 },
  { name: "Day 6", value: 25 },
  { name: "Day 7", value: 40 },
];

const LineChartComponent: React.FC = () => (
  <ResponsiveContainer width="100%" height={200}>
    <AreaChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
      <Area
        type="linear"
        dataKey="value"
        stroke="#819ec3"
        fill="#F0F8FF"
        fillOpacity={0.6}
        strokeWidth={2}
      />
    </AreaChart>
  </ResponsiveContainer>
);

export default LineChartComponent;