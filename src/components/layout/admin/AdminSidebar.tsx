import { NavLink, Link } from "react-router-dom";
import { FaHome, FaBriefcase, FaUsers, FaCog, FaTasks, FaTimes, FaUserTie } from "react-icons/fa";


interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const links = [
    {name: "Dashboard", path: "/admin/dashboard", icon: <FaHome/>},
    {name: "Jobs", path: "/admin/jobs", icon: <FaBriefcase/>},
    {name: "Users", path: "/admin/users", icon: <FaUsers/>},
    {name: "approvals", path: "/admin/approvals", icon: <FaTasks/>},
    {name: "applicants", path: "/admin/applicants", icon: <FaUserTie/>},
    {name: "Settings", path: "/admin/settings", icon: <FaCog/>},
  ];

  return (
    <>
    {/* OVERLAY (mobile only) */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

    <aside className={`fixed z-50 md:static top-0 left-0   h-full w-64 bg-white shadow-md p-4
            transform transition-transform duration-300
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0`}>

     <div className="flex items-center justify-between mb-6">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Job Portal
          </Link>

          {/* CLOSE BUTTON (mobile only) */}
          <button
            className="md:hidden text-gray-600"
            onClick={onClose}
          >
            <FaTimes />
          </button>
        </div>

        <h2 className="text-sm font-semibold text-gray-500 mb-3">
          Main Menu
        </h2>

        <nav className="flex flex-col space-y-10 items-stretch">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md transition
                ${
                  isActive
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {link.icon}
              {link.name}
            </NavLink>
          ))}
        </nav>
    </aside>
    </>
  );
};

export default Sidebar;