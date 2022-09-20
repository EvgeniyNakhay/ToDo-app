import { SET_TODO } from "./actionTypes";

export const setTask = (data) => {
    return {
        type: SET_TODO,
        payload: data,
    }
}