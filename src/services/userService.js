import axios from 'axios';
import endpoints from '../config/apiconfig';

const getAllUsers = async () => {
    const response = await axios.get(endpoints.users.getAll);
    return response.data;
};
const getDataUser = async () => {
    const response = await axios.get(endpoints.users.getData,{
        withCredentials: true 
    });
    return response.data;
};

const getUserById = async (id) => {
    const response = await axios.get(endpoints.users.getById(id));
    return response.data;
};


const updateUser = async (userData) => {
    const response = await axios.put(endpoints.users.update, userData,{
        withCredentials: true 
    });
    return response.data;
};

const deleteUser = async (id) => {
    const response = await axios.delete(endpoints.users.delete(id));
    return response.data;
};

export { getAllUsers, getUserById, updateUser, deleteUser,getDataUser };
