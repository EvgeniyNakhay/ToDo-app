import Task from './components/Task';
import TaskInput from "./components/TaskInput";
import {Provider} from 'react-redux';
import store from './redux/store';

function App() {                                             
  return(
    <div className="App">
      <h1 className="top">ToDo list</h1>
      <Provider store = {store}>                {/* 1) Оборачиваем в Provider компоненты, которым будет доступен store */}
      <Task className = 'task'/>
      <TaskInput/>          
      </Provider>
    </div>
  )
}


export default App;
