import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, deleteNote, hideNoteModal } from "../utils/inputSlice";

const ModalComponent = () => {
  const noteData = useSelector((store) => store.input.modalNote) || {};

  const [title, setTitle] = useState(noteData.title);
  const [text, setText] = useState(noteData.text);
  const dispatch = useDispatch();

  const textLength = Math.floor(noteData.text.length / 40);
  console.log(textLength);

  const handleOnSubmit = (e) => {
    if (e) e.preventDefault();
    if (title.trim() || text.trim()) {
      dispatch(addNote({ ...noteData, title, text }));
      dispatch(deleteNote({...noteData}))  
      setTitle("");
      setText("");

      dispatch(hideNoteModal());
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-2 rounded-lg shadow-lg flex flex-col w-[40%] h-auto">
        <form className=" px-2" onSubmit={handleOnSubmit}>
          <input
            autoFocus
            value={title}
            className="block w-full text-lg mb-2 focus:outline-none placeholder-gray-700"
            type="text"
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
          <textarea
            cols={10}
            rows={textLength ?textLength : 5}
            value={text}
            className="w-full focus:outline-none placeholder-gray-700 h-auto"
            type="text"
            placeholder="take a note.."
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></textarea>
          <button
            type="submit"
            className="text-black hover:bg-gray-100 p-2 my-2  block"
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalComponent;
