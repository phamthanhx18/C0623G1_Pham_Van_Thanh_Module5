import axios from "axios";
export const getAllCustomer = () => {
  try {
      let res = axios.get("http://localhost:3301/customer");
      return res;
  } catch (error) {
      return undefined;
  }
}

export const getCustomerById = (idCustomer) => {
    try {
        let res = axios.get(`http://localhost:3301/customer/${idCustomer}`);
        return res;
    } catch (error) {
        return undefined;
    }
}

export const addNewCustomer = (customer) => {
    try {
        axios.post("http://localhost:3301/customer",customer);
        return true;
    } catch (error) {
        return false;
    }
}

export const updateCustomer = (customer) => {
    try {
        axios.patch(`http://localhost:3301/customer/${customer.id}`,customer);
        return true;
    } catch (error) {
        return false;
    }
}

export const deleteCustomerById = (idCustomer) => {
    try {
        let res = axios.delete(`http://localhost:3301/customer/${idCustomer}`);
        return res;
    } catch (error) {
        return undefined;
    }
}

export const searchCustomer = (objectSearch) => {
    try {
        let res = axios.get(`http://localhost:3301/customer?name_like=${objectSearch.name}&phone_like=${objectSearch.phone}`);
        return res;
    } catch (error) {
        return undefined;
    }
}