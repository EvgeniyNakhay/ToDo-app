import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { Button, Input, Checkbox } from 'antd';
import {deleteTask, checkTask, updateTask} from '../redux/actions/tasksAction';
import { setEditedText } from "../redux/actions/editedTextAction";

function Task () {                           

    const dispatch = useDispatch();

    const todos = useSelector((store) => store.todos)
    const editedText = useSelector((store) => store.editedText)

    const [isEdit, setIsEdit] = useState(false)                  // По умочанию false - мы находимся вне режима редактирования
    
    function handleEdit(id) {
        setIsEdit(id)
    }
    
    function updateTaskClick(id) {
        dispatch(updateTask(id, editedText))
        setIsEdit(false)
    }
    
    return <>
        { todos.map( item => (
            <div key = {item.id} className='listTasks'>
                {
                    isEdit === item.id ?  
                        <div className="input-change">
                            <Input 
                            onPressEnter={() => updateTaskClick(item.id)}
                            defaultValue={item.title} 
                            onChange={(e) => dispatch(setEditedText(e.target.value))}
                            />        
                        </div>
                        :
                        <div className = { item.done ? "chekedTask" : ''}>
                            <Checkbox onClick = { () => dispatch(checkTask(item))} />
                            { item.title }
                        </div>
                    }

                    {
                        isEdit === item.id ?
                            <>
                            <Button type = 'primary' onClick={() => updateTaskClick(item.id)}>💾</Button>
                            </>
                            :
                            <div className="task">
                                <Button type = 'primary' onClick = { () => handleEdit(item.id)}>📝</Button>
                                <Button type = 'primary' onClick = { () => dispatch(deleteTask(item.id))}>❌</Button>
                            </div>    
                    }
                </div>
                
            ))}
        </>
}

export default Task;    