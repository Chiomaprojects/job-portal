import { useState } from "react";

const JobFilter = ({onFilter}: {onFilter: (data: any) => void }) => {

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = () => {
    onFilter({ search, location, type });
  };

  return(
    <div className="bg-white rounded-lg p-5 shadow-sm border mt-3 mb-3">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
        type="text"
        placeholder="Search Job Title..."
        className="border p-2 outline-none rounded-md"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />


        <input
        type="text"
        placeholder="Location..."
        className="border p-2 outline-none rounded-md"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        />


        <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border p-2 rounded-md"
        >

        </select>
      </div>

      <button 
      onClick={handleSubmit}
      className="mt-4 !bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default JobFilter;