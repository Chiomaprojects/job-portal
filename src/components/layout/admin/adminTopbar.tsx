import { FaBars } from "react-icons/fa";


interface TopbarProps {
  onMenuClick: () => void;
}

const Topbar = ({ onMenuClick }: TopbarProps) => {

  return (
    <header className="w-full bg-white shadow">
      
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
      
      <div className="flex items-center gap-3">

         <button
          onClick={onMenuClick}
          className="md:hidden text-gray-600"
        >
          <FaBars />
        </button>

      <h3 className="text-lg font-semibold text-gray-800">Admin Dashboard</h3>
      </div>

       <div className="flex items-center gap-3 sm:gap-4">
          {/* SEARCH (hidden on very small screens) */}
          <input
            type="text"
            placeholder="Search..."
            className="hidden sm:block px-3 py-1.5 border rounded-md outline-none
                       focus:ring-1 focus:ring-blue-500 text-sm"
          />

      <div className="w-9 h-9 flex items-center justify-center bg-gray-300 rounded-full text-sm font-medium">
        AD
      </div>
      </div>
      </div>
    </header>
  );
 };

 export default Topbar;