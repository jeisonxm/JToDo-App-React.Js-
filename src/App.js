// import logo from './logo.svg';
// import './App.css';
import { TodoCounter } from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import CreateTodoButtom from "./CreateTodoButtom";
const todos = [
  { text: "cortar ceboola", completed: false },
  { text: "Tomar el curso de intro", completed: false },
  { text: "llorar con mi llorona", completed: false },
];
function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButtom />
    </>
  );
}

export default App;
