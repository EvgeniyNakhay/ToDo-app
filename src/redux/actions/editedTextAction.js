import { SET_EDITED_TEXT} from "./actionTypes";

export const setEditedText = (editedText) => {
    return {
        type: SET_EDITED_TEXT,
        payload: editedText,
    }
}

