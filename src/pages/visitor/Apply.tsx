import { useParams } from "react-router-dom";
import { jobs } from "../../data/jobs";

const Apply = () => {
  const {jobId} = useParams<{jobId: string}>();
  const job = jobs.find((job) => job.id === jobId)

  if (!job) {
    return (
      <div>
        <p>Job not found</p>
      </div>
    );
  }
  return (
    <div className="mx-auto mt-24 px-4 max-w-2xl">
      <h1 className="text-2xl font-bold mb-2">Apply for {job.title}</h1>
      <p className="text-gray-600 mb-6">{job.company}</p>

      <form className="space-y-4">
        <input
         type="text"
         placeholder="Surname"
          className="w-full border p-3 rounded"/>

         <input
         type="text"
         placeholder="Name"
          className="w-full border p-3 rounded"/>

         <input
         type="email"
         placeholder="Email address"
          className="w-full border p-3 rounded"/>

         <input
         type="tel"
         placeholder="Mobile Number"
          className="w-full border p-3 rounded"/>

         <textarea
         placeholder="Why should we hire you"
         rows={5}
          className="w-full border p-3 rounded"/>

         <button
         type="submit"
         className="w-full !bg-blue-600 text-white py-3 rounded hover:!bg-blue-700">
          Submit Application
          </button>

      </form>
    </div>
  )
}

export default Apply;