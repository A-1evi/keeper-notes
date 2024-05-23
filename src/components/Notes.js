import React from "react";
import Note from "./Note";
import { useSelector } from "react-redux";

const Notes = () => {
  const notes = useSelector(store => store.input.notes)
  if(!notes) return null
  return (
    <>
      <div className="flex p-2 m-2 flex-wrap">
        <div className="flex">
          {notes.map(note => <Note key={note.id} id={note.id} title={note.title} text={note.text} />)}
        </div>
      </div>
    </>
  );
};

export default Notes;
