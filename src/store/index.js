import { configureStore,createAction,createSlice } from '@reduxjs/toolkit';


const initialState = {
    tasks: []
}

const addToTaskReducer = (state = initialState,action) => {
    switch (action.type) {
        case 'submit_task': {
            return {tasks: [...state.tasks, action.payload]};
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