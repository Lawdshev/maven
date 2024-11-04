import { FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { deleteTableRow } from "../redux/actions";

const Table = () => {
  const dispatch = useDispatch();
   const tableData =
     useSelector(
       (state: RootState) => state.data?.developmentActivity.tableData
     ) ?? [];

  const handleDelete = (userName: string, commitMessage: string) => {
    dispatch(deleteTableRow(userName, commitMessage));
  };
  
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
        {
          tableData?.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center p-2 py-24 text-gray-500 italic">
                No data available
              </td>
            </tr>
          )
        }
        { tableData?.length > 0 && tableData?.map((activity, index) => (
          <tr key={index} className="border-b ">
            <td className="p-2 flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
              {activity.user}
            </td>
            <td className="p-2">{activity.commitMessage}</td>
            <td className="p-2">{activity.date}</td>
            <td className="p-2 cursor-pointer" onClick={() => handleDelete(activity.user, activity.commitMessage)}>
              <FaTrash />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
