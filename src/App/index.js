// import logo from './logo.svg';
//! IMPORTS
import "./App.css";
import React from "react";
import { TodoCounter } from "../TodoCounter";
import TodoFilter from "../TodoFilter";
import TodoList from "../TodoList";
import TodoItem from "../TodoItem";
import CreateTodoButtom from "../CreateTodoButtom";

//! REACT HOOKS
function useLocalStorage(itemName, initialValue) {
  //? Metele mente
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  // Aqui marcamos el estado del item, por ejemplo como parseditem va ser el valor del item tanto si existe o no, sera el estado que se marcara
  const [Item, setItem] = React.useState(initialValue);
  React.useEffect(() => {
    setTimeout(() => {
      try {
        // aui optenemos el item que deseemos, es decir lo que queramos usar
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        // Si el item no existe lo creamos, y si existe lo usamos
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch {
        setError(true);
      }
    }, 1000);
  });

  // Aqui guardamos un item, logramos obtener una funcion que nos permite meter cualquier cosa que queramos guardar en nuestro item, al meterlo entra el itemName.
  const saveItem = (newItem) => {
    try {
      const stringItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return { Item, saveItem, loading, error };
}

//! variables
let completedTasks = [];
let newTodos = [];
let counter = 0;
let textInsideBTN = "Show Completed Tasks";

// const defaulttodos = [
//   { text: "cortar ceboola", completed: true },
//   { text: "Tomar el curso de intro", completed: false },
//   { text: "llorar con mi llorona", completed: false },
// ];

///                                                                         //
//*FUNCTION APP
///                                                                         //

function App() {
  //! STATES
  const [searchValue, setSearchValue] = React.useState("");
  const [itemEstatus, setItemEstatus] = React.useState("inactive");
  const {
    Item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
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
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //* UI
  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoFilter searchValue={searchValue} setSearchValue={setSearchValue} />
      <hr />
      <TodoList>
        {error && <p>Estamos cagados</p>}
        {loading && <p>Estamos Cargando</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer ToDo</p>}
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
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}

export default App;
