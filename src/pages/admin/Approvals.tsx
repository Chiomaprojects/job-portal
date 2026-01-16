const Approvals = () => {
  const approvals = [
    {
      id: "1",
      title: "Frontend Developer",
      company: "Pluto Tech",
      submittedBy: "HR Team",
      date: "2024-01-18",
    },
    {
      id: "2",
      title: "Data Analyst",
      company: "Insight Corp",
      submittedBy: "Recruitment",
      date: "2024-01-19",
    },
     {
      id: "3",
      title: "Frontend Developer",
      company: "Pluto Tech",
      submittedBy: "HR Team",
      date: "2024-01-18",
    },
    {
      id: "4",
      title: "Data Analyst",
      company: "Insight Corp",
      submittedBy: "Recruitment",
      date: "2024-01-19",
    },
     {
      id: "5",
      title: "Frontend Developer",
      company: "Pluto Tech",
      submittedBy: "HR Team",
      date: "2024-01-18",
    },
    {
      id: "6",
      title: "Data Analyst",
      company: "Insight Corp",
      submittedBy: "Recruitment",
      date: "2024-01-19",
    },
     {
      id: "7",
      title: "Frontend Developer",
      company: "Pluto Tech",
      submittedBy: "HR Team",
      date: "2024-01-18",
    },
    {
      id: "8",
      title: "Data Analyst",
      company: "Insight Corp",
      submittedBy: "Recruitment",
      date: "2024-01-19",
    },
  ];

  return (
    <div className="space-y-6">
      {/* PAGE HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Job Approvals
        </h1>
        <p className="text-gray-500 mt-1">
          Review and approve job postings
        </p>
      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden md:block bg-white rounded-lg shadow">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left px-6 py-3">Job Title</th>
              <th className="text-left px-6 py-3">Company</th>
              <th className="text-left px-6 py-3">Submitted By</th>
              <th className="text-left px-6 py-3">Date</th>
              <th className="text-left px-6 py-3">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {approvals.map((job) => (
              <tr key={job.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-800">
                  {job.title}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {job.company}
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {job.submittedBy}
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {job.date}
                </td>
                <td className="px-6 py-4 space-x-3">
                  <button className="text-green-600 hover:underline">
                    Approve
                  </button>
                  <button className="text-red-600 hover:underline">
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARDS */}
      <div className="md:hidden space-y-4">
        {approvals.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-lg shadow p-4 space-y-2"
          >
            <h3 className="font-semibold text-gray-800">
              {job.title}
            </h3>
            <p className="text-sm text-gray-600">{job.company}</p>

            <div className="text-sm text-gray-500">
              Submitted by {job.submittedBy}
            </div>

            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">{job.date}</span>

              <div className="flex gap-4">
                <button className="text-green-600">
                  Approve
                </button>
                <button className="text-red-600">
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Approvals;