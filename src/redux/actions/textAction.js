import { SET_TEXT } from "./actionTypes";

export const setText = (text) => {
    return {
        type: SET_TEXT,
        payload: text,
    }
}

