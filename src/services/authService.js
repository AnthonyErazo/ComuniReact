import axios from 'axios';
import endpoints from '../config/apiconfig';

const logout = async () => {
    const response = await axios.get(endpoints.auth.logout,{
        withCredentials: true 
    });
    return response.data;
};

const register = async (userData) => {
    const response = await axios.post(endpoints.auth.register, userData,{
        withCredentials: true 
    });
    return response.data;
};
const login = async (userData) => {
    const response = await axios.post(endpoints.auth.login, userData,{
        withCredentials: true 
    });
    return response.data;
};


export { login,logout,register };
