import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'tasks',
  initialState:[],
  reducers: {
      saveTodo: ( state, action) => {
        let count = 0;
          const task = {
              id: count++,
              name: action.payload.name,
              description: action.payload.description,
              iscomplete: false
        }
        state.push(task);
    }
  }
});
export const { saveTodo } = todoSlice.actions
export default todoSlice