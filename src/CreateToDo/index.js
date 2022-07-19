import React from "react";
import { TodoContext } from "../TodoContext";
import "./CreateToDo.css";

export default function CreateToDo() {
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form className="newTask-container" onSubmit={onSubmit}>
      <article className="newTask-container__flex">
        <h1 className="newTask-title">NEW TASK</h1>
        <label htmlFor="newTodo" className="newTask-box">
          <textarea
            type="text"
            value={newTodoValue}
            onChange={onChange}
            placeholder="Add your new task"
            className="newTask-input"
            id="newTodo"
          />
          <section className="newTask-footer">
            <article className="newTask-date-container">
              <div className="newTask-circle-logo"></div>
              <p className="newTask-date">Lunes 5 de agosto</p>
            </article>
            <button type="submit" className="newTask-button">
              Add
            </button>
          </section>
        </label>
      </article>
    </form>
  );
}
