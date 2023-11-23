import {DELETE, DELETE_USER, GET_ALL, GET_ALL_USER} from "../constant";

export const UserReducers = (users = [], action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_ALL_USER:
            return payload;
        case DELETE_USER:
            return users.filter((user) => user.id !== payload);
        default:
            return users;
    }
};