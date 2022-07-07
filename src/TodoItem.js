import React from "react";
import "./TodoItem.css";

export default function TodoItem(props) {
  const onComplete = () => {
    props.onComplete();
  };
  const onDelete = () => {
    props.onDelete();
  };
  return (
    <li className={`todoItem-container ${props.completed && props.estatus}`}>
      <span className="todoItem-delete todoItem-icon" onClick={onDelete}>
        <i className="fa-solid fa-xmark"></i>
      </span>
      <p>{props.text}</p>
      <span className="todoItem-complete todoItem-icon" onClick={onComplete}>
        <i className="fa-solid fa-circle-check"></i>
      </span>
    </li>
  );
}
