import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import type { RootState } from "../store/store";


interface ProtectedRouteProps {
  allowedRoles?: ("admin" | "visitor")[];
}

const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
  const user = useSelector(
    (state: RootState) => state.auth.user
  );

  // Not logged in
  if (!user) {
  return <Navigate to="/login" replace />;
}

// Role not allowed
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

return <Outlet />;
};

export default ProtectedRoute;




