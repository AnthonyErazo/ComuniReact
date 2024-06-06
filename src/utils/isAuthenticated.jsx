import { getDataUser } from "../services/userService";


export const isAuthenticated = async () => {
    try {
        const data = await getDataUser();
        return !!data; 
    } catch (error) {
        console.log("Error: ", error);
        return false;
    }
};