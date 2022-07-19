// import logo from './logo.svg';
//! IMPORTS
import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

// const defaulttodos = [
//   { text: "cortar ceboola", completed: true },
//   { text: "Tomar el curso de intro", completed: false },
//   { text: "llorar con mi llorona", completed: false },
// ];

function App() {
  //* UI
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}

export default App;
