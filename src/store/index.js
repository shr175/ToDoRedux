import { configureStore,createAction,createSlice } from '@reduxjs/toolkit';


const initialState = {
    tasks: []
}

const addToTaskReducer = (state = initialState,action) => {
    switch (action.type) {
        case 'submit_task': {
            return {tasks: [...state.tasks, action.payload]};
        }

        case 'delete_task':{
            const updatedTasks = []
            state.tasks.forEach( (task) => 
            {
                // console.log("task",task)
                if(task.id!==action.payload.id) {
                updatedTasks.push(task)
            //    console.log("inside if",updatedTasks);
        } 
    })
            // console.log("payload ",action.payload);
            // console.log(state.tasks);
            // console.log("delete_task_reached",updatedTasks);
            //comenting for better reach
            return {tasks: updatedTasks}
       
             
           }

        case 'update_task':{
            return {tasks: [...state.tasks[action.payload],action.payload]};
        
        } 
        default:
            return state;
    }
}

export const actions = addToTaskReducer.actions;

const store = configureStore({
    reducer:addToTaskReducer
})


export default store;