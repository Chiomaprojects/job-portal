const ManageUsers = () => {
  const users = [
    {
      id: "1",
      name: "Chioma Okeke",
      email: "chioma@email.com",
      role: "Manager",
      status: "Active",
    },
    {
      id: "2",
      name: "John Doe",
      email: "john@company.com",
      role: "Employer",
      status: "Suspended",
    },
    {
      id: "3",
      name: "Favour Okoye",
      email: "chioma@email.com",
      role: "HR",
      status: "Active",
    },
    {
      id: "4",
      name: "Maureen Sam",
      email: "john@company.com",
      role: "Employer",
      status: "Suspended",
    },
    {
      id: "5",
      name: "Chioma Omenka",
      email: "chioma@email.com",
      role: "Job Seeker",
      status: "Active",
    },
    {
      id: "6",
      name: "Lilian Tubo",
      email: "john@company.com",
      role: "Employer",
      status: "Suspended",
    },
  ];

  return (
    <div className="space-y-6">
      {/* PAGE HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Manage Users
        </h1>
        <p className="text-gray-500 mt-1">
          View and manage platform users
        </p>
      </div>

      <button className="!bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 w-fit">
          + Add User
        </button>
      </div>

        {/* SEARCH / FILTER BAR */}
      <div className="bg-white p-4 rounded-lg shadow flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Search users..."
          className="border px-4 py-2 rounded-md w-full md:w-1/3"
        />

        <select className="border px-4 py-2 rounded-md w-full md:w-1/4">
          <option>All Roles</option>
          <option>Admin</option>
          <option>Employer</option>
          <option>Applicant</option>
        </select>
      </div>

      {/* DESKTOP TABLE */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left px-6 py-3">Name</th>
              <th className="text-left px-6 py-3">Email</th>
              <th className="text-left px-6 py-3">Role</th>
              <th className="text-left px-6 py-3">Status</th>
              <th className="text-left px-6 py-3">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-800">
                  {user.name}
                </td>
                <td className="px-6 py-4 text-gray-600">
                  {user.email}
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {user.role}
                </td>
                <td className="px-6 py-4">
                  <UserStatus status={user.status} />
                </td>
                <td className="px-6 py-4 space-x-3">
                  <button className="text-blue-600 hover:underline">
                    View
                  </button>
                  <button className="text-red-600 hover:underline">
                    Suspend
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARDS */}
      <div className="md:hidden space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-lg shadow p-4 space-y-2"
          >
            <h3 className="font-semibold text-gray-800">
              {user.name}
            </h3>
            <p className="text-sm text-gray-600">
              {user.email}
            </p>

            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">{user.role}</span>
              <UserStatus status={user.status} />
            </div>

            <div className="flex gap-4 pt-2 text-sm">
              <button className="text-blue-600">View</button>
              <button className="text-red-600">Suspend</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const UserStatus = ({ status }: { status: string }) => {
  const base = "px-3 py-1 rounded-full text-xs font-medium";

  if (status === "Active")
    return <span className={`${base} bg-green-100 text-green-700`}>Active</span>;

  return (
    <span className={`${base} bg-red-100 text-red-700`}>
      Suspended
    </span>
  );
};

export default ManageUsers;