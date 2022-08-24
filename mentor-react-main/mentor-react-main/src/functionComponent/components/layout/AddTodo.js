import React from "react";

export default function AddTodo(props) {
  // props = {
  //   value: "123",
  // };
  const { value, onHandleChange, onHandeAddTodo } = props;

  return (
    <div>
      <input
        value={value}
        onChange={(e) => onHandleChange(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={onHandeAddTodo}>Add</button>
    </div>
  );
}
