const ManageJobs = () => {

    const jobs = [
    {
      id: "1",
      title: "Frontend Developer",
      company: "Pluto Tech",
      status: "Approved",
      date: "2024-01-12",
    },
    {
      id: "2",
      title: "Backend Engineer",
      company: "Nova Systems",
      status: "Pending",
      date: "2024-01-14",
    },
    {
      id: "3",
      title: "UI/UX Designer",
      company: "Bright Labs",
      status: "Rejected",
      date: "2024-01-15",
    },
    {
      id: "4",
      title: "Frontend Developer",
      company: "Pluto Tech",
      status: "Approved",
      date: "2024-01-12",
    },
    {
      id: "5",
      title: "Backend Engineer",
      company: "Nova Systems",
      status: "Pending",
      date: "2024-01-14",
    },
    {
      id: "6",
      title: "UI/UX Designer",
      company: "Bright Labs",
      status: "Rejected",
      date: "2024-01-15",
    },
    {
      id: "7",
      title: "Frontend Developer",
      company: "Pluto Tech",
      status: "Approved",
      date: "2024-01-12",
    },
    {
      id: "8",
      title: "Backend Engineer",
      company: "Nova Systems",
      status: "Pending",
      date: "2024-01-14",
    },
    {
      id: "9",
      title: "UI/UX Designer",
      company: "Bright Labs",
      status: "Rejected",
      date: "2024-01-15",
    },
  ];
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Manage Jobs</h1>
          <p className="text-gray-500 mt-1">View and manage all job postings</p>
        </div>

        <button className="!bg-blue-500 text-white !px-5 !py-2 rounded-md hover:!bg-blue-700 transition">+ Post New Job</button>
      </div>

      <div className="hidden md:block bg-white rounded-lg shadow">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left px-6 py-3">Job Title</th>
              <th className="text-left px-6 py-3">Company</th>
              <th className="text-left px-6 py-3">Status</th>
              <th className="text-left px-6 py-3">Date</th>
              <th className="text-left px-6 py-3">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {jobs.map((job) => (
              <tr key={job.id} className="hover:!bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-800">
                {job.title}
              </td>
              <td className="px-6 py-4 text-gray-600">
                {job.company}
              </td>
              <td className="px-6 py-4">
                <StatusBadge status={job.status}/>
              </td>
              <td className="px-6 py-4 text-gray-500">
                {job.date}
              </td>
              <td className="px-6 py-4 space-x-3">
                <button className="text-blue-600 hover:underline">
                  View
                </button>
                <button className="text-yellow-600 hover:underline">
                  Edit
                </button>
                <button className="text-red-600 hover:underline">
                  Delete
                </button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-4">
         {jobs.map((job) => 
        <div key={job.id}
        className="bg-white rounded-lg shadow p-4 space-y-2"
        >
          <h3 className="font-semibold text-gray-800">{job.title}</h3>
          <p className="text-sm text-gray-600">{job.company}</p>

          <div className="flex justify-between items-center text-sm">
            <StatusBadge  status={job.status}/>
            <span className="text-gray-500">{job.date}</span>
          </div>

          <div className="flex gap-4 pt-2 text-sm">
              <button className="text-blue-600">View</button>
              <button className="text-yellow-600">Edit</button>
              <button className="text-red-600">Delete</button>
            </div>
        </div>
          )}
      </div>
      <div className="h-96"></div>
    </div>
  );
};


const StatusBadge = ({ status }: { status: string }) => {
  const base = "px-3 py-1 rounded-full text-xs font-medium";

  if (status === "Approved")
    return <span className={`${base} bg-green-100 text-green-700`}>Approved</span>;

  if (status === "Pending")
    return <span className={`${base} bg-yellow-100 text-yellow-700`}>Pending</span>;

  return (
    <span className={`${base} bg-red-100 text-red-700`}>
      Rejected
    </span>
  );
};

export default ManageJobs;