import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    // <section className="bg-gray-50 pt-32 pb-24">
    //   <div className="max-w-7xl mx-auto px-4 text-center">
    //     <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
    //       Find Your Next <span className="text-blue-600">Dream Job</span>
    //     </h1>

    //     <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
    //       Discover thousands of job opportunities from top companies across Africa.
    //     </p>

    //     {/* Search Bar */}
    //     <div className="mt-10 bg-white shadow-lg rounded-xl p-4 flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
    //       <input
    //         type="text"
    //         placeholder="Job title or keyword"
    //         className="flex-1 border rounded-lg px-4 py-3"
    //       />

    //       <input
    //         type="text"
    //         placeholder="Location"
    //         className="flex-1 border rounded-lg px-4 py-3"
    //       />

    //       <Link
    //         to="/jobs"
    //         className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
    //       >
    //         Search Jobs
    //       </Link>
    //     </div>
    //   </div>
    // </section>,

    <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      
    <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Content */}
        <div className="md:w-1/2">
      
         <h1 className="text-4xl md:text-5xl font-bold mb-6">
           Find your dream Job today
         </h1>
         <p className="text-lg md:text-xl mb-8 text-gray-100">
           Explore thousands of job opportunities from top companies. Apply easily and start your career journey now.
         </p>

         {/* Search bar */}
         <form className="w-full flex justify-center">
           <div className="flex flex-col sm:flex-row 
       w-full max-w-xl overflow-hidden rounded-xl bg-white shadow-lg shadow-gray-700">
          <input
          type="text"
          placeholder="Job Title or Keyword"
          className="px-4 py-3 
        flex-1 outline-none text-gray-600
        border-b sm:border-b-0 sm:border-r border-gray-300"/>

          <input
          type="text"
          placeholder="Location"
          className="px-4 py-3 
        flex-1 outline-none text-gray-600
        border-b sm:border-b-0 sm:border-r border-none"/>
        
          <Link
          to="/jobs"
          className=" px-6 !py-4
        !bg-blue-600 !text-white !font-normal whitespace-nowrap
        !hover:bg-blue-700 transition
        w-full sm:w-auto md:w-auto !rounded-none">
            Search Job
          </Link>
          </div>
        </form>
       </div>

       {/*right image section*/}
      <div>
        <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
              alt="Job search illustration"
              className="shadow-lg  rounded-lg"/>
              {/* w-full object-cover h-250 mb-10 */}
      </div>
    </div>
    </section>
  );
};

export default HeroSection;