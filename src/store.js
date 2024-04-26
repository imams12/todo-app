import { configureStore } from "@reduxjs/toolkit"
import TodoSlice from "./pages/Todo/slice/TodoSlice";

const store = configureStore({
    reducer:{
        todo: TodoSlice.reducer
    }
})

export default store;