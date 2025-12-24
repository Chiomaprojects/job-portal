import { useState } from "react";
import JobFilter from "../../components/job/JobFilter";
import JobList from "../../components/job/JobList";

const Jobs = () => {
  const dummyJobs = [
  { id: "1", title: "Frontend Developer", company: "TechCorp", location: "Lagos", type: "Full-time", salary: "250,000" },
  { id: "2", title: "Backend Engineer", company: "SoftHub", location: "Abuja", type: "Remote" },
  { id: "3", title: "Product Designer", company: "InnovateX", location: "Port Harcourt", type: "Contract" },
  { id: "4", title: "Frontend Developer", company: "Techeverywhere", location: "Lagos", type: "Full-time", salary: "250,000" },
  { id: "5", title: "Fullstack Developer", company: "Transcorp hilton", location: "Lagos", type: "Full-time", salary: "250,000" },
  ];

  const [jobs, setJobs] = useState(dummyJobs);

  const handleFilter = (filters: any) => {
    console.log("Filters applied:", filters);
  };


  return (
    <div>
      <h1>Find your next job</h1>

      <JobFilter onFilter={handleFilter} />

      <JobList jobs={jobs} />      
      </div>
  )
}

export default Jobs;