import React, { useState } from "react";

export const SearchBox = ({ setTodos }) => {
  const [todoInput, setTodoInput] = useState("");

  const updateTodoInput = (e) => {
    setTodoInput(e.target.value);
  };

  const handleSubmitButtonClick = (e) => {
    setTodos((todos) => [...todos, { name: todoInput }]);
    setTodoInput("");
    e.preventDefault();
  };

  return (
    <form>
      <input name="todoInput" value={todoInput} onChange={updateTodoInput} />
      <button
        type="submit"
        onClick={handleSubmitButtonClick}
        disabled={todoInput === ""}
      >
        Submit
      </button>
    </form>
  );
};
