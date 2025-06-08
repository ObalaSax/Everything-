import { configureStore } from "@reduxjs/toolkit";

export const myStore = configureStore({
  reducer: {},
});

export type myRootstState = ReturnType<typeof myStore.getState>;
export type myAppDispatch = typeof myStore.dispatch;
