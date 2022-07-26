import { configureStore, createSlice } from "@reduxjs/toolkit";

// export const addToDo = createAction("ADD")
// export const deleteToDo = createAction("DELETE");

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => state.filter(toDo => toDo.id !== action.payload)
  }
});

const store = configureStore({ reducer: toDos.reducer })

console.log(toDos.actions);

export const { add, remove } = toDos.actions;

export default store;
