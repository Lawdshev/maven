import React from "react";
import { useDispatch } from "react-redux";
import { generateNewData } from "../redux/actions";

const UpdateButton: React.FC = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(generateNewData());
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
    >
      Update Data
    </button>
  );
};

export default UpdateButton;
