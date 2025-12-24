import { NavLink } from "react-router-dom";
import { FaHome, FaBriefcase, FaUsers, FaCog, FaTasks } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const links = [
    {name: "Dashboard", path: "/admin/dashboard", icon: <FaHome/>},
    {name: "Jobs", path: "/admin/jobs", icon: <FaBriefcase/>},
    {name: "Users", path: "/admin/users", icon: <FaUsers/>},
    {name: "approvals", path: "/admin/approvals", icon: <FaTasks/>},
    {name: "Settings", path: "/admin/settings", icon: <FaCog/>},
  ];

  return (
    <aside className="w-64 shrink-0 shadow-md min-h-screen p-4 bg-white overflow-y-auto">
      <Link to= "/" className="text-2xl font-bold text-blue-600 transition duration-500">
      <span className="text-2xl font-bold text-blue-600">Job Portal</span>
      </Link>
      <div className="mt-8"></div>
      <h2 className="text-lg font-bold mb-2">Main Menu</h2>

      <nav className="flex flex-col space-y-5">
        {links.map((link) => (
          <NavLink
        key={link.path}
        to={link.path}
        className={({isActive}) => `flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 transition-all duration-200
        ${ isActive ? "text-blue-600 font-semibold border-l-4 border-blue-600 bg-blue-50" : "text-gray-700"}`}>

          <span>{link.icon}</span> 
          <span>{link.name}</span>

        </NavLink>
        ))}
      </nav>
    </aside>

  );
};

export default Sidebar;