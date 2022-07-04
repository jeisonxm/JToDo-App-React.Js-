import React from "react";

export default function TodoList(props) {
  return (
    <section>
      <ul>{props.childern}</ul>
    </section>
  );
}
