import axios from "axios";

export const getAllCustomer = async () => {
    try {
        let res = await axios.get("http://localhost:3301/customer");
        return res.data;
    } catch (error) {
        return undefined;
    }
}

export const getCustomerById = async (idCustomer) => {
    try {
        let res = await axios.get(`http://localhost:3301/customer/${idCustomer}`);
        return res.data;
    } catch (error) {
        return undefined;
    }
}