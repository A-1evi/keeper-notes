import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../utils/inputSlice";

const InputBox = () => {
  const [showInput, setShowInput] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleOnClick = () => {
    setShowInput(true);
  };

  const handleFormSubmit = (e) => {
    if (e) e.preventDefault();
    if (title.trim() || text.trim()) {
      dispatch(
        addNote({
          title: title.trim(),
          text: text.trim(),
        })
      );

      setTitle("");
      setText("");

      setShowInput(false);
    }
  };

  return (
    <div className="mx-auto w-1/2 py-2 my-5 shadow-xl border border-gray-400 rounded-lg ">
      {showInput ? (
        <form className=" px-2 my-2 " onSubmit={handleFormSubmit}>
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
            value={text}
            className="w-full focus:outline-none placeholder-gray-700"
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
      ) : (
        <div className="w-full p-1 " onClick={handleOnClick}>
          Take a Note...
        </div>
      )}
    </div>
  );
};

export default InputBox;
