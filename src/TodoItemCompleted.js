import React from "react";
import "./TodoItemCompleted.css";

export default function TodoItemCompleted(props) {
  const showMore = () => {};
  const onDelete = () => {
    props.onDelete();
  };
  return (
    <>
      <button onClick={showMore}></button>
      <li
        className={`todoItem-container ${
          props.completed && "todoItem-completed"
        }`}
      >
        <span className="todoItem-delete todoItem-icon" onClick={onDelete}>
          <i className="fa-solid fa-xmark"></i>
        </span>
        <p>{props.text}</p>
        <span className="todoItem-complete todoItem-icon">
          <i className="fa-solid fa-circle-check"></i>
        </span>
      </li>
    </>
  );
}
