import React from "react";

import "./index.css";

export default function ItemTodo(props) {
  const { todos, onHandleChecked, onHandleDeleteTodo } = props;

  return (
    <ul>
      {todos.map((item, index) => {
        return (
          <li key={item.id} style={{ display: "flex", alignItems: "center" }}>
            <input
              type="checkbox"
              onChange={(e) => onHandleChecked(item.id, e.target.checked)}
            />

            <p
              style={{ margin: 15 }}
              className={item.checked ? "lineThrough" : ""}
            >
              {item.title}
            </p>

            <div onClick={() => onHandleDeleteTodo(item.id)}>X</div>
          </li>
        );
      })}
    </ul>
  );
}
