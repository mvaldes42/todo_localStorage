import { useState } from "react";
import "./App.css";
import Form from "./components/form";
import TodoFooter from "./components/todoFooter";
import TodoList from "./components/todoList";
import UpdateCxt from "./contex/UpdateCxt";

function App() {
  const [needsUpdate, setNeedsUpdate] = useState<boolean | null>(false);

  return (
    <div className="App">
      <h1 className="title">To Do List</h1>
      <div>
        <UpdateCxt.Provider value={{ needsUpdate, setNeedsUpdate }}>
          <Form />
          <TodoList />
          <TodoFooter />
        </UpdateCxt.Provider>
      </div>
    </div>
  );
}

export default App;
