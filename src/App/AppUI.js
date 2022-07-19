import "./AppUI.css";
import React from "react";
import { TodoContext } from "../TodoContext";
//components
import { TodoCounter } from "../TodoCounter";
import TodoFilter from "../TodoFilter";
import TodoList from "../TodoList";
import TodoItem from "../TodoItem";
import CreateTodoButtom from "../CreateTodoButtom";

function AppUI() {
  return (
    <React.Fragment>
      <TodoContext.Consumer>
        {({
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
        }) => (
          <>
            <TodoCounter total={totalTodos} completed={completedTodos} />
            <TodoFilter
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
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
        )}
      </TodoContext.Consumer>
    </React.Fragment>
  );
}

export { AppUI };
