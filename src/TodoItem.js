import React from "react";
import "./TodoItem.css";

export default function TodoItem(props) {
  return (
    <li className="todoItem-container">
      <span className="todoItem-delete todoItem-icon">
        <i class="fa-solid fa-delete-left"></i>
      </span>
      <p>{props.text}</p>
      <span className="todoItem-complete todoItem-icon">
        <i class="fa-solid fa-circle-check"></i>
      </span>
    </li>
  );
}
