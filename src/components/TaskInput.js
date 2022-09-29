import { Button, Input} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setText } from "../redux/actions/textAction";
import store from "../redux/store";
import {addTask} from '../redux/actions/tasksAction';

function TaskInput () {

    const dispatch = useDispatch();                                        // 6) Чтобы actionCreacter вызвать, нужно её обернуть
    const text = useSelector((store) => store.text)                      //    в функцию useDispatch()
    const todos = useSelector((store) => store.todos)
    
    function setTodo() {
        
    }
    function addTodo() {
            dispatch(addTask(text))
            dispatch(setText(''))
            // ([...todos, {
            //     id: todos.length !== 0 ? todos.length : 0,
            //     title: value, 
            //     done: false
            // }])
            // // ('')                                                             // Обнуляем input: после ввода задачи поле ввода очищается 

        }

    function handleEnter(event) {
        if (event.key === 'Enter') {
            addTodo()
        }
    }
    
    return(
        <div className="task-input">
            <Input 
                onKeyPress = {handleEnter} 
                placeholder = "Add a new task..." 
                value = {text} 
                onChange = { (e) => dispatch(setText(e.target.value)) } />    {/* 7) Вызываем actionCreater */}
                
            <Button
                type = 'primary' 
                onClick={() => addTodo()}> Add ToDo </Button>
        </div>
    )
} 

export default TaskInput;