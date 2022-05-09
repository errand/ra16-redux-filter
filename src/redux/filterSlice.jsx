import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  filter: null,
  initialState: [],
  reducers: {
    filterAction: (state, action) => {
      return state.filter(item => item.includes(action.payload.keyword))
    }
  }
});

export const { filterAction} = filterSlice.actions;

export default filterSlice.reducer;
