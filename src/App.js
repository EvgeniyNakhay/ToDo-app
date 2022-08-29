import React, { useState } from "react";
import Task from './components/Task';
import TaskInput from "./components/TaskInput";

function App() {                                              // Основная компонента, которая подключает все остальные компоненты

  const [todo, setTodo] = useState([                          // todo - наш список задач, setTodo - функция, которая меняет список todo
    {
      id: 0, title: 'First todo', done: false                 // хук useState в своих параметрах хранит начальное значение списка задач todo
    },

    {
      id: 1, title: 'Second todo', done: false
    },

    {
      id: 2, title: 'Third todo', done: false
    }
  ])
  
  return(
    <div className="App">
      <h1 className="top">ToDo list</h1>
      <Task className = 'task' todo = {todo} setTodo = {setTodo} />              {/*Передадим в качестве props значения todo и setTodo компоненте Task*/}
      <TaskInput todo = {todo} setTodo = {setTodo} />          {/*Передадим в качестве props значения todo и setTodo компоненте TaskInput*/}
    </div>
  )
}


export default App;
