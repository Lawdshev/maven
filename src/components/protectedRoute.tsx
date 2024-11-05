import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    
    const isAuth = !!localStorage.getItem("accessToken");

  if (!isAuth) return <Navigate to="/login" />;
  return children;
};

export default ProtectedRoute;
