import { useEffect, useState } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";

const PrivateRoute = ({ children, setCurrUser }) => {
  const location = useLocation();
  const nav = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      nav("/login");
      return;
    }
    setUser(JSON.parse(user));
    setCurrUser(JSON.parse(user));
    nav("/");
  }, [location.pathname]);

  if (user) return children;
  if (!user) return <Navigate to="/login" />;
  return <></>;
};

export default PrivateRoute;
