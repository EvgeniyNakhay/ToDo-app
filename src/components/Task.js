import React, {useState} from "react";
import { Button, Input, Checkbox } from 'antd';

function Task ({ todo, setTodo}) {                           //Примем переданные props 

    const [edit, setEdit] = useState(null)                  // По умочанию false - мы находимся вне режима редактирования
    
    const [value, setValue] = useState('')                  // Зададим state для поля редактирования
    
    const deleteTask = (id) => {
        const newTodo = [...todo].filter(item => 
            item.id !== id
        )
        setTodo(newTodo)
    }

    const checkTask = (id) => {
        let newTodo = [...todo].map(item => {
            if (item.id === id) {
                item.done = !item.done
            }
            return item
        })
        console.log(newTodo)
        setTodo(newTodo)
    }
    
    const editTask = (id, title) => {
        setEdit(id)
        setValue(title)
    }

    const saveTask = (id) => {
        const newTodo = [...todo].map(item => {
            if (item.id === id) {
                item.title = value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }
    
    return (
        <>
            { todo.map( item => (
                <div key = {item.id} className='listTasks'>
                    {
                        edit === item.id ? 
                            <div className="input-change">
                                 <Input onChange={(e) => setValue(e.target.value)} value={value}/>        {/* value - значение по умолчанию */}
                            </div>
                            :
                            <div className = { item.done ? "chekedTask" : ''}>
                                <Checkbox onClick = { () => checkTask(item.id) } />
                                { item.title }
                            </div>
                    }

                    {
                        edit === item.id ?
                            <>
                                <Button type = 'primary' onClick={() => saveTask(item.id)}>💾</Button>
                            </>
                            :
                            <div className="task">
                                <Button type = 'primary' onClick = { () => editTask(item.id, item.title)}>📝</Button>
                                <Button type = 'primary' onClick = { () => deleteTask(item.id)}>❌</Button>
                            </div>
                    }
                </div>
                
            ))}
        </>
    )
}

export default Task;