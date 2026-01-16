const Settings = () => {
  return (
    <div className="space-y-10 max-w-4xl">
      {/* PAGE HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Settings
        </h1>
        <p className="text-gray-500 mt-1">
          Manage your admin account and platform preferences
        </p>
      </div>

      {/* PROFILE SECTION */}
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Admin Profile
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Input label="Full Name" placeholder="Admin Name" />
          <Input label="Email Address" placeholder="admin@email.com" />
        </div>

        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Save Profile
        </button>
      </section>

      {/* ACCOUNT SETTINGS */}
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Account Settings
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Input label="Username" placeholder="admin_user" />
          <Input label="Phone Number" placeholder="+234..." />
        </div>
      </section>

      {/* SECURITY */}
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Security
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Input label="New Password" type="password" />
          <Input label="Confirm Password" type="password" />
        </div>

        <button className="border border-red-500 text-red-600 px-6 py-2 rounded hover:bg-red-50">
          Update Password
        </button>
      </section>

      {/* PLATFORM SETTINGS */}
      <section className="bg-white rounded-lg shadow p-6 space-y-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Platform Preferences
        </h2>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-700">
              Email Notifications
            </p>
            <p className="text-sm text-gray-500">
              Receive alerts for new applications
            </p>
          </div>
          <input type="checkbox" className="w-5 h-5" />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-gray-700">
              Maintenance Mode
            </p>
            <p className="text-sm text-gray-500">
              Temporarily disable public access
            </p>
          </div>
          <input type="checkbox" className="w-5 h-5" />
        </div>
      </section>
    </div>
  );
};

const Input = ({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-gray-600">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="border rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default Settings;
