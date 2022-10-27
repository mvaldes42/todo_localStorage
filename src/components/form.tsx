import { useContext, useState } from "react";
import UpdateCxt from "../contex/UpdateCxt";

export default function Form() {
  const update = useContext(UpdateCxt);
  const [value, setValue] = useState<string | null>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createTask();
  };

  const createTask = () => {
    const retrievedDoneListString = localStorage.getItem("doneTodoListKey");
    const retrievedListString = localStorage.getItem("todoListKey");
    var doneList = [];
    var createdList = [];
    if (retrievedListString !== null) {
      createdList = JSON.parse(retrievedListString);
    }
    if (retrievedDoneListString !== null) {
      doneList = JSON.parse(retrievedDoneListString);
    }
    if (value === "") alert("Entry is empty!");
    else if (createdList.includes(value))
      alert("Task <" + value + "> already exists");
    else if (doneList.includes(value))
      alert("Task <" + value + "> is already done!");
    else createdList.push(value);
    localStorage.setItem("todoListKey", JSON.stringify(createdList));
    localStorage.setItem(
      "todoListNumberKey",
      JSON.stringify(createdList.length)
    );
    update.setNeedsUpdate(true);
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
