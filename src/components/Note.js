import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNoteData, deleteNote, showNoteModal } from "../utils/inputSlice";

const Note = ({ id, title, text }) => {
  const [options, setOptions] = useState(false);
  const [bgColor, setBgColor] = useState(false);

  const dispatch = useDispatch();
  const handleOnClick = () => {
    setOptions(true);
  };
  const handleDelete = () => {
    dispatch(deleteNote({ id }));
  };
  const handleBgColor = () => {
    setBgColor(!bgColor);
  };
  const handleModalOnClick = () => {
    dispatch(addNoteData({ id, title, text }));
    dispatch(deleteNote({id}));
    dispatch(showNoteModal());
  };
  return (
    <div 
      className={
        "p-2 m-2 border border-gray-300 w-60 rounded-lg " +
        (bgColor && "bg-lime-300")
      }
    >
      <div className="flex justify-between">
        <div className="pl-2 my-2  text-lg font-medium break-words ">
          {title}
        </div>
      </div>
      <div className="p-2 my-2">
        <p className="break-words ">{text.substring(0, 200) + ".."}</p>
      </div>
      <div className="m-2 p-2 " onClick={handleModalOnClick}>
        <i className="fa-solid fa-pen-to-square"></i>
      </div>
      <div className="m-2 p-2" onClick={handleOnClick}>
        <i className="fa-solid fa-ellipsis-vertical"></i>
        {options && (
          <div className="absolute -mt-5 ml-2 p-2 text-sm bg-white border border-gray-400 shadow-lg rounded-lg items-center">
            <h1
              className="text-red-500 my-2 cursor-pointer hover:bg-gray-200 py-1"
              onClick={handleDelete}
            >
              Delete note
            </h1>
            <h1
              className="text-slate-700 mb-2 cursor-pointer hover:bg-gray-200 py-1"
              onClick={handleBgColor}
            >
              Set background
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Note;
