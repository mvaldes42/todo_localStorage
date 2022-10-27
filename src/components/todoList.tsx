import { useContext, useEffect, useState } from "react";
import UpdateCxt from "../contex/UpdateCxt";
import TodoRow from "./todoRow";

export default function TodoList(props: any) {
  const update = useContext(UpdateCxt);

  const [taskList, setTaskList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  useEffect(() => {
    const retrievedListString = localStorage.getItem("todoListKey");
    if (retrievedListString !== null) {
      setTaskList(JSON.parse(retrievedListString));
      update.setNeedsUpdate(false);
    }
  }, [update.needsUpdate]);

  return (
    <div>
      {taskList?.length !== 0 ? (
        taskList!.map((contents, index) => {
          return (
            <TodoRow
              contents={contents}
              key={index}
              setDoneList={setDoneList}
            />
          );
        })
      ) : (
        <span>No entries.</span>
      )}
    </div>
  );
}
