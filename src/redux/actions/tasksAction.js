import { SET_TODO, DELETE_TASK, CHECK_TASK, SAVE_EDITED_TASK} from "./actionTypes";

export const addTask = (data) => {            // 5) Создаём функцию ActionCreater, кот возвращает объект
    return {
        type: SET_TODO,
        payload: data,                        // data - текст, кот мы хотим передать в store
    }
}

export const deleteTask = (data) => {           
    return {
        type: DELETE_TASK,
        payload: data,                       
    }
}

export const checkTask = (data) => {           
    return {
        type: CHECK_TASK,
        payload: data,                       
    }
}

export const saveEditedTask = (data) => {            
    return {
        type: SAVE_EDITED_TASK,
        payload: data,                       
    }
}