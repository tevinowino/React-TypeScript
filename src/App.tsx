import React, { Component } from 'react';


// Define a type for the props
interface GreetingProps {
  name: string; // name is a string
}

// Functional component with typed props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
<div>Hello, {name}!</div>};



// Define the state type
interface CounterState {
  count: number; // count is a number
}

// Define the component class with typed state
class Counter extends Component<{}, CounterState> {
  // Initialize the state with count
  state: CounterState = {
    count: 0,
  };

  // Increment function with no return value (void)
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
