import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

const Profile = () => {
  const user = useSelector((state: RootState) => state.auth.user)
  return (
    <div className="pt-5 px-7 mx-auto max-w-7xl">
        <h1 className="text-2xl font-bold mb-6">
          Welcome{user?.name ? `, ${user.name}` : ""}
        </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-purple-400 text-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Application</h3>
          <p className="text-3xl font-bold mt-4">0</p>
        </div>

        <div className="bg-orange-400 text-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Saved Jobs</h3>
          <p className="text-3xl font-bold mt-4">0</p>
        </div>

        <div className="bg-green-400 text-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Profile Status</h3>
          <p className="text-3xl font-bold mt-4">Complete</p>
        </div>
      </div>
        {/* Future: Applications table */}
    </div>
  );
};
export default Profile;