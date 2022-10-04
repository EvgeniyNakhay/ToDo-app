import { SET_EDITED_TEXT } from '../actions/actionTypes';

const initialValue = '';

export default function editedTextReducer(state = initialValue, action) {
    switch (action.type) {
        case SET_EDITED_TEXT: {
            return action.payload;
        }
        default: {
            return state;
        } 
    }
}