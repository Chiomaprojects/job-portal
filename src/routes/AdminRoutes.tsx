import { Route, Routes } from "react-router-dom";
import AdminLayout from "../components/layout/admin/adminLayout";
import Dashboard from "../pages/admin/Dashboard";
import ManageJobs from "../pages/admin/ManageJobs";
import ManageUsers from "../pages/admin/ManageUsers";
import Settings from "../pages/admin/Settings";
import Approvals from "../pages/admin/Approvals";
import Applicants from "../pages/admin/Applicants";


const AdminRoutes = () => {
  return (
      <Routes>
      <Route element={<AdminLayout/>}>
       <Route path="/*" element={<Dashboard />} />
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="jobs" element={<ManageJobs/>}/>
      <Route path="users" element={<ManageUsers/>}/>
      <Route path="approvals" element={<Approvals/>}/>
      <Route path="settings" element={<Settings/>}/>
      <Route path="applicants" element={<Applicants/>}/>
      </Route>
    </Routes>
  );
};

export default AdminRoutes
