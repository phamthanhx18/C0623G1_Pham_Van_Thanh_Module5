import axios from "axios";
export const getAll = async() =>{
    try {
        const respone = await axios.get("http://localhost:3301/users");
        return respone.data;
    } catch (error) {
        console.log(error);
    }
}

export const remove = async(id) =>{
    try {
        await axios.delete(`http://localhost:3301/users/${id}`);
        return true;
    } catch (error) {
        console.log(error);
    }
}