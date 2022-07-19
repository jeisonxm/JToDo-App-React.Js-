import "./AppUI.css";
import React from "react";
import { TodoContext } from "../TodoContext";
//components
import { TodoCounter } from "../TodoCounter";
import TodoFilter from "../TodoFilter";
import TodoList from "../TodoList";
import TodoItem from "../TodoItem";
import CreateTodoButtom from "../CreateTodoButtom";
import { Modal } from "../Modal";
import CreateToDo from "../CreateToDo";
import TodosError from "../TodosError";
import EmptyTodos from "../EmptyTodos";
import TodosLoading from "../TodosLoading";

//! PARA CREAR COMPONENTES USAR 'rfc'
// rfc react functional components

function AppUI() {
  const {
    completedTasks,
    textInsideBTN,
    searchedTodos,
    loading,
    error,
    totalTodos,
    completedTodos,
    completeTodos,
    searchValue,
    setSearchValue,
    deleteTodos,
    estateItemFunction,
    itemEstatus,
    setOpenModal,
    openModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoFilter searchValue={searchValue} setSearchValue={setSearchValue} />
      <hr />
      <TodoList>
        {error && <TodosError />}
        {loading && <TodosLoading />}
        {!loading && !totalTodos && <EmptyTodos />}
        {searchedTodos.map((todo) => {
          return (
            <TodoItem
              estatus="inactive"
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodos(todo.text)}
              onDelete={() => deleteTodos(todo.text)}
            />
          );
        })}
      </TodoList>
      <button
        className={`completedTasks ${!totalTodos && "inactive"}`}
        onClick={estateItemFunction}
      >
        {textInsideBTN}
      </button>
      <TodoList>
        {completedTasks.map((todo) => {
          return (
            <TodoItem
              estatus={itemEstatus}
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onIncomplete={() => completeTodos(todo.text)}
              onDelete={() => deleteTodos(todo.text)}
            />
          );
        })}
      </TodoList>

      {!!openModal && (
        <Modal>
          <CreateToDo />
        </Modal>
      )}

      <CreateTodoButtom setOpenModal={setOpenModal} openModal={openModal} />
    </>
  );
}

export { AppUI };
