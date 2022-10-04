import { UPDATE_TASK} from "./actionTypes";

export const setEditedTask = (data) => {
    return {
        type: UPDATE_TASK,
        payload: data
    }
}

