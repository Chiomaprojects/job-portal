import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/layout/Visitor/mainLayout";
import VisitorDashboardLayout from "../components/layout/Visitor/visitorDasboardLayout";
import Home from "../pages/visitor/Home";
import Jobs from "../pages/visitor/Jobs";
import JobDetailsPage from "../pages/visitor/JobDetails";
import Profile from "../pages/visitor/Profile";
import Login from "../pages/visitor/Login";
import SignUp from "../pages/visitor/SignUp";
import Apply from "../pages/visitor/Apply";
import ProtectedRoute from "./ProtectedRoute";



const VisitorRoutes = () => {
return(
  <Routes>
    {/* public Visitor Routes */}
    <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobs/:id" element={<JobDetailsPage />} />
          <Route path="apply/:jobId" element={<Apply />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
    </Route>

    {/* VISITOR DASHBOARD (PROTECTED) */}
    <Route element={<ProtectedRoute allowedRoles={["visitor"]} />}>
      <Route element={<VisitorDashboardLayout />}>
        <Route path="profile" element={<Profile />} />
      </Route>
      </Route>
   </Routes>
);
};

export default VisitorRoutes;