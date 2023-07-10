import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../../main";

// eslint-disable-next-line react/prop-types
export const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
