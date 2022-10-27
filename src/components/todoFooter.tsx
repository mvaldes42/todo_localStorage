import { useContext, useEffect, useState } from "react";
import UpdateCxt from "../contex/UpdateCxt";

export default function TodoFooter() {
  const update = useContext(UpdateCxt);

  const [itemsLeft, setItemsLeft] = useState<number>(0);

  useEffect(() => {
    const retrievedNumberLeftStr = localStorage.getItem("todoListNumberKey");
    if (retrievedNumberLeftStr !== null) {
      setItemsLeft(JSON.parse(retrievedNumberLeftStr));
    }
  }, [update.needsUpdate]);

  return (
    <div>
      <p>Todos letf: {itemsLeft}</p>
      <button> All </button>
      <button> Active </button>
      <button> Completed </button>
    </div>
  );
}
