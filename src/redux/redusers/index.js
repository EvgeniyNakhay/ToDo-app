import { combineReducers } from "redux";
import todosReducer from './todosReducer';
import textReducer from './textReducer';

export default combineReducers({
    text: textReducer,               // text - поле, textReducer - reducer
    todos: todosReducer,             // 2) Создаём новое поле и указываем reduser, который меняет это поле 
})