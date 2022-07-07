import React from "react";
import "./TodoCounter.css";
// const estilos = {
//   color: "red",
//   backgroundColor: "yellow",
// };
function TodoCounter({ total, completed }) {
  return (
    <h2
      className="TodoCounter"
      // style={estilos}
    >
      Congratulations you have completed {completed} tasks of {total}
    </h2>
  );
}

export { TodoCounter };
