import React from "react";
import { useSelector } from "react-redux";
import { FaUser, FaCommentDots, FaStar } from "react-icons/fa";
import { RootState } from "../redux/store";

const NewFeedbacksComponent: React.FC = () => {
  const feedbacks =
    useSelector((state: RootState) => state.data?.chartSections?.feedbacks) ??
    [];

  return (
    <div className="space-y-4 px-2 w-full">
      {feedbacks.map((feedback) => (
        <div
          key={feedback.id}
          className="flex items-start space-x-2 p-2 bg-gray-50 rounded-md shadow-sm hover:shadow transition-shadow duration-150 border border-gray-100"
        >
          <div className="text-blue-500 flex-shrink-0">
            <FaUser size={20} />
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <h3 className="font-semibold text-gray-800 text-sm">
                {feedback.user}
              </h3>
              <span className="text-xs text-gray-400">{feedback.time}</span>
            </div>
            <p className="text-xs text-gray-600 mt-1 flex items-center">
              <FaCommentDots className="mr-1 text-gray-400" size={12} />
              {feedback.comment}
            </p>
            <div className="mt-1 flex items-center text-yellow-500">
              {[...Array(feedback.rating)].map((_, index) => (
                <FaStar key={index} size={12} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewFeedbacksComponent;
