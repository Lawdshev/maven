import React from "react";
import { FaRegBell, FaUserCircle } from "react-icons/fa";
import tablerLogo from "../assets/tabler(2).svg";
import { getRandomName } from "../utils/helpers";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Header: React.FC = () => {
  const profile = useSelector((state: RootState) => state.profile);

  return (
    <header className="bg-white border-b border-gray-200 p-4 hidden md:flex justify-between items-center lg:px-16 px-8">
      <div className="flex items-center">
        <img src={tablerLogo} alt="Tabler Logo" className="w-20 md:w-28" />
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <button className="text-[#0054a6] border border-[#0054a6] px-2 py-1 rounded text-sm md:text-base">
          Source code
        </button>
        <button className="relative text-gray-700 hover:text-[#0054a6]">
          <FaRegBell className="w-4 h-4 md:w-5 md:h-5" />
          <span className="absolute top-0 -right-2 bg-red-500 text-white text-xs rounded-full w-2 h-2 flex items-center justify-center"></span>
        </button>
        <div className="flex items-center space-x-2">
          <FaUserCircle className="w-6 h-6 md:w-8 md:h-8 text-gray-700" />
          <div className="flex flex-col text-gray-700 font-medium text-sm md:text-base">
            <span>{profile?.username}</span>
            <span className="text-gray-500 text-xs md:text-sm">
              {profile?.email}
            </span>
          </div>
        </div>
      </div>
      <div className="md:hidden flex items-center">
        <button className="text-gray-700 hover:text-[#0054a6]">
          <FaUserCircle className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
