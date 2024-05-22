import React from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/configSlice";

const Head = () => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(toggleSidebar());
  };
  return (
    <div className="flex grid grid-flow-col border-b border-gray-400 items-center">
      <div className="flex col-span-2 mt-2 mx-2 pt-2 ">
        <img
          onClick={handleOnClick}
          className="h-6 m-3 "
          alt="ham"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9fZpy4cqb8TgfeMbYE5w_LXTaIMVqDLmorIZmHZ4uzA&s"
        ></img>
        <img
          className=" h-12 mx-2"
          alt="keep-icon"
          src="https://cdn-icons-png.flaticon.com/512/2965/2965358.png"
        ></img>
        <h1 className="mx-1 pt-2 text-2xl text-gray-500 ">Notes</h1>
      </div>
      <div className="col-span-10 mt-2 pt-2 px-2 ">
        <button className=" p-2 my-2 bg-yellow-300 text-gray-400 border-2 border-gray-200 border-r-0 rounded-lg rounded-r-none">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <input
          className="w-1/2  p-2 my-2 border-2 border-gray-200 border-l-0 rounded-e-lg rounded-l-none"
          type="text"
        ></input>
      </div>
      <div className="col-span-2">
        <img
          className="w-8 pt-2 mt-3"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzdC8tyLdAaX5o6jygK9y6ruUdNcAyNqLjZTW1XuN6w&s"
        ></img>
      </div>
    </div>
  );
};

export default Head;
