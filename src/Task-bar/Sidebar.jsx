import { NavLink } from "react-router";
import { FaHome, FaComments, FaBell, FaCog } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="fixed lg:left-0 top-0 h-screen w-20 lg:w-64 bg-gray-900 text-white flex flex-col gap-8 p-5">
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
    </div>
  );
}

export default Sidebar;
