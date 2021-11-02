import { useState } from "react";
import "./App.css";
import { SearchBox } from "./Components/SearchBox";
import { TodoList } from "./Components/TODOList";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <SearchBox setTodos={setTodos} />
        <TodoList todos={todos} />
      </header>
    </div>
  );
}

export default App;
