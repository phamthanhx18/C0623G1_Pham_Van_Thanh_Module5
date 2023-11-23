import * as userService from "../../service/UserService"
import {DELETE_USER, GET_ALL_USER} from "../constant";

export const getAllUser = () => async (dispatch) => {
    const res = await userService.getAll();
    dispatch({
        type: GET_ALL_USER,
        payload: res
    })
}

export const removeUserMiddle = (id) => async (dispatch) => {
    await userService.remove(id);
    dispatch({
        type: DELETE_USER,
        payload: id
    })
}
