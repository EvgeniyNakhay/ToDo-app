import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { Button, Input, Checkbox } from 'antd';
import {deleteTask, checkTask} from '../redux/actions/tasksAction';
import {setEditedTask} from '../redux/actions/textAction';
import { setText } from "../redux/actions/textAction";

function Task () {                           //Примем переданные props 

    const dispatch = useDispatch();

    const todos = useSelector((store) => store.todos)
    const text = useSelector((store) => store.text)

    const [isEdit, setIsEdit] = useState(false)                  // По умочанию false - мы находимся вне режима редактирования
    
    const [value, setValue] = useState('')                  // Зададим state для поля редактирования
    
    const handleEdit = (id, value) => {
        setIsEdit(id)
        setValue(value)
    }

    const saveEditedTask = (id, value) => {
        setIsEdit(id)
        setValue(value)
    }
    // const deleteTask = (id) => {
    //     const newTodo = [...todos].filter(item => 
    //         item.id !== id
    //     )
    // }

    // const checkTask = (id) => {
    //     let newTodo = [...todos].filter(item => {
    //         if (item.id === id) {
    //             item.done = !item.done
    //         }
    //         return item
    //     })
    //     console.log(newTodo)
    //     // setTodo(newTodo)
    // }
    
    // const editTask = (id, title) => {
    //     setEdit(id)
    //     setValue(title)
    // }

    // const saveTask = (id) => {
    //     const newTodo = [...todos].map(item => {
    //         if (item.id === id) {
    //             item.title = value
    //         }
    //         return item
    //     })
    //     addTodo(newTodo)
    //     setEdit(null)
    // }
    
    return <>
        { todos.map( item => (
            <div key = {item.id} className='listTasks'>
                {
                    isEdit === item.id ? 
                        <div className="input-change">
                            <Input 
                            // onPressEnter={() => }
                            defaultValue={value}
                            // value = {text} 
                            onChange={(e) => dispatch(setEditedTask(e.target.value))}
                            />        {/* value - значение по умолчанию */}
                        </div>
                        :
                        <div className = { item.done ? "chekedTask" : ''}>
                            <Checkbox onClick = { () => dispatch(checkTask(item.id))} />
                            { item.title }
                        </div>
                    }

                    {
                        isEdit === item.id ?
                            <>
                            <Button type = 'primary' onClick={() => saveEditedTask(item.id, item.title)}>💾</Button>
                            </>
                            :
                            <div className="task">
                                <Button type = 'primary' onClick = { () => handleEdit(item.id, item.title)}>📝</Button>
                                <Button type = 'primary' onClick = { () => dispatch(deleteTask(item.id))}>❌</Button>
                            </div>    
                    }
                </div>
                
            ))}
        </>
}

export default Task;    