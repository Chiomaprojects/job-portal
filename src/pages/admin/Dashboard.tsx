const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div>
           <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
           <p className="text-gray-500 mt-1">
          Overview of platform activity
        </p>
      </div>

                {/* STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Jobs" value="128" />
        <StatCard title="Pending Approvals" value="15" />
        <StatCard title="Total Users" value="1,245" />
        <StatCard title="Applications Today" value="32" />
      </div>

               {/* CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-p-6">
            <h2 className="text-lg font-semibold mb-4 text-center">Recent Job Posts
            </h2>

            <table className="w-full text-sm">
              <thead className="text-left text-gray-500 border-b">
                <tr>
                  <th className="py-2">Title</th>
                  <th>Company</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                <tr>
                  <td className="py-3">Frontend Developer</td>
                  <td>Pluto Tech</td>
                  <td className="text-green-600 font-medium">Approved</td>
                </tr>

                <tr>
                  <td className="py-3">Backend Engineer</td>
                  <td>Nova System</td>
                  <td className="text-yellow-600 font-medium">Pending</td>
                </tr>

                <tr>
                  <td className="py-3">Frontend Developer</td>
                  <td>Tech Everywhere</td>
                  <td className="text-green-600 font-medium">Approved</td>
                </tr>

                <tr>
                  <td className="py-3">Backend Engineer</td>
                  <td>Unilever</td>
                  <td className="text-yellow-600 font-medium">Pending</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4 text-center">Pending Approvals</h2>

            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <span>UI/UX Designer</span>
                <button className="text-blue-600 text-sm">Review</button>
              </li>

              <li className="flex justify-between items-center">
                <span>Data Analyst</span>
                <button className="text-blue-600 text-sm">Review</button>
              </li>

              <li className="flex justify-between items-center">
                <span>UI/UX Designer</span>
                <button className="text-blue-600 text-sm">Review</button>
              </li>

              <li className="flex justify-between items-center">
                <span>Data Analyst</span>
                <button className="text-blue-600 text-sm">Review</button>
              </li>
            </ul>
          </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value }: { title: string; value: string }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <p className="text-sm text-gray-500">{title}</p>
    <h3 className="text-2xl font-bold text-gray-800 mt-2">
      {value}
    </h3>
  </div>
);

export default Dashboard;