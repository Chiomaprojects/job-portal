import { Routes, Route } from "react-router-dom";
import VisitorRoutes from "./VisitorRoutes";
import AdminRoutes from "./AdminRoutes";

export default function AllRoutes () {
  return (
    <Routes>
      <Route path="/*" element={<VisitorRoutes/>}/>
      <Route path="/admin/*" element={<AdminRoutes/>}/>
    </Routes>
  );
};