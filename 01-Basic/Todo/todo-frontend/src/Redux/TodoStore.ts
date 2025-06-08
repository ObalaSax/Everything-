import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./Slices/todoSlice";

export const todoStore = configureStore({
  reducer: { todoSlice: todoSlice.reducer },
});

export type myTodoState = ReturnType<typeof todoStore.getState>;
export type myTodoDispatch = typeof todoStore.dispatch;
export default todoStore;
