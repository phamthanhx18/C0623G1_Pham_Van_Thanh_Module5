import axios from "axios";
export const getAllRoom = () => {
  try {
      let res = axios.get("http://localhost:3301/rooms");
      return res;
  } catch (error) {
      return undefined;
  }
}

export const getRoomById = (idRoom) => {
    try {
        let res = axios.get(`http://localhost:3301/rooms/${idRoom}`);
        return res;
    } catch (error) {
        return undefined;
    }
}