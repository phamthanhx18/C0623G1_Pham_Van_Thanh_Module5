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