import { Button, Input} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setText } from "../redux/actions/textAction";
import {addTask} from '../redux/actions/tasksAction';

function TaskInput () {

    const dispatch = useDispatch();                               // 6) Чтобы actionCreacter вызвать, нужно её обернуть в функцию useDispatch()
    const text = useSelector((store) => store.text)                      
    
    function addTodo() {
        dispatch(addTask(text))
        dispatch(setText(''))                                 // Обнуляем input: после ввода задачи поле ввода очищается                                                            
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