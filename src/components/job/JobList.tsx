import JobCard from "./JobCard";

const JobList = ({ jobs }: { jobs: any[] }) => {
  if (jobs.length === 0) {
   return <p>No jobs found</p>
  }
  return(
    <div>
      {jobs.map((job) => (
        <JobCard key={job.id} {...job}/>
      ))}
    </div>
  );
};

export default JobList;