import { useEffect, useState } from "react";
import { TodoRow } from "./todoRow";

export default function TodoList(props: any) {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    console.log("needsUpdate", props.needsUpdate);
    const retrievedListString = localStorage.getItem("todoListKey");
    if (retrievedListString !== null && props.needsUpdate === true) {
      setTaskList(JSON.parse(retrievedListString));
      props.setNeedsUpdate(false);
    }
  }, [props.needsUpdate]);

  return (
    <div>
      {taskList?.length !== 0 ? (
        taskList!.map((contents, index) => {
          return <TodoRow contents={contents} key={index} />;
        })
      ) : (
        <span>No entries.</span>
      )}
    </div>
  );
}
