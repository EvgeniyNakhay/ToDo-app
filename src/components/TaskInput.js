import { Button, Input} from "antd";
import React, {useState} from "react";

function TaskInput ({todo, setTodo}) {

    const [value, setValue] = useState('')

    function addTodo() {
        setTodo(
            [...todo, {
                id: todo.length !== 0 ? todo.length : 0,
                title: value, 
                done: false
            }]
        )
        setValue('')                                                             // Обнуляем input: после ввода задачи поле ввода очищается 
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
                value = {value} 
                onChange = { (e) => setValue(e.target.value) } />
            <Button 
                type = 'primary' 
                onClick={addTodo} > Add ToDo </Button>
        </div>
    )
} 

export default TaskInput;