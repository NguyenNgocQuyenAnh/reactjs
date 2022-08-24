import React, { Component } from "react";
import AddTodo from "./AddTodo";
import ItemTodo from "./ItemTodo";

export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      value: "",
      showTodos: true,
    };
  }

  onHandleChange(value) {
    this.setState({
      value,
    });
  }

  onHandeAddTodo() {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: Math.random(),
          title: this.state.value,
          checked: false,
        },
      ],
      value: "",
    });

    // const todosJson = localStorage.getItem("todos")
    //   ? JSON.parse(localStorage.getItem("todos"))
    //   : [];

    // localStorage.setItem(
    //   "todos",
    //   JSON.stringify([
    //     ...todosJson,
    //     {
    //       id: Math.random(),
    //       title: this.state.value,
    //       checked: false,
    //     },
    //   ])
    // );
  }

  // componentWillMount() {
  //   console.log("componentWillMount");
  //   debugger;
  // }

  componentDidMount() {
    console.log("componentDidMount");

    // const todosJson = localStorage.getItem("todos")
    //   ? JSON.parse(localStorage.getItem("todos"))
    //   : [];

    // console.log(todosJson);

    // this.setState({
    //   todos: [],
    // });

    // debugger;
  }

  // shouldComponentUpdate() {
  //   return true; // default
  // }

  componentWillUnmount() {}

  onHandleDeleteTodo(id) {
    this.setState({
      todos: this.state.todos.filter((item) => item.id !== id),
    });
  }

  onHandleChecked(id, value) {
    this.setState({
      todos: this.state.todos.map((item) => {
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

  showHideTodos() {
    this.setState({
      showTodos: !this.state.showTodos,
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.showHideTodos()}>Show/Hide Todos</button>

        {this.state.showTodos && (
          <>
            <AddTodo
              value={this.state.value}
              onHandleChange={(value) => this.onHandleChange(value)}
              onHandeAddTodo={() => this.onHandeAddTodo()}
            />
            <ItemTodo
              todos={this.state.todos}
              onHandleDeleteTodo={(id) => this.onHandleDeleteTodo(id)}
              onHandleChecked={(id, value) => this.onHandleChecked(id, value)}
            />
          </>
        )}
      </div>
    );
  }
}
