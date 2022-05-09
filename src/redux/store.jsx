import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasksSlice";
import filterReducer from "./filterSlice";

export default configureStore({
  reducer:{
    tasks: taskReducer,
    filter: filterReducer
  }
});
