import { SET_EDITED_TASK, SET_TEXT } from "./actionTypes";

export const setText = (text) => {
    return {
        type: SET_TEXT,
        payload: text,
    }
}

export const setEditedTask = (text) => {
    return {
        type: SET_EDITED_TASK,
        payload: text,
    }
}

