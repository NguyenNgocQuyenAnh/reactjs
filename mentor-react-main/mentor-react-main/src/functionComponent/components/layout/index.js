import React, { useState } from "react";
import AddTodo from "./AddTodo";
import ItemTodo from "./ItemTodo";

function Layout() {
  const [state, setState] = useState({
    todos: [],
    value: "",
    showTodos: true,
  });

  function onHandleChecked(id, value) {
    setState({
      ...state,
      todos: state.todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            checked: value,
          };
        }

        return item;
      }),
    });
  }

  function onHandleDeleteTodo(id) {
    setState({
      ...state,
      todos: state.todos.filter((item) => item.id !== id),
    });
  }

  function onHandeAddTodo() {
    setState({
      ...state,
      todos: [
        ...state.todos,
        {
          id: Math.random(),
          title: state.value,
          checked: false,
        },
      ],
      value: "",
    });
  }

  function onHandleChange(value) {
    setState({
      ...state,
      value, // value: value => viết gọn
    });
  }

  return (
    <>
      <AddTodo
        value={state.value}
        onHandleChange={(value) => onHandleChange(value)}
        onHandeAddTodo={() => onHandeAddTodo()}
      />
      <ItemTodo
        todos={state.todos}
        onHandleDeleteTodo={(id) => onHandleDeleteTodo(id)}
        onHandleChecked={(id, value) => onHandleChecked(id, value)}
      />
    </>
  );
}

export default Layout;
