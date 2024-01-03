import { createSlice } from "@reduxjs/toolkit";
const initTodos = [
  {
    name: "Call my mom",
    dueDate: new Date().toLocaleDateString(),
    user_id: 1,
  },

  {
    name: "Go to school",
    dueDate: new Date().toLocaleDateString(),
    user_id: 1,
  },

  {
    name: "Do homework",
    dueDate: new Date().toLocaleDateString(),
    user_id: 1,
  },
];

export const todosSlice = createSlice({
  name: "todos",
  initialState: initTodos,
  reducers: {
    addTodo(state, action) {
      console.log("reducer", state, action);
      state.push(action.payload);
    },
    removeTodo(state, action) {
      return state.filter((todo) => todo.name !== action.payload.name);
    },
  },
});
console.log(todosSlice);
const { actions, reducer } = todosSlice;
export const { addTodo, removeTodo } = actions;
export default reducer;
