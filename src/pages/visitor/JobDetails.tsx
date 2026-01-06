import { jobs } from "../../data/jobs";
import { Link, useParams } from "react-router-dom";

const JobDetailsPage = () => {
  const { id } = useParams<{id: string}>();

  const job = jobs.find((job) => job.id === id);

  if (!job) {
    return(
      <div>
        <p>Job not found</p>
      </div>
    );
  }
  return (
    <div className="max-w-4xl mx-auto pt-24 px-4">
      <h1 className="text-3xl font-bold">{job.title}</h1>
      <p className="text-gray-600">{job.company}</p>

      <div className="flex gap-4 mt-4">
        <span>{job.location}</span>
        <span>{job.type}</span>
      </div>

      {job.salary && (
        <p className="mt-4 text-lg font-semibold text-gray-700">
          ₦{job.salary}
        </p>
      )}

       <div className="mt-6">
        <h2 className="text-xl font-semibold">Job Description</h2>
        <p className="mt-2 text-gray-700 leading-relaxed">
          {job.description}
        </p>
      </div>

      {/* APPLY BUTTON */}
      <Link 
      to={`/apply/${job.id}`}
      className="inline-block mt-8 !bg-blue-600 !text-white px-6 py-3 rounded hover:!bg-blue-700 transition">
        Apply Now
      </Link>
    </div>
  )
}

export default JobDetailsPage; 