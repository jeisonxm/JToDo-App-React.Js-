import React from "react";

export default function TodoItem(props) {
  return (
    <li>
      <span>X</span>
      <p>{props.text}</p>
      <span>C</span>
    </li>
  );
}
