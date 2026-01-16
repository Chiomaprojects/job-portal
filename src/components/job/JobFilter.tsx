// import { useState } from "react";

import { useState } from "react";

// const JobFilter = ({onFilter}: {onFilter: (data: any) => void }) => {

//   const [search, setSearch] = useState("");
//   const [location, setLocation] = useState("");
//   const [type, setType] = useState("");

//   const handleSubmit = () => {
//     onFilter({ search, location, type });
//   };

//   return(
//     <div className="bg-white rounded-lg p-5 shadow-sm border mt-3 mb-3">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <input
//         type="text"
//         placeholder="Search Job Title..."
//         className="border p-2 outline-none rounded-md"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         />


//         <input
//         type="text"
//         placeholder="Location..."
//         className="border p-2 outline-none rounded-md"
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//         />


//         <select
//         value={type}
//         onChange={(e) => setType(e.target.value)}
//         className="border p-2 rounded-md"
//         >

//         </select>
//       </div>

//       <button 
//       onClick={handleSubmit}
//       className="mt-4 !bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
//       >
//         Apply Filters
//       </button>
//     </div>
//   );
// };

// export default JobFilter;

interface Filters {
  keyword: string;
  category: string;
  location: string;
  type: string;
}

const JobFilter = () => {

  const [filters, setFilters] = useState<Filters>({
    keyword: "",
    category: "",
    location: "",
    type: "",
  });

  return(

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">

      <input
          type="text"
          placeholder="Search job title, keyword, or company"
          value={filters.keyword}
          onChange={(e) =>
            setFilters({ ...filters, keyword: e.target.value })
          }
          className="border p-3 rounded-lg md:col-span-3"
/>

      <select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          className="border p-3 rounded-lg mb-2"
          >
            <option value="">Select Categories</option>
            <option value="Engineering">Engineering</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
            <option value="Finance">Finance</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
      </select>

      <select
      value={filters.location}
      onChange={(e) => setFilters({ ...filters, location: e.target.value })}
      className="border p-3 rounded-lg mb-2">
          <option value="">Select Locations</option>
          <option value="Lagos">Lagos</option>
          <option value="Remote">Remote</option>
      </select>

      <select
        value={filters.type}
        onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        className="border p-3 rounded-lg mb-2"
      >
        <option value="">Select Type</option>
        <option value="Full-time">Full-time</option>
        <option value="Contract">Contract</option>
      </select>
    </div>
  );
};
export default JobFilter;