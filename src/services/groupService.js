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
const updateGroup = async (gid,groupUpdate) => {
    const response = await axios.put(endpoints.groups.update(gid),groupUpdate,{
        withCredentials:true
    });
    return response.data;
};
const deleteGroup = async (gid) => {
    const response = await axios.delete(endpoints.groups.delete(gid),{
        withCredentials:true
    });
    return response.data;
};
const getMyGroup = async () => {
    const response = await axios.get(endpoints.groups.getMyGroup,{
        withCredentials:true
    });
    return response.data;
};
const getNotices = async (gid,limit,page) => {
    const response = await axios.get(`${endpoints.groups.getNotices(gid)}?limit=${limit}&page=${page}`);
    return response.data;
};
const addNoticeImage = async (images) => {
    const response = await axios.post(endpoints.groups.addImageNotice,images,{
        withCredentials:true,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return response.data;
};
const eliminatedNoticeImage = async (gid,notice) => {
    const response = await axios.delete(endpoints.groups.eliminatedNotice(gid),{
        params: {notice},
        withCredentials:true
    });
    return response.data;
};
const addImageGroup = async (images) => {
    const response = await axios.put(endpoints.groups.addImageGroup,images,{
        withCredentials:true,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return response.data;
};
const addBackgroundGroup = async (images) => {
    const response = await axios.put(endpoints.groups.addBackgroundGroup,images,{
        withCredentials:true,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return response.data;
};

export {addBackgroundGroup,addImageGroup,eliminatedNoticeImage,addNoticeImage,getNotices, getGroups,getGroupbyId,updateGroup,deleteGroup,getMyGroup };
