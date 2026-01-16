// import { Link } from "react-router-dom";
// import { SoftwareEngineer, ShareMarket, RestaurantService } from "../../assets/images";




// const Home = () => {

//   const jobs = [
//   {
//     id: 1,
//     title: "Front End Developer",
//     location: "Lagos, Nigeria",
//     image: SoftwareEngineer,
//     description: "We are looking for Enrollment Advisors who can take 30-35 appointments per week."
//   },
//   {
//     id: 2,
//     title: "Share Marketer",
//     location: "Abuja, Nigeria",
//     image: ShareMarket,
//     description: "Join our backend engineering team to build scalable services."
//   },
//   {
//     id: 3,
//     title: "Restaurant sales",
//     location: "Abuja, Nigeria",
//     image: RestaurantService,
//     description: "Join our backend engineering team to build scalable services."
//   },
//   {
//     id: 4,
//     title: "Backend developer",
//     location: "Abuja, Nigeria",
//     image: SoftwareEngineer,
//     description: "Join our backend engineering team to build scalable services."
//   },
//   {
//     id: 5,
//     title: "Share Marketer",
//     location: "Abuja, Nigeria",
//     image: ShareMarket,
//     description: "Join our backend engineering team to build scalable services."
//   },
//   {
//     id: 6,
//     title: "Restaurant sales",
//     location: "Abuja, Nigeria",
//     image: RestaurantService,
//     description: "Join our backend engineering team to build scalable services."
//   },
// ];
// return (
//   <div className="w-screen min-h-screen bg-gray-50">

//     {/* Hero Section */}
//     <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      
//     <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-10">

//        {/* Left Content */}
//        <div className="md:w-1/2">
        
//         <h1 className="text-4xl md:text-5xl font-bold mb-6">
//           Find your dream Job today
//         </h1>
//         <p className="text-lg md:text-xl mb-8 text-gray-100">
//           Explore thousands of job opportunities from top companies. Apply easily and start your career journey now.
//         </p>

//         {/* Search bar */}
//         <form className="w-full flex justify-center">
//           <div className="flex flex-col sm:flex-row 
//       w-full max-w-xl overflow-hidden rounded-xl bg-white shadow-lg shadow-gray-700">
//          <input
//           type="text"
//           placeholder="Job Title or Keyword"
//           className="px-4 py-3 
//         flex-1 outline-none text-gray-600
//         border-b sm:border-b-0 sm:border-r border-gray-300"/>

//           <input
//           type="text"
//           placeholder="Location"
//           className="px-4 py-3 
//         flex-1 outline-none text-gray-600
//         border-b sm:border-b-0 sm:border-r border-none"/>
//           <button
//           type="submit"
//           className=" px-6 !py-1
//         !bg-blue-600 !text-white !font-normal whitespace-nowrap
//         !hover:bg-blue-700 transition
//         w-full sm:w-auto md:w-auto !rounded-none">
//             Search Job
//           </button>
//           </div>
//         </form>
//        </div>

//        {/*right image section*/}
//       <div>
//         <img
//         src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
//               alt="Job search illustration"
//               className="shadow-lg  rounded-lg"/>
//               {/* w-full object-cover h-250 mb-10 */}
//       </div>
//     </div>
//     </section>

//     {/* Featured jobs section*/}
//     <section className="max-w-7xl mx-auto px-16 py-6 mt-30">
//       <h2 className="font-bold text-3xl text-gray-800 mb-8 text-center">Featured Jobs</h2>
    
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {
//           jobs.map((job) => (
//             <div key={job.id} className="bg-white shadow-md rounded-xl p-5 border border-gray-100 hover:shadow-xl transition hover:bg-blue-200">
//               <img
//               src={job.image}
//               alt={job.title}
//               className="w-full object-cover h-40 rounded-lg mb-4"/>
//                <h3 className="text-lg font-semibold mb-2">{job.title}</h3>

//               <p className="text-gray-600 mb-3">{job.description}</p>

//               <p className="text-gray-500 text-sm mb-4">📍 {job.location}</p>

//               <Link to={`/jobs/${job.id}`} className="text-blue-600 font-medium hover:text-purple-700 transition">
//                 Apply now →
//               </Link>
//             </div>
//           ))
//         }
//       </div>
//       </section>
//   </div>
  
// );
// };

// export default Home;


import HeroSection from "../../components/home/HeroSection";
import TrustedCompanies from "../../components/home/TrustedCompanies";
import JobCategories from "../../components/home/JobCategories";
import FeaturedJobs from "../../components/home/FeaturedJobs";
import HowItWorks from "../../components/home/HowItWorks";
import CallToAction from "../../components/home/CallToAction";

const Home = () => {
  return (
    <>
      <HeroSection />
      <TrustedCompanies />
      <JobCategories />
      <FeaturedJobs />
      <HowItWorks />
      <CallToAction />
    </>
  );
};

export default Home;