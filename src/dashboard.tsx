import React from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import LineChartComponent from "./components/linechart";
import PieChartComponent from "./components/piechart";
import DoughnutChartComponent from "./components/doughnutChart";
import Table from "./components/table";

interface Metric {
  label: string;
  value: string;
  change: string;
  up: boolean;
}

const metrics: Metric[] = [
  { label: "New Tickets", value: "43", change: "+6%", up: true },
  { label: "Closed Today", value: "17", change: "-3%", up: false },
  { label: "New Replies", value: "7", change: "+9%", up: true },
  { label: "Followers", value: "27.3k", change: "+3%", up: true },
  { label: "Daily Earnings", value: "$95", change: "-2%", up: false },
  { label: "Products", value: "621", change: "-1%", up: false },
];

const Dashboard: React.FC = () => {
  return (
    <div className="p-2 md:p-5 px-3 lg:px-16 bg-gray-100 ">
      <h1 className="text-2xl font-semibold my-3 lg:my-6 text-gray-600">
        Dashboard
      </h1>
      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white p-4 md:p-6 pb-8 md:pb-10 rounded shadow-sm flex flex-col justify-between items-center"
          >
            <div
              className={`text-sm flex items-center justify-end w-full ${
                metric.up ? "text-green-500" : "text-red-500"
              }`}
            >
              {metric.change}
              {metric.up ? <RxCaretUp size={20} /> : <RxCaretDown size={20} />}
            </div>
            <div className="flex flex-col justify-between items-center">
              <h2 className="text-2xl md:text-3xl font-semibold">
                {metric.value}
              </h2>
              <p className="text-gray-500 text-sm md:text-base">
                {metric.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <div className="bg-white p-4 rounded shadow-sm mb-8 md:col-span-3 lg:col-span-3">
          <h2 className="text-xl font-semibold mb-4">Development Activity</h2>
          <div className="flex items-center gap-1">
            <div className="bg-blue-700 text-white w-3 h-3"></div>
            <p>
              Purchases
            </p>
          </div>
          <div className="w-full rounded mb-4">
            <LineChartComponent />
          </div>
          <div className="overflow-x-auto">
            <Table />
          </div>
        </div>
        <div className="md:col-span-3 lg:col-span-3">
          <div className="px-4 py-3 bg-blue-200 border border-blue-300 rounded mb-4">
            <span className="font-semibold">Read our documentation</span> with
            code samples.
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded shadow-sm">
              <h2 className="text-lg font-semibold p-3">Chart title</h2>
              <hr />
              <div className="w-full h-60 rounded flex items-center p-4">
                <DoughnutChartComponent />
              </div>
            </div>
            <div className="bg-white rounded shadow-sm">
              <h2 className="text-lg font-semibold p-3">Chart title</h2>
              <hr />
              <div className="w-full h-60 rounded flex items-center p-4">
                <PieChartComponent />
              </div>
            </div>
            <div className="bg-white rounded shadow-sm">
              <h2 className="text-lg font-semibold p-3 text-center">
                New Feedback
              </h2>
              <hr />
              <div className="w-full h-60 rounded flex items-center p-4">
                <DoughnutChartComponent />
              </div>
            </div>
            <div className="bg-white rounded shadow-sm">
              <h2 className="text-lg font-semibold p-3 text-center">
                Today Profit
              </h2>
              <hr />
              <div className="w-full h-60 rounded flex items-center p-4">
                <PieChartComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
