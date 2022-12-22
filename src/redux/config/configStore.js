import { configureStore } from "@reduxjs/toolkit";

import todosSlice from "../module/todosSlice";
const store = configureStore({
  reducer: { todos: todosSlice },
});

export default store;
