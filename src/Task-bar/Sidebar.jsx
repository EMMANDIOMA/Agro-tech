import { NavLink } from "react-router";
import { UserButton } from "@clerk/react";

import { FaHome, FaComments, FaBell, FaCog } from "react-icons/fa";

function Sidebar() {
  return (
    <div
      className="fixed bottom-0 left-0 w-full h-16 
                    lg:top-0 lg:left-0 lg:bottom-auto lg:w-64 lg:h-screen
                    bg-gray-900 text-white
                    flex flex-row lg:flex-col
                    items-center gap-8 lg:items-stretch
                    justify-around lg:justify-start
                    p-3 lg:p-5
                    z-50"
    >
      <NavLink to="/" className="flex items-center gap-3 hover:text-blue-400">
        <FaHome size={22} />
        <span className="hidden lg:block">Home</span>
      </NavLink>

      <NavLink to="/Ai" className="flex items-center gap-3 hover:text-blue-400">
        <FaComments size={22} />
        <span className="hidden lg:block">Chat</span>
      </NavLink>

      <NavLink
        to="/notifications"
        className="flex items-center gap-3 hover:text-blue-400"
      >
        <FaBell size={22} />
        <span className="hidden lg:block">Notifications</span>
      </NavLink>
      <NavLink
        to="/Profile"
        className="flex items-center gap-3 hover:text-blue-400"
      >
        <FaBell size={22} />
        <span className="hidden lg:block">Profile</span>
      </NavLink>

      <NavLink
        to="/Settings"
        className="flex items-center gap-3 hover:text-blue-400"
      >
        <FaCog size={22} />
        <span className="hidden lg:block">Settings</span>
      </NavLink>
      <div className="mt-auto">
        <UserButton />
      </div>
    </div>
  );
}

export default Sidebar;
