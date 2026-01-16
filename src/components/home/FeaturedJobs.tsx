import { Link } from "react-router-dom";
import { SoftwareEngineer, ShareMarket, RestaurantService } from "../../assets/images";

const FeaturedJobs = () => {

const jobs = [
  {
    id: 1,
    title: "Front End Developer",
    location: "Lagos, Nigeria",
    image: SoftwareEngineer,
    description: "We are looking for Enrollment Advisors who can take 30-35 appointments per week."
  },
  {
    id: 2,
    title: "Share Marketer",
    location: "Abuja, Nigeria",
    image: ShareMarket,
    description: "Join our backend engineering team to build scalable services."
  },
  {
    id: 3,
    title: "Restaurant sales",
    location: "Abuja, Nigeria",
    image: RestaurantService,
    description: "Join our backend engineering team to build scalable services."
  },
  {
    id: 4,
    title: "Backend developer",
    location: "Abuja, Nigeria",
    image: SoftwareEngineer,
    description: "Join our backend engineering team to build scalable services."
  },
  {
    id: 5,
    title: "Share Marketer",
    location: "Abuja, Nigeria",
    image: ShareMarket,
    description: "Join our backend engineering team to build scalable services."
  },
  {
    id: 6,
    title: "Restaurant sales",
    location: "Abuja, Nigeria",
    image: RestaurantService,
    description: "Join our backend engineering team to build scalable services."
  },
];

  return (
    // <section className="py-20 bg-white">
    //   <div className="max-w-7xl mx-auto px-4">
    //     <h2 className="text-2xl font-bold mb-8">Featured Jobs</h2>

    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //       {jobs.slice(0, 4).map((job) => (
    //         <JobCard key={job.id} {...job} />
    //       ))}
    //     </div>
    //   </div>
    // </section>

    <section className="max-w-7xl mx-auto px-16 py-6 mt-30">
       <h2 className="font-bold text-3xl text-gray-800 mb-8 text-center">Featured Jobs</h2>
    
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">         {
          jobs.map((job) => (
            <div key={job.id} className="bg-white shadow-md rounded-xl p-5 border border-gray-100 hover:shadow-xl transition hover:bg-blue-200">
              <img
              src={job.image}
              alt={job.title}
              className="w-full object-cover h-40 rounded-lg mb-4"/>
               <h3 className="text-lg font-semibold mb-2">{job.title}</h3>

              <p className="text-gray-600 mb-3">{job.description}</p>

              <p className="text-gray-500 text-sm mb-4">📍 {job.location}</p>

              <Link to={`/jobs/${job.id}`} className="text-blue-600 font-medium hover:text-purple-700 transition">
                Apply now →
              </Link>
            </div>
          ))
        }
      </div>
      </section>
  );
};

export default FeaturedJobs;