import axios from 'axios';
import endpoints from '../config/apiconfig';

const getGroups = async (limit=10,page=1,filter=`{"status":true}`) => {
    const response = await axios.get(`${endpoints.groups.getAll}?limit=${limit}&page=${page}&filter=${filter}`);
    return response.data;
};
const getGroupbyId = async (gid) => {
    const response = await axios.get(endpoints.groups.getById(gid));
    return response.data;
};

export { getGroups,getGroupbyId };
