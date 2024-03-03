import React, { Component } from "react";

class CounterApp extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    // Get the previous count value
    const prevCount = this.state.count;

    // Get the number of times to increment
    const plus = 1;

    // Update the count based on the number of times to increment
    this.setState({ count: prevCount + plus });
  };

  decrement = () => {
    // Get the previous count value
    const prevCount = this.state.count;

    // Get the number of times to decrement
    const minus = 1;

    // Update the count based on the number of times to decrement
    this.setState({ count: prevCount - minus });
  };

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default CounterApp;