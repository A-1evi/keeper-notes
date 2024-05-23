import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
  name: "input",
  initialState: {
    notes: [],
    modalNote: {
      title: "",
      text: "",
    },
    showNoteModal: false,
  },
  reducers: {
    addNote: (state, action) => {
      state.notes.unshift({
        id: new Date().toISOString(),
        title: action.payload.title,
        text: action.payload.text,
      });
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload.id);
    },
    addNoteData: (state, action) => {
      state.modalNote = {

        id: action.payload.id,
        title: action.payload.title,
        text: action.payload.text,
      };
    },
    showNoteModal: (state) => {
      state.showNoteModal = !state.showNoteModal;
    },
    hideNoteModal(state) {
      state.showNoteModal = false;
    },
   
  },
});

export const {
  addNote,
  deleteNote,
  addNoteData,
  showNoteModal,
  hideNoteModal,
  
} = inputSlice.actions;

export default inputSlice.reducer;
