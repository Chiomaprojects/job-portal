
import type { RootState, AppDispatch } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import JobCard from "../../components/job/JobCard";





const Jobs = () => {
 const { jobs } = useSelector((state: RootState) => state.jobs);

 const dispatch = useDispatch<AppDispatch>();

return(
  <div className="max-w-7xl mx-auto px-6 py-8">
    <h1 className="text-2xl font-bold mb-6 text-center text-gray-500">Available Jobs</h1>

     {jobs.length === 0 ? (
        <p>No jobs available</p>
      ) : (
        jobs.map(job => (
          <JobCard key={job.id} {...job} />
        ))
      )}
  </div>
);

};

export default Jobs;







// // import { useState } from "react";
// import JobFilter from "../../components/job/JobFilter";
// import JobList from "../../components/job/JobList";
// import { jobs as allJobs } from "../../data/jobs";



// const Jobs = () => {
//   // const dummyJobs = [
//   // { id: "1", title: "Frontend Developer", company: "TechCorp", location: "Lagos", type: "Full-time", salary: "250,000" },
//   // { id: "2", title: "Backend Engineer", company: "SoftHub", location: "Abuja", type: "Remote" },
//   // { id: "3", title: "Product Designer", company: "InnovateX", location: "Port Harcourt", type: "Contract" },
//   // { id: "4", title: "Frontend Developer", company: "Techeverywhere", location: "Lagos", type: "Full-time", salary: "250,000" },
//   // { id: "5", title: "Fullstack Developer", company: "Transcorp hilton", location: "Lagos", type: "Full-time", salary: "250,000" },
//   // ];

//   // const dumJobs = [
//   // { id: 1.1,
//   //   title: "Front End Developer",
//   //   location: "Lagos, Nigeria",
//   //   company: "Sorngineer",
//   //   description: "We are looking for Enrollment Advisors who can take 30-35 appointments per week." },
//   // { id: 2.1,
//   //   title: "Share Marketer",
//   //   location: "Abuja, Nigeria",
//   //   company: "ShareMarket",
//   //   description: "Join our backend engineering team to build scalable services." },
//   // { id: 3.1,
//   //   title: "Restaurant sales",
//   //   location: "Abuja, Nigeria",
//   //   company: "Restaur9ja",
//   //   description: "Join our backend engineering team to build scalable services." },
//   // { id: 4.1,
//   //   title: "Backend developer",
//   //   location: "Abuja, Nigeria",
//   //   company: "SoftLare",
//   //   description: "Join our backend engineering team to build scalable services." },
//   // { id: 5.1,
//   //   title: "Share Marketer",
//   //   location: "Abuja, Nigeria",
//   //   company: "Shareform",
//   //   description: "Join our backend engineering team to build scalable services." },
//   // { id: 6.1,
//   //   title: "Restaurant sales",
//   //   location: "Abuja, Nigeria",
//   //   company: "Fervice",
//   //   description: "Join our backend engineering team to build scalable services." },
//   // ];

//   const [jobs, setJobs] = useState(allJobs);

  


//   return (
//     <div className="mt-20">
//       <h1 className="text-center mb-3">Find your next job</h1>

//       <JobFilter  />

//       <JobList jobs={jobs}/>      
//       </div>
//   )
// }

// export default Jobs;