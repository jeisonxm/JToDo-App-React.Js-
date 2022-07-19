import React from "react";
import "./TodosLoading.css";

export default function TodosLoading() {
  return (
    <>
      <section className="loadingTodo-container">
        <div className="loadingTodo-check"></div>
        <div className="loadingTodo-text"></div>
      </section>
      <section className="loadingTodo-container">
        <div className="loadingTodo-check"></div>
        <div className="loadingTodo-text"></div>
      </section>
      <section className="loadingTodo-container">
        <div className="loadingTodo-check"></div>
        <div className="loadingTodo-text"></div>
      </section>
    </>
  );
}
