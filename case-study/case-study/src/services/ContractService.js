import axios from "axios";

export const getAllContract = async () => {
    try {
        let res = await axios.get("http://localhost:3301/contracts?_page=1&_limit=1");
        return res;
    } catch (error) {
        return undefined;
    }
}

export const getContractById = (idContract) => {
    try {
        let res = axios.get(`http://localhost:3301/contracts/${idContract}`);
        return res;
    } catch (error) {
        return undefined;
    }
}

export const addNewContract = (contract) => {
    try {
        axios.post("http://localhost:3301/contracts", contract);
        return true;
    } catch (error) {
        return false;
    }
}

export const updateContract = (contract) => {
    try {
        axios.patch(`http://localhost:3301/contracts/${contract.id}`, contract);
        return true;
    } catch (error) {
        return false;
    }
}

export const deleteContractById = (idContract) => {
    try {
        let res = axios.delete(`http://localhost:3301/contracts/${idContract}`);
        return res;
    } catch (error) {
        return undefined;
    }
}

export const searchContract = async (searchObject) => {
    try {
        let res = await axios.get(`http://localhost:3301/contracts?_page=${searchObject.page}&_limit=${searchObject.limit}`, {
            params: {
                contractCode_like: searchObject.contractCode,
                customerName_like: searchObject.customerName
            }
        });
        return res;
    } catch (error) {
        return undefined;
    }
}