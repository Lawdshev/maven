import React, { useState } from "react";
import { FiHome, FiMenu, FiX } from "react-icons/fi";
import { IoCubeOutline } from "react-icons/io5";
import { IoMdCheckboxOutline } from "react-icons/io";
import { AiOutlinePicture } from "react-icons/ai";
import {
  FaRegFileAlt,
  FaRegFile,
  FaRegCalendar,
  FaUserCircle,
} from "react-icons/fa";
import tablerLogo from "../assets/tabler(2).svg";

const navigationItems = [
  { href: "#", label: "Home", icon: FiHome, active: true },
  { href: "#", label: "Interface", icon: IoCubeOutline },
  { href: "#", label: "Components", icon: FaRegCalendar },
  { href: "#", label: "Pages", icon: FaRegFile },
  { href: "#", label: "Forms", icon: IoMdCheckboxOutline },
  { href: "#", label: "Gallery", icon: AiOutlinePicture },
  { href: "#", label: "Documentation", icon: FaRegFileAlt },
];

const MobileNavigation: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="md:hidden p-4 border-b border-gray-200">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={tablerLogo} alt="Tabler Logo" className="w-20 md:w-28" />
        </div>
        <button onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="mt-4 space-y-2">
          {navigationItems.map(({ href, label, icon: Icon, active }) => (
            <a
              key={label}
              href={href}
              className={`flex items-center space-x-2 font-medium py-2 ${
                active ? "text-blue-500" : "text-gray-600 hover:text-blue-500"
              }`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </a>
          ))}

          <div className="flex items-center space-x-2 mt-4 p-2 border-t border-gray-200">
            <FaUserCircle size={28} className="text-gray-700" />
            <div className="flex flex-col">
              <span className="font-medium text-gray-700">Jane Pearson</span>
              <span className="text-sm text-gray-500">Administrator</span>
            </div>
          </div>
          <div className="mt-4">
            <button className="w-full text-center text-[#0054a6] border border-[#0054a6] px-3 py-1 rounded hover:bg-[#0054a6] hover:text-white transition-colors duration-300">
              Source Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
