import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PublicRoute = ({ children, setCurrUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    user && setCurrUser(JSON.parse(user));
    user && navigate("/");
  }, [location.pathname]);

  return children;
};

export default PublicRoute;
