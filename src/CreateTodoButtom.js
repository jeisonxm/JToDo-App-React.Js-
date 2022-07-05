import React from "react";
import "./CreateTodoButtom.css";
export default function CreateTodoButtom() {
  return (
    <>
      <button className="addButton">
        <i class="fa-solid fa-circle-plus"></i>
      </button>
      <section className="newTask-container inactive">
        <article className="newTask-container__flex">
          <h1 className="newTask-title">NEW TASK</h1>
          <article className="newTask-box">
            <input
              type="text"
              placeholder="Add your new task"
              className="newTask-input"
            />
            <div className="newTask-date-container">
              <div className="newTask-circle-logo"></div>
              <p className="newTask-date">Lunes 5 de agosto</p>
              <button className="newTask-button">Add</button>
            </div>
          </article>
        </article>
      </section>
    </>
  );
}
