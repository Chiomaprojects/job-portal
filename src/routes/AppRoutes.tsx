import { Route, Routes } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import NotFound from "../pages/notfound/NotFound";
import VisitorRoutes from "./VisitorRoutes";
import ProtectedRoute from "./ProtectedRoute";


const AppRoutes = () => {
return(
  <Routes>

      {/* VISITOR ROUTES */}
  <Route element={<ProtectedRoute allowedRoles={["visitor"]} />}>
     <Route path="/visitor/*" element={<VisitorRoutes />} />
  </Route>

  {/* ADMIN ROUTES */}
   <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
     <Route path="/admin/*" element={<AdminRoutes />} />
   </Route>

  {/* PUBLIC ROUTES */}
   <Route path="/*" element={<VisitorRoutes/>}/>

          {/* Catch-all Not Found */}
   <Route path="*" element={<NotFound />} />

  </Routes>
);
};

export default AppRoutes;