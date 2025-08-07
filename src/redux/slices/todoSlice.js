import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // add task
    addTask: (state, { payload }) => {
      const index = state.todo.findIndex((el) => {
        return el.title === payload.title;
      });

      // If cannot find the same, add to the todo
      if (index === -1) {
        state.todo.push(payload);
      }
    },

    // toggle task
    toggleTask: (state, { payload }) => {
      const todo = state.todo.find((el) => el.title === payload.title);
      // If todo is found
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },

    // edit task
    editTask: (state, { payload }) => {
      console.log(`oldTitle : ${payload.oldTitle}`);
      console.log(`newTitle : ${payload.newTitle}`);

      // find data of an old title
      const data = state.todo.find((el) => el.title === payload.oldTitle);
      Object.assign(data, { title: payload.newTitle });
    },

    // remove task
    removeTask: (state, { payload }) => {
      const index = state.todo.findIndex((el) => {
        return el.title === payload.title;
      });

      state.todo.splice(index, 1);
    },
  },
});

// Export action
export const { addTask, toggleTask, editTask, removeTask } = todoSlice.actions;

// Export reducer
export default todoSlice.reducer;
