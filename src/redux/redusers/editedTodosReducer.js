import { SET_EDITED_TASK } from '../actions/actionTypes';

const initialValue = '';

export default function editedTodosReducer(state = initialValue, action) {
    switch (action.type) {
        case SET_EDITED_TASK: {
            const editedArr = [];
            state.map((item) => {
                if(item.id === action.payload.id){
                    item.id = action.payload.id;
                    item.title = action.payload.title;
                    item.done = action.payload.done;
                }
            editedArr.push(item)
            })
            return editedArr;
        }
        default: {
            return state;
        } 
    }
}
