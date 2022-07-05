import React from "react";
import "./TodoList.css";

export default function TodoList(props) {
  return (
    <section className="TodoList-container">
      <hr />
      <p className="TodoList-date">Lunes 22 de agosto</p>
      <ul className="TodoList-container--grid">{props.children}</ul>
    </section>
  );
}
