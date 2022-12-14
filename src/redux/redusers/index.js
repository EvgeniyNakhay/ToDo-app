import { combineReducers } from "redux";
import todosReducer from './todosReducer';
import textReducer from './textReducer';
import editedTextReducer from './editedTextReducer';

export default combineReducers({
    text: textReducer,               // text - поле, textReducer - reducer
    todos: todosReducer,             // 2) Создаём новое поле и указываем reduser, который меняет это поле 
    editedText: editedTextReducer,
})