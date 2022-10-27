import { useState } from "react";
import "./App.css";
import Form from "./components/form";
import TodoFooter from "./components/todoFooter";
import TodoList from "./components/todoList";

function App() {
  const [needsUpdate, setNeedsUpdate] = useState(false);

  return (
    <div className="App">
      <h1 className="title">To Do List</h1>
      <div>
        <Form setNeedsUpdate={setNeedsUpdate} />
        <TodoList needsUpdate={needsUpdate} setNeedsUpdate={setNeedsUpdate} />
        <TodoFooter />
      </div>
    </div>
  );
}

export default App;
