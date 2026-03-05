import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { useState } from "react";




const Applicants = () => {
  const jobs = useSelector((state: RootState) => state.jobs.jobs);
  const applications = useSelector((state: RootState) => state.applications.applications);


  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);

  const selectedJob = jobs.find((job) => job.id === selectedJobId)
  const jobApplications = applications.filter(
    (app) => app.jobId === selectedJobId);


  return(
    <div className="container mx-auto px-4">
       <h1 className="text-2xl font-bold mb-6">Applicants</h1>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       <div className="bg-white rounded-xl shadow p-4">
          <h2 className="font-semibold mb-4">Jobs</h2>

          {jobs.length === 0 && (
            <p className="text-sm text-gray-500">No jobs available</p>
          )}

          <ul className="space-y-3">
            {jobs.map((job) => (
                <li 
                key={job.id}
                onClick={() => setSelectedJobId(job.id)}
                className={`cursor-pointer p-3 rounded border hover:bg-gray-50 ${
                  selectedJobId === job.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200"
                }`}
                >
                <p className="font-medium">{job.title}</p>
                <p className="text-sm text-gray-500">{job.company}</p>
              </li>
              ))}
          </ul>
       </div>

              {/* APPLICANTS */}
              <div className="md:col-span-2 bg-white rounded-xl shadow p-4">
                  {!selectedJob && (
            <p className="text-gray-500">
              Select a job to view applicants
            </p>
             )}
             {selectedJob && (
            <>
              <h2 className="font-semibold text-lg mb-4">
                Applicants for {selectedJob.title}
              </h2>

              {jobApplications.length === 0 ? (
                <p className="text-sm text-gray-500">
                  No applications yet.
                </p>
              ) : (
                <div className="space-y-4">
                  {jobApplications.map((app) => (
                    <div
                      key={app.id}
                      className="border rounded-lg p-4"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">
                            {app.applicantName}
                          </p>
                          <p className="text-sm text-gray-600">
                            {app.applicantEmail}
                          </p>
                        </div>

                        <span className="text-xs text-gray-400">
                          {new Date(app.appliedAt).toLocaleDateString()}
                        </span>
                      </div>

                      <div className="mt-3">
                        <p className="text-sm font-medium">Resume</p>
                        <p className="text-sm text-blue-600">
                          {app.resume}
                        </p>
                      </div>

                      <div className="mt-3">
                        <p className="text-sm font-medium">
                          Cover Letter
                        </p>
                        <p className="text-sm text-gray-700">
                          {app.coverLetter}
                        </p>
                      </div>

                      {/* FUTURE ACTIONS */}
                      <div className="mt-4 flex gap-3">
                        <button className="px-4 py-1 text-sm rounded bg-green-600 text-white">
                          Approve
                        </button>
                        <button className="px-4 py-1 text-sm rounded bg-red-600 text-white">
                          Reject
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
             )}
       </div>
     </div>
    </div>
  )
};

export default Applicants;









// // const Applicants = () => {
// //   const applicants = [
// //     {
// //       id: "1",
// //       name: "Blessing Okorie",
// //       email: "blessing@email.com",
// //       jobTitle: "Frontend Developer",
// //       appliedDate: "2024-01-20",
// //       status: "Pending",
// //     },
// //     {
// //       id: "2",
// //       name: "Michael Ade",
// //       email: "michael@email.com",
// //       jobTitle: "Data Analyst",
// //       appliedDate: "2024-01-21",
// //       status: "Shortlisted",
// //     },
// //     {
// //       id: "3",
// //       name: "Ijeoma Tasie",
// //       email: "blessing@email.com",
// //       jobTitle: "Frontend Developer",
// //       appliedDate: "2024-01-20",
// //       status: "Pending",
// //     },
// //     {
// //       id: "4",
// //       name: "Okonta Michael",
// //       email: "michael@email.com",
// //       jobTitle: "Data Analyst",
// //       appliedDate: "2024-01-21",
// //       status: "Shortlisted",
// //     },
// //     {
// //       id: "5",
// //       name: "Favour Okonkwo",
// //       email: "blessing@email.com",
// //       jobTitle: "Frontend Developer",
// //       appliedDate: "2024-01-20",
// //       status: "Pending",
// //     },
// //     {
// //       id: "6",
// //       name: "Hillary Ike",
// //       email: "michael@email.com",
// //       jobTitle: "Data Analyst",
// //       appliedDate: "2024-01-21",
// //       status: "Shortlisted",
// //     },
// //   ];

// //   return (
// //     <div className="space-y-6">
// //       {/* PAGE HEADER */}
// //       <div>
// //         <h1 className="text-2xl font-bold text-gray-800">
// //           Job Applicants
// //         </h1>
// //         <p className="text-gray-500 mt-1">
// //           View and manage job applications
// //         </p>
// //       </div>

// //       {/* DESKTOP TABLE */}
// //       <div className="hidden md:block bg-white rounded-lg shadow">
// //         <table className="w-full text-sm">
// //           <thead className="bg-gray-50 text-gray-600">
// //             <tr>
// //               <th className="text-left px-6 py-3">Applicant</th>
// //               <th className="text-left px-6 py-3">Email</th>
// //               <th className="text-left px-6 py-3">Job Title</th>
// //               <th className="text-left px-6 py-3">Applied Date</th>
// //               <th className="text-left px-6 py-3">Status</th>
// //               <th className="text-left px-6 py-3">Action</th>
// //             </tr>
// //           </thead>

// //           <tbody className="divide-y">
// //             {applicants.map((applicant) => (
// //               <tr key={applicant.id} className="hover:bg-gray-50">
// //                 <td className="px-6 py-4 font-medium text-gray-800">
// //                   {applicant.name}
// //                 </td>
// //                 <td className="px-6 py-4 text-gray-600">
// //                   {applicant.email}
// //                 </td>
// //                 <td className="px-6 py-4 text-gray-600">
// //                   {applicant.jobTitle}
// //                 </td>
// //                 <td className="px-6 py-4 text-gray-500">
// //                   {applicant.appliedDate}
// //                 </td>
// //                 <td className="px-6 py-4">
// //                   <ApplicationStatus status={applicant.status} />
// //                 </td>
// //                 <td className="px-6 py-4 space-x-3">
// //                   <button className="text-blue-600 hover:underline">
// //                     View CV
// //                   </button>
// //                   <button className="text-gray-600 hover:underline">
// //                     Update Status
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>

// //       {/* MOBILE CARDS */}
// //       <div className="md:hidden space-y-4">
// //         {applicants.map((applicant) => (
// //           <div
// //             key={applicant.id}
// //             className="bg-white rounded-lg shadow p-4 space-y-2"
// //           >
// //             <h3 className="font-semibold text-gray-800">
// //               {applicant.name}
// //             </h3>
// //             <p className="text-sm text-gray-600">
// //               {applicant.email}
// //             </p>

// //             <p className="text-sm text-gray-600">
// //               Job: {applicant.jobTitle}
// //             </p>

// //             <div className="flex justify-between items-center text-sm">
// //               <span className="text-gray-500">
// //                 {applicant.appliedDate}
// //               </span>
// //               <ApplicationStatus status={applicant.status} />
// //             </div>

// //             <div className="flex gap-4 pt-2 text-sm">
// //               <button className="text-blue-600">View CV</button>
// //               <button className="text-gray-600">Update Status</button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // const ApplicationStatus = ({ status }: { status: string }) => {
// //   const base = "px-3 py-1 rounded-full text-xs font-medium";

// //   switch (status) {
// //     case "Pending":
// //       return (
// //         <span className={`${base} bg-yellow-100 text-yellow-700`}>
// //           Pending
// //         </span>
// //       );
// //     case "Shortlisted":
// //       return (
// //         <span className={`${base} bg-green-100 text-green-700`}>
// //           Shortlisted
// //         </span>
// //       );
// //     case "Rejected":
// //       return (
// //         <span className={`${base} bg-red-100 text-red-700`}>
// //           Rejected
// //         </span>
// //       );
// //     default:
// //       return (
// //         <span className={`${base} bg-gray-100 text-gray-600`}>
// //           Reviewed
// //         </span>
// //       );
// //   }
// // };

// // export default Applicants;


// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import type { RootState } from "../../store/store";
// import type { Application } from "../../types/application";   
// import { getApplicantsByJobId } from "../../api/applicantsApi";
// import { getJobById } from "../../api/jobsApi";
// import type { Job } from "../../types/job.types";

// const Applicants = () => {
//   const { jobId } = useParams<{ jobId: string }>();
//   const [applications, setApplications] = useState<Application[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null); 
//   const [job, setJob] = useState<Job | null>(null);


// useEffect(() => {
//   if (!jobId) return;

//   getJobById(jobId).then(setJob);
// }, [jobId]);

//   const jobs = useSelector((state: RootState) => state.jobs.jobs);
//   const jobDetails  = jobs.find(j => j.id === jobId);   
//   useEffect(() => {
//     const fetchApplications = async () => {
//       try {   
//         if (jobId) {
//           const data = await getApplicantsByJobId(jobId);
//           setApplications(data);
//         }     
//       } catch (err) {
//         setError("Failed to load applications.");
//       } finally {
//         setLoading(false);
//       }   
//     };

//     fetchApplications();
//   }, [jobId]);

//   if (!jobDetails) return <p>Job not found.</p>;   
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Applicants for {jobDetails.title}</h1>

//       {loading && <p>Loading applications...</p>}
//       {error && <p className="text-red-600">{error}</p>}    
//       {!loading && !error && applications.length === 0 && (
//         <p>No applications found for this job.</p>
//       )}    
//       {!loading && !error && applications.length > 0 && (
//         <div className="space-y-4">
//           {applications.map((app) => (    
//             <div key={app.id} className="border p-4 rounded-lg">
//               <h2 className="text-lg font-semibold">{app.applicantName}</h2>
//               <p className="text-sm text-gray-600">{app.applicantEmail}</p>   
//               <p className="mt-2">{app.coverLetter}</p>
//               <p className="mt-2">{app.resume}</p>
//               <p className="mt-2 text-xs text-gray-400">
//                 Applied on: {new Date(app.appliedAt).toLocaleDateString()}      
//               </p>
//               <p className="text-sm">Status: {app.status}</p>
//             </div>
//           ))}   
//         </div>
//       )}   
//     </div>
//   );
// };

// export default Applicants;      