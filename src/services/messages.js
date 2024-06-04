import axios from 'axios';
import endpoints from '../config/apiconfig';

const createMessage = async (newMessage) => {
    const response = await axios.post(endpoints.messages.create,newMessage);
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


const updateUser = async (id, userData) => {
    const response = await axios.put(endpoints.users.update(id), userData);
    return response.data;
};

const deleteUser = async (id) => {
    const response = await axios.delete(endpoints.users.delete(id));
    return response.data;
};

export { createMessage };
