import {SET_TODO, DELETE_TASK, CHECK_TASK, UPDATE_TASK} from '../actions/actionTypes';
                                                      
const initialValue = [                                 // initialValue - начальное значение
    {
        id: 0, title: 'First todo', done: false                 
      },
  
      {
        id: 1, title: 'Second todo', done: false
      },
  
      {
        id: 2, title: 'Third todo', done: false
      }
];

export default function todosReducer(state = initialValue, action) {  // 3) Создадим этот reducer
    switch (action.type) {
        case SET_TODO: {
            return [...state , {id: state.length, title: action.payload, done: false}];
        }
        case DELETE_TASK: {
          const newArr = state.filter(item => item.id !== action.payload);
          return newArr;
        }
        case CHECK_TASK: {
          return state.map(item => 
            item.id === action.payload 
              ? {...item, done: !item.done} 
              : item
          );
        }
        case UPDATE_TASK: {
          const editedArr = [];
          state.map((item) => {
              if(item.id === action.payload.id){
                  item.id = action.payload.id;
                  item.title = action.payload.title;
                  item.done = action.payload.done;
              }
          editedArr.push(item)
          })
          return editedArr;
      } 
        // case SET_EDITED_TASK: {
        //     return [...state , {id: state.length, title: action.payload, done: false}];
        // }
        // case SAVE_TASK: {
        //   return state.map(item => 
        //     item.id === action.payload 
        //       ? {...item, title: title} 
        //       : item
        //   );
        // }
        default: {
            return state;
        } 
    }
} 