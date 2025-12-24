import Sidebar from "./AdminSidebar";
import Topbar from "./adminTopbar";
import { Outlet } from "react-router-dom";


export default function AdminLayout() {
   return(
    <div className="flex min-h-screen w-full bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-x-hidden">
        <Topbar />

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
   );
};