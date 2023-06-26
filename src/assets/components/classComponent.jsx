import React from "react";

class Clock extends React.Component {
  state = {
    date: new Date(),
  };
  // bewlow's consturctor is need where there need to initiallize something otherwise like given example  above will enough
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     date: new Date(),
  //   };
  // }
  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  print() {
    return (
      <h1>
        Hello {this.state.date.toLocaleTimeString(this.props.locale)}{" "}
        {this.props.children}
      </h1>
    );
  }
  render() {
    return <div> {this.print()}</div>;
  }
}

export default Clock;
