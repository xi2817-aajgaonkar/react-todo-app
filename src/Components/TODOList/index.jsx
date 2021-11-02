import React from "react";

const TodoRow = ({ todoName, key }) => {
  return (
    <div>
      {todoName}
      <hr />
    </div>
  );
};

export const TodoList = ({ todos }) => {
  return (
    todos &&
    todos.map((item) => <TodoRow todoName={item.name} key={Math.random()} />)
  );
};
