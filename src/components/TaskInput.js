import { Button, Input } from "antd";
import { setTask } from '../redux/actions/tasksAction';
import { useDispatch, useSelector } from 'react-redux';

function TaskInput ({todo, setTodo}) {

    const dispatch = useDispatch();

    const todos = useSelector((store) => store.todos)

    function addTodo() {
        setTask(
            [...todo, {
                id: todo.length !== 0 ? todo.length : 0,
                title: todos, 
                done: false
            }]
        )
        setTask('')                                                             // Обнуляем input: после ввода задачи поле ввода очищается 
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
                value = {todos} 
                onChange = { (e) => dispatch(setTask(e.target.value)) } />
            <Button 
                type = 'primary' 
                onClick={addTodo} > Add ToDo </Button>
        </div>
    )
} 

export default TaskInput;