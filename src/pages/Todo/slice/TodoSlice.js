import TodoService from "../service/TodoService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const service = TodoService();

export const getTodoAction = createAsyncThunk("todo/getTodo", async () => {
  return await service.getAll();
});

export const postTodoAction = createAsyncThunk(
  " todo/postTodo",
  async (payload, thunkAPI) => {
    const response = await service.create(payload);
    await thunkAPI.dispatch(getTodoAction());
    return response;
  }
);

export const updateTodoAction = createAsyncThunk(
  "todo/updateTodo",
  async (payload, thunkAPI) => {
    await service.update(payload);
    const response = await thunkAPI.dispatch(getTodoAction());
    return response.payload;
  }
);

export const deleteTodoAction = createAsyncThunk(
  "todo/deleteTodo",
  async (payload, thunkAPI) => {
    await service.deleteTodo(payload);
    const response = await thunkAPI.dispatch(getTodoAction());
    return response.payload;
  }
);

const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    todo: null,
    isLoading: false,
    message: "",
  },

  reducers: {
    add: (state, { payload }) => {
      state.todos.push(payload);
    },
    remove: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
    selectedTodo: (state, { payload }) => {
      state.todo = payload;
    },
    update: (state, { payload }) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === payload.id) {
          return { ...payload };
        }
        return todo;
      });
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getTodoAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getTodoAction.fulfilled, (state, { payload }) => {
      state.todos = payload;
      state.isLoading = false;
    });
    builder.addCase(getTodoAction.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(postTodoAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(postTodoAction.fulfilled, (state, { payload }) => {
      state.todos = payload;
      state.isLoading = false;
    });
    builder.addCase(postTodoAction.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateTodoAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateTodoAction.fulfilled, (state, { payload }) => {
      state.todos = payload;
      state.isLoading = false;
    });
    builder.addCase(updateTodoAction.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteTodoAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTodoAction.fulfilled, (state, { payload }) => {
      state.todos = payload;
      state.isLoading = false;
    });
    builder.addCase(deleteTodoAction.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { add, remove, selectedTodo, update } = TodoSlice.actions;

export default TodoSlice;
