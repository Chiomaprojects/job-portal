import { Route, Routes } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import NotFound from "../pages/notfound/NotFound";
import VisitorRoutes from "./VisitorRoutes";

const AppRoutes = () => {
return(
  <Routes>
   <Route path="/admin/*" element={<AdminRoutes/>}/>
   <Route path="/*" element={<VisitorRoutes/>}/>
          {/* Catch-all Not Found */}
   <Route path="*" element={<NotFound />} />
  </Routes>
);
};

export default AppRoutes;