import { useState } from "react";

export default function Form() {
  const [value, setValue] = useState<string | null>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    alert("A name was submitted: " + value);
    event.preventDefault();
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
