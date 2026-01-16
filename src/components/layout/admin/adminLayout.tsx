import Sidebar from "./AdminSidebar";
import Topbar from "./adminTopbar";
import { Outlet } from "react-router-dom";
import { useState } from "react";


export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

   return(
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar 
      isOpen={sidebarOpen}
      onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col overflow-x-hidden">
        <Topbar 
        onMenuClick={() => setSidebarOpen(true)}
        />

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
   );
};