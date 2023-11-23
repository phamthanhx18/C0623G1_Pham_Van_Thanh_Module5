import axios from "axios";
export const getAllVilla = () => {
  try {
      let res = axios.get("http://localhost:3301/villas");
      return res;
  } catch (error) {
      return undefined;
  }
}

export const getVillaById = (idVilla) => {
    try {
        let res = axios.get(`http://localhost:3301/villas/${idVilla}`);
        return res;
    } catch (error) {
        return undefined;
    }
}