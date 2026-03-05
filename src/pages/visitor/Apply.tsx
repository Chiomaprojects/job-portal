import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store/store";
import { applyForJob } from "../../store/applicationSlice";
import { useState } from "react";

const Apply = () => {
  const { jobId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.auth.user);
  const job = useSelector((state: RootState) =>
    state.jobs.jobs.find((job) => job.id === jobId)
  );

  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState("");

  if (!job) return <p className="p-6">Job not found</p>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
 
    dispatch(
      applyForJob({
        id: crypto.randomUUID(),
        jobId: job.id,
        applicantName: user?.name || "Anonymous",
        applicantEmail: user?.email || "",
        resume,
        coverLetter,
        appliedAt: new Date().toISOString(),
        status: "accepted",
      })
    );

    navigate("/profile");
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-2">
        Apply for {job.title}
      </h1>
      <p className="text-gray-600 mb-6">{job.company}</p>

      <form onSubmit={handleSubmit} className="space-y-6">

          <input
          type="text"
          placeholder="Full name"
           className="w-full border p-3 rounded"
           required/>

          <input
          type="email"
          placeholder="Email address"
           className="w-full border p-3 rounded"
           required/>

          <input
          type="tel"
          placeholder="Mobile Number"
           className="w-full border p-3 rounded"
           required/>

          <textarea
          placeholder="Why should we hire you"
          rows={5}
           className="w-full border p-3 rounded"/>

          

        <div>
          <label className="block mb-1 font-medium">Resume (file name)</label>
          <input
            type="text"
            placeholder="resume.pdf"
            className="w-full border px-4 py-2 rounded"
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Cover Letter</label>
          <textarea
            className="w-full border px-4 py-2 rounded min-h-[120px]"
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Apply;




// import { useParams } from "react-router-dom";
// import { jobs } from "../../data/jobs";

// const Apply = () => {
//   const {jobId} = useParams<{jobId: string}>();
//   const job = jobs.find((job) => job.id === jobId)

//   if (!job) {
//     return (
//       <div>
//         <p>Job not found</p>
//       </div>
//     );
//   }
//   return (
//     <div className="mx-auto mt-24 px-4 max-w-2xl">
//       <h1 className="text-2xl font-bold mb-2">Apply for {job.title}</h1>
//       <p className="text-gray-600 mb-6">{job.company}</p>

//       <form className="space-y-4">
//         <input
//          type="text"
//          placeholder="Surname"
//           className="w-full border p-3 rounded"/>

//          <input
//          type="text"
//          placeholder="Name"
//           className="w-full border p-3 rounded"/>

//          <input
//          type="email"
//          placeholder="Email address"
//           className="w-full border p-3 rounded"/>

//          <input
//          type="tel"
//          placeholder="Mobile Number"
//           className="w-full border p-3 rounded"/>

//          <textarea
//          placeholder="Why should we hire you"
//          rows={5}
//           className="w-full border p-3 rounded"/>

//          <button
//          type="submit"
//          className="w-full !bg-blue-600 text-white py-3 rounded hover:!bg-blue-700">
//           Submit Application
//           </button>

//       </form>
//     </div>
//   )
// }

// export default Apply;