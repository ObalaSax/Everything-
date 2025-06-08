export interface Todos {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface TodoState {
  todoItems: Todos[];
}

const initialState: TodoState = {
  todoItems: [],
};

export const todoSlice = {
  name: "todoSlice",
  initialState,
  reducer: {
    addTodo: () => {},
  },
};

export default todoSlice.reducer;
