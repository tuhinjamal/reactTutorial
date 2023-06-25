import React from "react";

export default class Clock extends React.Component {
  print() {
    return <h1>Hello {new Date().toLocaleTimeString()}</h1>;
  }
  render() {
    return <div>Hello {this.print()}</div>;
  }
}
