import { NavLink } from "react-router-dom";
import { FaUser, FaBriefcase, FaHeart, FaSignOutAlt, } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/authSlice";


 interface VisitorSidebarProps {
  onNavigate?: () => void;
    }
const VisitorSidebar = ({ onNavigate }: VisitorSidebarProps)  => {

  const dispatch = useDispatch();

  return (
    <aside className="w-64 bg-white border-r p-6 hidden md:block ">
      <h2 className="text-xl font-bold mb-8">My Account</h2>

      <nav className="flex flex-col space-y-7">

        <NavLink to="/profile" 
        onClick={onNavigate}
         className={({isActive}) => `flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 transition-all duration-200
        ${ isActive ? "text-blue-600 font-semibold border-l-4 border-blue-600 bg-blue-50" : "text-gray-700"}`}>
          <span><FaUser className="inline mr-2" /></span>
          <span>Profile</span>
         </NavLink>

        <NavLink to="/profile/applications" 
        onClick={onNavigate}
         className={({isActive}) => `flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 transition-all duration-200
        ${ isActive ? "text-blue-600 font-semibold border-l-4 border-blue-600 bg-blue-50" : "text-gray-700"}`}>
          <span><FaBriefcase className="inline mr-2" /></span>
          <span>Applications</span>
        </NavLink>

        <NavLink to="/profile/saved"
        onClick={onNavigate}
         className={({isActive}) => `flex items-center space-x-3 p-2 rounded-md hover:bg-gray-100 transition-all duration-200
        ${ isActive ? "text-blue-600 font-semibold border-l-4 border-blue-600 bg-blue-50" : "text-gray-700"}`}>
          <span><FaHeart className="inline mr-2" /></span>
          <span>Saved Jobs</span>
        </NavLink>

        <button
          onClick={() => dispatch(logout())}
          className="text-left text-red-600 mt-50"
        >
          <FaSignOutAlt className="inline mr-2" /> Logout
        </button>
      </nav>
    </aside>
  );
};

export default VisitorSidebar;