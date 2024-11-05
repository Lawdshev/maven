import React from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import LineChartComponent from "../components/linechart";
import PieChartComponent from "../components/piechart";
import DoughnutChartComponent from "../components/doughnutChart";
import Table from "../components/table";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import NewFeedbacksComponent from "../components/feedbacks";
import TodayProfit from "../components/todayProfit";
import UpdateButton from "../components/updateButton";
import { formatCurrency } from "../utils/helpers";

const Dashboard: React.FC = () => {
  const metrics = useSelector((state: RootState) => state.data?.metrics);
  const lineChartData =
    useSelector(
      (state: RootState) => state.data?.developmentActivity.chartData
    ) ?? [];

  return (
    <div className="p-2 md:p-5 px-3 lg:px-16 bg-gray-100 ">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl font-semibold my-3 lg:my-6 text-gray-600">
          Dashboard
        </h1>
        <UpdateButton />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {metrics?.map((metric, index) => (
          <div
            key={index}
            className="bg-white p-4 md:p-6 pb-8 md:pb-10 rounded shadow-sm flex flex-col justify-between items-center"
          >
            <div
              className={`text-sm flex items-center justify-end w-full ${
                metric.change > 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {metric.change}%
              {metric.change > 0 ? (
                <RxCaretUp size={20} />
              ) : (
                <RxCaretDown size={20} />
              )}
            </div>
            <div className="flex flex-col justify-between items-center">
              <h2 className="text-2xl md:text-3xl font-semibold">
                {index === 4 ? "$" : ""}
                {index === 4 ? formatCurrency(metric.value) : metric.value}
              </h2>
              <p className="text-gray-500 text-sm md:text-base">
                {metric.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <div className="bg-white rounded shadow-sm mb-8 md:col-span-3 lg:col-span-3">
          <h2 className="text-lg font-semibold p-4 ">Development Activity</h2>
          <hr />
          <div className="p-4">
            <div className="flex items-center gap-1 mx-3">
              <div className="bg-blue-700 text-white w-3 h-3"></div>
              <p>Purchases</p>
            </div>
            <div className="w-full rounded mb-4">
              <LineChartComponent data={lineChartData} />
            </div>
            <div className="overflow-x-auto ">
              <Table />
            </div>
          </div>
        </div>
        <div className="md:col-span-3 lg:col-span-3">
          <div className="px-4 py-3 bg-blue-200 border border-blue-300 rounded mb-4">
            <span className="font-semibold">Read our documentation</span> with
            code samples.
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded shadow-sm">
              <h2 className="text-lg font-semibold p-3">
                Revenue Distribution
              </h2>
              <hr />
              <div className="w-full h-80 rounded flex items-center ">
                <DoughnutChartComponent />
              </div>
            </div>
            <div className="bg-white rounded shadow-sm">
              <h2 className="text-lg font-semibold p-3">Sales</h2>
              <hr />
              <div className="w-full h-80 rounded flex items-center p-3">
                <PieChartComponent />
              </div>
            </div>
            <div className="bg-white rounded shadow-sm">
              <h2 className="text-lg font-semibold p-3 text-center">
                New Feedback
              </h2>
              <hr />
              <div className="flex flex-col w-full h-auto overflow-auto">
                <NewFeedbacksComponent />
              </div>
            </div>
            <div className="bg-white rounded shadow-sm">
              <h2 className="text-lg font-semibold p-3 text-center">
                Today Profit
              </h2>
              <hr />
              <div className="w-full h-80 rounded flex items-center overflow-hidden">
                <TodayProfit />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
