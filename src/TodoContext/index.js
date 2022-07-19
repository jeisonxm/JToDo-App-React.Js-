import React from "react";
import { useLocalStorage } from "../useLocalStorage";

const TodoContext = React.createContext();
//! variables
let completedTasks = [];
let newTodos = [];
let counter = 0;
let textInsideBTN = "Show Completed Tasks";

function TodoProvider(props) {
  //! STATES
  const [searchValue, setSearchValue] = React.useState("");
  const [itemEstatus, setItemEstatus] = React.useState("inactive");
  const {
    Item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [openModal, setOpenModal] = React.useState(false);
  const totalTodos = todos.length;
  //! FUNCTIONS

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    // newTodos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   completed: true,
    // };
    // setTodos(newTodos);
    saveTodos(newTodos);
  };

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    // setTodos(newTodos);
    saveTodos(newTodos);
  };
  React.useEffect(() => {
    console.log("use effect");
  }, [totalTodos]);
  // El array nos permite poner condicionales para el use Effect
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
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
  completedTasks = searchedTodos.filter((todo) => todo.completed === true);
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

  const addTodo = (texts) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text: texts,
    });
    saveTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        completedTasks,
        newTodos,
        counter,
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
        openModal,
        setOpenModal,
        addTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}
export { TodoContext, TodoProvider };
