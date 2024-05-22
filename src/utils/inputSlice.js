import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
    name:"input",
    initialState:{
        notes:[]
    },
    reducers:{
        addNote:(state,action) =>{
            state.notes.unshift({
                id: new Date().toISOString(),
                title: action.payload.title,
                text:action.payload.text
            })
        },
        deleteNote:(state,action) =>{
            state.notes = state.notes.filter(note => note.id !== action.payload.id);
        }
    }
})

export const {addNote , deleteNote} = inputSlice.actions;

export default inputSlice.reducer;