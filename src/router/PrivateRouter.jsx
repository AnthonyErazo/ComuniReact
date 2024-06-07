import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Loading from '../components/Loading';

const PrivateRouter = () => {
    const { user,loadingData } = useAuth();
    if(loadingData) return <Loading />
    return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;