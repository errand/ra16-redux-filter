import { createSlice } from "@reduxjs/toolkit";
import {nanoid} from "@reduxjs/toolkit";
import { faker } from '@faker-js/faker';

export const tasksSlice = createSlice({
  name: "tasks",
  filter: null,
  initialState: [{
    id: nanoid(),
    title: 	faker.hacker.phrase(),
    price: faker.datatype.number().toString(),
    status: ''
  },{
    id: nanoid(),
    title: 	faker.hacker.phrase(),
    price: faker.datatype.number().toString(),
    status: ''
  },{
    id: nanoid(),
    title: 	faker.hacker.phrase(),
    price: faker.datatype.number().toString(),
    status: ''
  }],
  reducers: {
    addAction: (state, action) => {
      const newTask = {
        id: nanoid(),
        title: action.payload.title,
        price: action.payload.price,
        status: action.payload.status
      }
      state.push(newTask);
    },
    deleteAction: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    editAction: (state, action) => {
      state.forEach(item => {
        if(item.status === 'editing') {
          item.status = ''
        }
      })
      state.forEach(item => {
        if(item.id === action.payload.id) {
          item.status = 'editing'
        }
      })
    },
    changeAction: (state, action) => {
      const item = state.find(item => item.id === action.payload.editingId)
      if(item) {
        item.title = action.payload.title
        item.price = action.payload.price
        item.status = ''
      } else {
        const newTask = {
          id: nanoid(),
          title: action.payload.title,
          price: action.payload.price,
          status: ''
        }
        state.push(newTask);
      }
    },
    filterAction: (state, action) => {
      state.filter = action.payload.keyword
    }
  }
});

export const {addAction, deleteAction, editAction, changeAction, filterAction} = tasksSlice.actions;

export default tasksSlice.reducer;
