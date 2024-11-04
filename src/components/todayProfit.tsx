import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { RootState } from "../redux/store";
import { formatCurrency } from "../utils/helpers";

const TodayProfit: React.FC = () => {
   const profits =
     useSelector((state: RootState) => state.data?.chartSections?.profits) ??
     [];
  return (
    <div className="bg-white w-full -ml-4 p-4 rounded-lg ">
      <div className="w-full flex flex-col items-center">
        <div className="text-3xl font-bold text-green-500 flex items-center space-x-2 mb-3">
          <span>${formatCurrency(profits[0]?.profit)}</span>
        </div>
        <p className="text-sm text-gray-500 mb-4">+10% from yesterday</p>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={profits}>
            <XAxis dataKey="date" stroke="#8884d8" />
            <YAxis stroke="#8884d8" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="profit"
              stroke="#4CAF50"
              strokeWidth={2}
              dot={false} // Optional: removes dots from the line for a cleaner look
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TodayProfit;
