import React, {  useState } from "react";
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
    e.preventDefault();
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
    <div className="mx-auto w-1/2 py-2 my-5 shadow-inner border border-gray-300 rounded-lg ">
      {showInput ? (
        <form className=" px-2 my-2" onSubmit={handleFormSubmit}>
          <input
            value={title}
            className="block w-full text-lg mb-2 focus:outline-none"
            type="text"
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
          <input
            value={text}
            className="w-full focus:outline-none"
            type="text"
            placeholder="take a note.."
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></input>
          <button type="submit" className="hidden">
            Submit
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
