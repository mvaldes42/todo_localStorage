import { useContext, useEffect, useState } from "react";
import UpdateCxt from "../contex/UpdateCxt";
import TodoRow from "./todoRow";

export default function TodoList(props: any) {
  const update = useContext(UpdateCxt);

  const [taskList, setTaskList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  //   const [allList, setAllList] = useState([]);

  const getTasksList = () => {
    const retrievedListString = localStorage.getItem("todoListKey");
    if (retrievedListString !== null) {
      setTaskList(JSON.parse(retrievedListString));
    }
  };

  const getDoneList = () => {
    const retrievedListString = localStorage.getItem("doneTodoListKey");
    if (retrievedListString !== null) {
      setDoneList(JSON.parse(retrievedListString));
    }
  };

  useEffect(() => {
    getTasksList();
    getDoneList();
    update.setNeedsUpdate(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update.needsUpdate]);

  return (
    <div>
      {props.currentView === "Active" && taskList?.length !== 0
        ? taskList!.map((contents, index) => {
            return (
              <TodoRow
                contents={contents}
                key={index}
                setDoneList={setDoneList}
                currentView={props.currentView}
              />
            );
          })
        : null}
      {props.currentView === "Completed" && doneList?.length !== 0
        ? doneList!.map((contents, index) => {
            return (
              <TodoRow
                contents={contents}
                key={index}
                setDoneList={setDoneList}
                currentView={props.currentView}
              />
            );
          })
        : null}
    </div>
  );
}
