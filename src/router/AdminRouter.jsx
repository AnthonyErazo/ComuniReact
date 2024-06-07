import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Loading from '../components/Loading';

const AdminRoute = () => {
    const { user, loadingData } = useAuth();

    if (loadingData) return <Loading />;

    return user && user.role === 'admin' ? <Outlet /> : <Navigate to="/dashboard/inicio" />;
};

export default AdminRoute;
