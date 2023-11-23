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

export const addNewRoom = (room) => {
    try {
        axios.post("http://localhost:3301/rooms",room);
        return true;
    } catch (error) {
        return false;
    }
}

export const updateRoom = (room) => {
    try {
        axios.patch(`http://localhost:3301/rooms/${room.id}`,room);
        return true;
    } catch (error) {
        return false;
    }
}

export const deleteRoomById = (idRoom) => {
    try {
        let res = axios.delete(`http://localhost:3301/rooms/${idRoom}`);
        return res;
    } catch (error) {
        return undefined;
    }
}