// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { TodoCounter } from "./TodoCounter";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import CreateTodoButtom from "./CreateTodoButtom";
const defaulttodos = [
  { text: "cortar ceboola", completed: true },
  { text: "Tomar el curso de intro", completed: false },
  { text: "llorar con mi llorona", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaulttodos);
  const [searchValue, setSearchValue] = React.useState("");

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

  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoFilter searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButtom />
    </>
  );
}

export default App;
