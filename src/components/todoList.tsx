import { useEffect, useState } from "react";
import { TodoRow } from "./todoRow";

export default function TodoList() {
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    const retrievedListString = localStorage.getItem("todoListKey");
    if (retrievedListString !== null)
      setTaskList(JSON.parse(retrievedListString));
  }, []);
  return (
    <div>
      {taskList?.length !== 0 ? (
        taskList!.map((contents, index) => {
          return <TodoRow contents={contents}/>;
        })
      ) : (
        <span>No entries.</span>
      )}
    </div>
  );
}
