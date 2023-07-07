import React from "react";
class Clock extends React.Component {
  state = {
    date: new Date(),
    locale: "bn-BD",
  };
  // here another thing which We used here to bind handle click function
  // bewlow's consturctor is need where there need to initiallize something otherwise like given example  above will enough.
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     date: new Date(),locale: "bn-BD",
  //   };
  // this.handleClick = this.handleClick.bind(this)
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
  handleClick = () => {
    this.setState({
      locale: "en-US",
    });
  };
  print() {
    const { date, locale } = this.state;

    return (
      <>
        <h1>{date.toLocaleTimeString(locale)}</h1>
      </>
    );
  }

  render() {
    const { date, locale } = this.state;
    return (
      <div>
        {" "}
        {this.print()} {date.toLocaleTimeString(locale)}
        <br />
        <button onClick={this.handleClick}>set locale en-US</button>
        <h3>
          {" "}
          The clock situated in footer is a clock made with react state here we
          cleared destructuring of state by the second clock defined in render
          with destructuring and also confusion of this and solution remember
          the keyword this here makes confusion because of call back function
        </h3>
      </div>
    );
  }
}

export default Clock;
