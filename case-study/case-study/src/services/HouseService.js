import axios from "axios";
export const getAllHouse = () => {
  try {
      let res = axios.get("http://localhost:3301/houses");
      return res;
  } catch (error) {
      return undefined;
  }
}

export const getHouseById = (idHouse) => {
    try {
        let res = axios.get(`http://localhost:3301/houses/${idHouse}`);
        return res;
    } catch (error) {
        return undefined;
    }
}

export const addNewHouse = (house) => {
    try {
        axios.post("http://localhost:3301/houses",house);
        return true;
    } catch (error) {
        return false;
    }
}

export const updateHouse = (house) => {
    try {
        axios.patch(`http://localhost:3301/houses/${house.id}`,house);
        return true;
    } catch (error) {
        return false;
    }
}

export const deleteHouseById = (idHouse) => {
    try {
        let res = axios.delete(`http://localhost:3301/houses/${idHouse}`);
        return res;
    } catch (error) {
        return undefined;
    }
}