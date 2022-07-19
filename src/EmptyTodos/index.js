import React from "react";
import "./EmptyTodos.css";

export default function EmptyTodos() {
  return (
    <>
      <section className="emptyTodo-container">
        <p className="emptyTodo-text">Write your first ToDo in:</p>
        <span className="emptyTodo-icon">
          {" "}
          <i className="fa-solid fa-circle-plus"></i>
        </span>
      </section>
      <section className="emptyTodo-container">
        <p className="emptyTodo-text">You can search your Todos in:</p>
        <span className="emptyTodo-icon second">
          {" "}
          <i className="fa-solid fa-filter"></i>
        </span>
      </section>
    </>
  );
}
