import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Loading from '../components/Loading';

const PublicRouter = () => {
  const { user,loadingData } = useAuth();
  if(loadingData) return <Loading />
  return user ? <Navigate to="/dashboard/inicio" /> : <Outlet />;
};

export default PublicRouter;