import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

function Layout() {
  return (
    <div className="flex">
      <Sidebar />

      <div className=" ml-0 lg:ml-64 w-full p-5">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
