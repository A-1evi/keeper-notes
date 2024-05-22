import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteNote } from "../utils/inputSlice";

const Note = ({ id, title, text }) => {
  const [div, setDiv] = useState(false);
  const [bgColor , setBgColor] = useState(false);
  const dispatch = useDispatch();
  const handleOnClick = () => {
    setDiv(!div);
  };
  const handleDelete = () =>{
    dispatch(deleteNote({id}))
  }
  const handleBgColor = () =>{
    setBgColor(!bgColor)
  }
  return (
    <div className= {"p-2 m-2 border  border-gray-300 w-60 rounded-lg " + (bgColor &&"bg-lime-300")}>
      <div className="flex justify-between">
        <div className="p-2 my-2 text-lg font-medium">
          {title}
        </div>
        <div className="m-2 p-2" onClick={handleOnClick}>
          <i class="fa-solid fa-ellipsis-vertical"></i>
          {div && (
            <div className="absolute p-2 m-2 text-sm bg-white border border-gray-400 shadow-lg rounded-lg">
              <h1 className="text-red-500 my-2 cursor-pointer" onClick={handleDelete}>Delete note</h1>
              <h1 className="text-slate-700 mb-2 cursor-pointer " onClick={handleBgColor}>Set background</h1>
            </div>
          )}
        </div>
      </div>
      <div className="p-2 my-2 ">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Note;
