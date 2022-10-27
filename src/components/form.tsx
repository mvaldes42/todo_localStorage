import { useState } from "react";

export default function Form(props: any) {
  const [value, setValue] = useState<string | null>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createTask();
  };

  const createTask = () => {
    const retrievedListString = localStorage.getItem("todoListKey");
    var createdList = [];
    if (retrievedListString !== null) {
      createdList = JSON.parse(retrievedListString);
    }
    createdList.push(value);
    localStorage.setItem("todoListKey", JSON.stringify(createdList));
    props.setNeedsUpdate(true);
  };

  return (
    <div id="todoMenu1" className="todo-menu-1">
      <form onSubmit={handleSubmit}>
        <input type="submit" value=">" />
        <label>
          <input
            type="text"
            placeholder="What do you need to do?"
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
}
