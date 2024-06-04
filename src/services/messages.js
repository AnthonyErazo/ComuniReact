import axios from 'axios';
import endpoints from '../config/apiconfig';

const createMessage = async (newMessage) => {
    const response = await axios.post(endpoints.messages.create,newMessage);
    return response.data;
};
const getMessages = async (limit=10,page=1,filter) => {
    const response = await axios.get(`${endpoints.messages.getAll}?limit=${limit}&page=${page}${filter?`&filter=${filter}`:''}`,{
        withCredentials: true 
    });
    return response.data;
};

const deleteMessage = async (mid) => {
    const response = await axios.delete(endpoints.messages.delete(mid),{
        withCredentials: true 
    });
    return response.data;
};

const responseMessage = async (mid, responseMessage) => {
    const response = await axios.post(endpoints.messages.response(mid), responseMessage,{
        withCredentials: true 
    });
    return response.data;
};

export { createMessage, getMessages, deleteMessage, responseMessage };
