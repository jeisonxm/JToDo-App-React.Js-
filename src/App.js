// import logo from './logo.svg';
import "./App.css";
import React from "react";
import { TodoCounter } from "./TodoCounter";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import CreateTodoButtom from "./CreateTodoButtom";
import TodoItemCompleted from "./TodoItemCompleted";
// import { toHaveFormValues } from "@testing-library/jest-dom/dist/matchers";
//! variables
let completedTasks = [];
let newTodos = [];
let counter = 0;
let textInsideBTN = "Show Completed Tasks";
const defaulttodos = [
  { text: "cortar ceboola", completed: true },
  { text: "Tomar el curso de intro", completed: false },
  { text: "llorar con mi llorona", completed: false },
];

function App() {
  //! STATES
  const [todos, setTodos] = React.useState(defaulttodos);
  const [searchValue, setSearchValue] = React.useState("");
  const [itemEstatus, setItemEstatus] = React.useState("inactive");

  //! FUNCTIONS
  const completeTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    // newTodos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   completed: true,
    // };
    setTodos(newTodos);
  };
  completedTasks = todos.filter((todo) => todo.completed === true);

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  function estateItemFunction() {
    counter += 1;
    if (counter % 2 === 0) {
      textInsideBTN = "Show Completed Tasks";
      setItemEstatus("inactive");
    } else {
      textInsideBTN = "Hide Completed Taks";
      setItemEstatus("todoItem-completed");
    }
  }

  //* RETURN
  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoFilter searchValue={searchValue} setSearchValue={setSearchValue} />
      <hr />
      <TodoList>
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
      <button className="completedTasks" onClick={estateItemFunction}>
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
      <CreateTodoButtom />
    </>
  );
}

export default App;
