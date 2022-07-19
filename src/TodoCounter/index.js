import React from "react";
import "./TodoCounter.css";
// const estilos = {
//   color: "red",
//   backgroundColor: "yellow",
// };
function TodoCounter({ total, completed }) {
  if (total === 0) {
    return (
      <h2 className="TodoCounter">
        You don't have todos! Let's write your first
      </h2>
    );
  } else if (completed === 0) {
    return (
      <h2 className="TodoCounter">
        Heyy!! You have {total} todo to complete <br /> let's start with the
        first.
      </h2>
    );
  } else if (total === completed) {
    return (
      <h2 className="TodoCounter">
        You are the best. You have already completed all of the tasks you
        assigned!!
      </h2>
    );
  } else {
    return (
      <h2
        className="TodoCounter"
        // style={estilos}
      >
        Congratulations you have completed: <br />
        <b>
          {completed} tasks of {total}
        </b>
      </h2>
    );
  }
}

export { TodoCounter };
