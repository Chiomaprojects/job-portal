const Applicants = () => {
  const applicants = [
    {
      id: "1",
      name: "Blessing Okorie",
      email: "blessing@email.com",
      jobTitle: "Frontend Developer",
      appliedDate: "2024-01-20",
      status: "Pending",
    },
    {
      id: "2",
      name: "Michael Ade",
      email: "michael@email.com",
      jobTitle: "Data Analyst",
      appliedDate: "2024-01-21",
      status: "Shortlisted",
    },
    {
      id: "3",
      name: "Ijeoma Tasie",
      email: "blessing@email.com",
      jobTitle: "Frontend Developer",
      appliedDate: "2024-01-20",
      status: "Pending",
    },
    {
      id: "4",
      name: "Okonta Michael",
      email: "michael@email.com",
      jobTitle: "Data Analyst",
      appliedDate: "2024-01-21",
      status: "Shortlisted",
    },
    {
      id: "5",
      name: "Favour Okonkwo",
      email: "blessing@email.com",
      jobTitle: "Frontend Developer",
      appliedDate: "2024-01-20",
      status: "Pending",
    },
    {
      id: "6",
      name: "Hillary Ike",
      email: "michael@email.com",
      jobTitle: "Data Analyst",
      appliedDate: "2024-01-21",
      status: "Shortlisted",
    },
  ];

  return (
    <div className="space-y-6">
      {/* PAGE HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Job Applicants
        </h1>
        <p className="text-gray-500 mt-1">
          View and manage job applications
        </p>
      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden md:block bg-white rounded-lg shadow">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left px-6 py-3">Applicant</th>
              <th className="text-left px-6 py-3">Email</th>
              <th className="text-left px-6 py-3">Job Title</th>
              <th className="text-left px-6 py-3">Applied Date</th>
              <th className="text-left px-6 py-3">Status</th>
              <th className="text-left px-6 py-3">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {applicants.map((applicant) => (
              <tr key={applicant.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-800">
                  {applicant.name}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {applicant.email}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {applicant.jobTitle}
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {applicant.appliedDate}
                </td>
                <td className="px-6 py-4">
                  <ApplicationStatus status={applicant.status} />
                </td>
                <td className="px-6 py-4 space-x-3">
                  <button className="text-blue-600 hover:underline">
                    View CV
                  </button>
                  <button className="text-gray-600 hover:underline">
                    Update Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARDS */}
      <div className="md:hidden space-y-4">
        {applicants.map((applicant) => (
          <div
            key={applicant.id}
            className="bg-white rounded-lg shadow p-4 space-y-2"
          >
            <h3 className="font-semibold text-gray-800">
              {applicant.name}
            </h3>
            <p className="text-sm text-gray-600">
              {applicant.email}
            </p>

            <p className="text-sm text-gray-600">
              Job: {applicant.jobTitle}
            </p>

            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">
                {applicant.appliedDate}
              </span>
              <ApplicationStatus status={applicant.status} />
            </div>

            <div className="flex gap-4 pt-2 text-sm">
              <button className="text-blue-600">View CV</button>
              <button className="text-gray-600">Update Status</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ApplicationStatus = ({ status }: { status: string }) => {
  const base = "px-3 py-1 rounded-full text-xs font-medium";

  switch (status) {
    case "Pending":
      return (
        <span className={`${base} bg-yellow-100 text-yellow-700`}>
          Pending
        </span>
      );
    case "Shortlisted":
      return (
        <span className={`${base} bg-green-100 text-green-700`}>
          Shortlisted
        </span>
      );
    case "Rejected":
      return (
        <span className={`${base} bg-red-100 text-red-700`}>
          Rejected
        </span>
      );
    default:
      return (
        <span className={`${base} bg-gray-100 text-gray-600`}>
          Reviewed
        </span>
      );
  }
};

export default Applicants;