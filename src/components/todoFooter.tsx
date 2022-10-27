import { useContext, useEffect, useState } from "react";
import UpdateCxt from "../contex/UpdateCxt";

export default function TodoFooter(props: any) {
  const update = useContext(UpdateCxt);

  const [itemsLeft, setItemsLeft] = useState<number>(0);

  useEffect(() => {
    const retrievedNumberLeftStr = localStorage.getItem("todoListNumberKey");
    if (retrievedNumberLeftStr !== null) {
      setItemsLeft(JSON.parse(retrievedNumberLeftStr));
    }
  }, [update.needsUpdate]);

  const handleActive = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    props.setCurrentView("Active")
  };

  const handleCompleted = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    props.setCurrentView("Completed");
  };

  return (
    <div>
      <p>Todos letf: {itemsLeft}</p>
      <button> All </button>
      <button onClick={handleActive}> Active </button>
      <button onClick={handleCompleted}> Completed </button>
    </div>
  );
}
