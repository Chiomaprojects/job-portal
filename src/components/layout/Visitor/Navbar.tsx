import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();


  const isAdmin = location.pathname.startsWith("/admin");

  const visitorLinks = [
    {name: "Jobs", path: "/jobs"},
    {name: "Companies", path: "/companies"},
    {name: "About", path: "/about"},
    {name: "Contact", path: "/contact"},
  ];
  return (
    <nav className="w-full  bg-white shadow-sm border-b border-none fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <Link to= "/" className="text-2xl font-bold text-blue-600">
        Job Portal
        </Link>
                  {/* ADMIN LABEL */}
        {isAdmin && (
          <span className="hidden md:block text-gray-700 font-medium">
            Admin Dashboard
          </span>
        )}
                 {/* DESKTOP MENU */}
        {!isAdmin && (
          <div className="hidden md:flex items-center gap-8">
            {visitorLinks.map((link) => (
              <NavLink
              key={link.name}
              to={link.path}
              className={({isActive}) =>  `text-gray-700 hover:text-blue-600 transition ${
                    isActive ? "text-blue-600 font-semibold" : ""
                  }`
                  }
                  >
                    {link.name}
                </NavLink>
            ))}
                       {/* Auth Buttons */}
            <div className="flex items-center gap-4">
              <button className="!border-blue-600 !bg-white !outline-none !rounded-none !py-2 !px-5 mr-0">
                <Link
              to= "/login"
              className="text-gray-700 hover:text-blue-600 transition"
             >
                Login
              </Link>
                </button>
                <button className="!bg-blue-600 !outline-none !rounded-none !py-2 !px-3 !text-white ml-0">
                   <Link
                   to= "/signup"
                   className="!text-white hover:text-blue-600"
              >
                Sign Up
              </Link>
                </button>
            </div>
          </div>
        )}
                    {/* MOBILE MENU BUTTON */}
        <button
        className="md:hidden text-gray-700"
        onClick={() => setMobileOpen(!mobileOpen)}>
             {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

              {/* MOBILE MENU PANEL */}
        {!isAdmin && mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <div className="flex flex-col px-6 py-4 gap-4">

            {visitorLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `text-gray-700 py-2 border-b border-gray-100 hover:text-blue-600 ${
                    isActive ? "text-blue-600 font-semibold" : ""
                  }`
                }
              >
                {link.name}   
                </NavLink>
            ))}

            {/* Auth Mobile */}
            <div className="flex flex-col gap-3 mt-2">
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="text-gray-700 hover:text-blue-600"
              >
                Login
              </Link>

              <Link
                to="/register"    
                onClick={() => setMobileOpen(false)}
                className="bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;