import React, { Component } from "react";

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    console.log("unmounting");
  }

  render() {
    return (
      <div>
        <input
          value={this.props.value}
          onChange={(e) => this.props.onHandleChange(e.target.value)}
          placeholder="Enter todo"
        />
        <button onClick={this.props.onHandeAddTodo}>Add</button>
      </div>
    );
  }
}
