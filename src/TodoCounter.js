import React from "react";
import "./TodoCounter.css";
// const estilos = {
//   color: "red",
//   backgroundColor: "yellow",
// };
function TodoCounter() {
  return (
    <h2
      className="TodoCounter"
      // style={estilos}
    >
      Has completado 2 de 3 TODO
    </h2>
  );
}

export { TodoCounter };
