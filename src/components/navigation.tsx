import React from "react";
import { FiHome } from "react-icons/fi";
import { IoCubeOutline } from "react-icons/io5";
import { IoMdCheckboxOutline } from "react-icons/io";
import { AiOutlinePicture } from "react-icons/ai";
import { FaRegFileAlt } from "react-icons/fa";
import { FaRegFile, FaRegCalendar } from "react-icons/fa";

const navigationItems = [
  { href: "#", label: "Home", icon: FiHome, active: true },
  { href: "#", label: "Interface", icon: IoCubeOutline },
  { href: "#", label: "Components", icon: FaRegCalendar },
  { href: "#", label: "Pages", icon: FaRegFile },
  { href: "#", label: "Forms", icon: IoMdCheckboxOutline },
  { href: "#", label: "Gallery", icon: AiOutlinePicture },
  { href: "#", label: "Documentation", icon: FaRegFileAlt },
];

const Navigation: React.FC = () => {
  return (
    <nav className="hidden md:flex space-x-4 lg:space-x-8 px-8 lg:px-16 pt-4 border-b border-gray-200">
      {navigationItems.map(({ href, label, icon: Icon, active }) => (
        <a
          key={label}
          href={href}
          className={`flex items-center space-x-1 font-medium pb-2 ${
            active
              ? "text-blue-500 border-b-2 border-blue-500 pb-3"
              : "text-gray-400 hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
          }`}
        >
          <Icon size={16}/>
          <span>{label}</span>
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
