// const API_BASE_URL = 'http://localhost:8080/api';
const API_BASE_URL = 'https://comuniback.onrender.com/api';

const endpoints = {
    users: {
        getAll: `${API_BASE_URL}/users/`,
        getData: `${API_BASE_URL}/users/data`,
        getById: (uid) => `${API_BASE_URL}/users/${uid}`,
        update: (uid) => `${API_BASE_URL}/users/${uid}`,
        delete: (uid) => `${API_BASE_URL}/users/${uid}`
    },
    auth: {
        register: `${API_BASE_URL}/auth/register`,
        login: `${API_BASE_URL}/auth/login`,
        logout: `${API_BASE_URL}/auth/logout`,
    },
    messages: {
        getAll: `${API_BASE_URL}/message/`,
        create: `${API_BASE_URL}/message/`,
        delete:(mid) => `${API_BASE_URL}/message/${mid}`,
        response: (mid) => `${API_BASE_URL}/message/${mid}`,
    },
    groups: {
        getAll:`${API_BASE_URL}/groups/`,
        getById:(gid)=>`${API_BASE_URL}/groups/${gid}`,
        update:(gid)=>`${API_BASE_URL}/groups/${gid}`,
        addImageGroup:(gid)=>`${API_BASE_URL}/groups/${gid}/image`,
    }
};

export default endpoints;
