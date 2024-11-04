import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { LineChart } from "../redux/types";

interface LineChartComponentProps {
  data: LineChart[];
}

const LineChartComponent: React.FC<LineChartComponentProps> = ({ data }) => (
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
