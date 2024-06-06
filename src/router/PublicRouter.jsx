import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Loading from "../components/Loading";
import { isAuthenticated } from "../utils/isAuthenticated";

const PublicRouter = () => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const auth = await isAuthenticated();
      setIsAuth(auth);
    };
    checkAuth();
  }, []);

  if (isAuth === null) {
    return <Loading />;
  }

  return isAuth ? <Navigate to="/dashboard/inicio" /> : <Outlet />;
};

export default PublicRouter;
