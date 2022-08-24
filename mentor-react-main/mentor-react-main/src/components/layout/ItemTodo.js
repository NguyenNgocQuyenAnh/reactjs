import React, { Component } from "react";

import "./index.css";

export default class ItemTodo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //textDecoration: "line-through"
    return (
      <ul>
        {this.props.todos.map((item, index) => {
          return (
            <li key={item.id} style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                onChange={(e) =>
                  this.props.onHandleChecked(item.id, e.target.checked)
                }
              />

              <p
                style={{ margin: 15 }}
                className={item.checked ? "lineThrough" : ""}
              >
                {item.title}
              </p>

              <div onClick={() => this.props.onHandleDeleteTodo(item.id)}>
                X
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}
