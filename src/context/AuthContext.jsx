import React, { createContext, useContext, useState, useEffect } from 'react';
import { getDataUser } from '../services/userService';
import { logout } from '../services/authService';
import { useAlert } from './AlertContext';
import { Outlet, useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = () => {
    const [user, setUser] = useState(null);
    const [loadingData, setLoadingData] = useState(true);
    const { addAlert } = useAlert();
    const navigate = useNavigate();
    const fetchAuthData = async () => {
        try {
            setLoadingData(true)
            const userData = await getDataUser();
            setUser(userData);
        } catch (error) {
            console.error('Error fetching user data:', error);
            setUser(null);
        } finally {
            setLoadingData(false)
        }
    };
    useEffect(() => {
        fetchAuthData();
    }, []);

    const updateUser = () => {
        fetchAuthData();
    };

    const authLogout = async () => {
        try {
            setLoadingData(true)
            const response = await logout();
            addAlert('success', response.message);
            setUser(null);
            navigate('/');
        } catch (error) {
            console.error('Error logging out:', error);
            addAlert('error', error.message);
        } finally {
            setLoadingData(false)
        }
    };

    return (
        <AuthContext.Provider value={{ loadingData, user, updateUser, authLogout,setLoadingData }}>
            <Outlet />
        </AuthContext.Provider>
    );
};
