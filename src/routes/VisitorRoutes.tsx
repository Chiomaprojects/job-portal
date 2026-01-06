import Jobs from "../pages/visitor/Jobs";
import JobDetailsPage from "../pages/visitor/JobDetails";
import Login from "../pages/visitor/Login";
import Register from "../pages/visitor/Register";
import Profile from "../pages/visitor/Profile";
import Apply from "../pages/visitor/Apply";
import Home from "../pages/visitor/Home";
import MainLayout from "../components/layout/Visitor/mainLayout";
import { Route, Routes } from "react-router-dom";


const VisitorRoutes = () => {
return(
  <Routes>
    {/* Visitor Routes */}
    <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="jobs/:id" element={<JobDetailsPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="apply/:jobId" element={<Apply />} />
    </Route>
   </Routes>
);
};

export default VisitorRoutes