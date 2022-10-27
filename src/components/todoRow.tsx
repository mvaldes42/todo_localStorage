import { useContext } from "react";
import UpdateCxt from "../contex/UpdateCxt";

export default function TodoRow(props: any) {
  const update = useContext(UpdateCxt);

  const handleChange = () => {
    addTaskToDone();
    removeTask();
    update.setNeedsUpdate(true);
  };

  const addTaskToDone = () => {
    const retrievedListString = localStorage.getItem("doneTodoListKey");
    var createdList = [];
    if (retrievedListString !== null) {
      createdList = JSON.parse(retrievedListString);
    }
    createdList.push(props.contents);
    localStorage.setItem("doneTodoListKey", JSON.stringify(createdList));
  };

  const removeTask = () => {
    const retrievedListString = localStorage.getItem("todoListKey");
    var createdList = [];
    if (retrievedListString !== null) {
      createdList = JSON.parse(retrievedListString);
    }
    createdList.splice(createdList.indexOf(props.contents), 1);
    localStorage.setItem("todoListKey", JSON.stringify(createdList));
    localStorage.setItem(
      "todoListNumberKey",
      JSON.stringify(createdList.length)
    );
  };

  return (
    <div>
      {props.currentView === "Completed" ? null : (
        <input type="checkbox" onChange={handleChange} />
      )}
      {props.contents}
    </div>
  );
}
