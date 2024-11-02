import React from "react";
import { FaTrash } from "react-icons/fa";
interface Activity {
  user: string;
  commit: string;
  date: string;
}

const activities: Activity[] = Array(5)
  .fill(null)
  .map((_, i) => ({
    user: `${["Ronald", "Russell", "Beverly"][i % 3]} ${
      ["Bradley", "Gibson", "Armstrong"][i % 3]
    }`,
    commit: `${
      ["Initial commit", "Main structure", "Left sidebar adjustments"][i % 3]
    } ${i}`,
    date: new Date(Date.now() - i * 24 * 60 * 60 * 1000)
      .toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
      .replace(",", ""),
  }));

const Table = () => {
  return (
    <table className="w-full min-w-[600px] text-sm text-gray-500">
      <thead>
        <tr>
          <th className="text-left p-2">User</th>
          <th className="text-left p-2">Commit</th>
          <th className="text-left p-2">Date</th>
        </tr>
      </thead>
      <tbody>
        {activities.map((activity, index) => (
          <tr key={index} className="border-b ">
            <td className="p-2 flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
              {activity.user}
            </td>
            <td className="p-2">{activity.commit}</td>
            <td className="p-2">{activity.date}</td>
            <td className="p-2">
              <FaTrash />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
