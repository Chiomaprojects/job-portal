import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import VisitorSidebar from "./VisitorSidebar";
import { useState } from "react";
import { Menu, X } from "lucide-react";


const VisitorDashboardLayout = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar />

      <div className="pt-20 min-h-screen bg-gray-50">

           {/* Mobile menu button */}
        <div className="md:hidden px-4 mb-4">
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 text-sm font-medium text-gray-700"
          >
            <Menu size={20} />
            Account Menu
          </button>
          </div>

          <div className="flex">
          {/* Desktop Sidebar */}
          <div className="hidden md:block">
            <VisitorSidebar />
          </div>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
      </div>

        {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 md:hidden">
          <div className="absolute left-0 top-0 h-full w-72 bg-white p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-lg">My Account</h2>
              <button onClick={() => setOpen(false)}>
                <X size={22} />
              </button>
            </div>

            <VisitorSidebar onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default VisitorDashboardLayout;