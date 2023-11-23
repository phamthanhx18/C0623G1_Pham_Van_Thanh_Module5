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

export const addNewVilla = (villa) => {
    try {
        axios.post("http://localhost:3301/villas",villa);
        return true;
    } catch (error) {
        return false;
    }
}

export const updateVilla = (villa) => {
    try {
        axios.patch(`http://localhost:3301/villas/${villa.id}`,villa);
        return true;
    } catch (error) {
        return false;
    }
}

export const deleteVillaById = (idVilla) => {
    try {
        let res = axios.delete(`http://localhost:3301/villas/${idVilla}`);
        return res;
    } catch (error) {
        return undefined;
    }
}