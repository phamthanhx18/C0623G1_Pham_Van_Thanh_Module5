import axios from "axios";
export const getAllContract = () => {
  try {
      let res = axios.get("http://localhost:3301/contracts");
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
        axios.post("http://localhost:3301/contracts",contract);
        return true;
    } catch (error) {
        return false;
    }
}

export const updateContract = (contract) => {
    try {
        axios.patch(`http://localhost:3301/contracts/${contract.id}`,contract);
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