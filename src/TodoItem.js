import React from "react";
import "./TodoItem.css";

export default function TodoItem(props) {
  return (
    <li className="todoItem-container">
      <span className="todoItem-delete todoItem-icon">
        <i className="fa-solid fa-xmark"></i>
      </span>
      <p>{props.text}</p>
      <span className="todoItem-complete todoItem-icon">
        <i className="fa-solid fa-circle-check"></i>
      </span>
    </li>
  );
}
