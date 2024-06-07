import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Loading from '../components/Loading';

const UserRoute = () => {
    const { user, loadingData } = useAuth();

    if (loadingData) return <Loading />;

    return user && user.role === 'user' ? <Outlet /> : <Navigate to="/dashboard/messages" />;
};

export default UserRoute;