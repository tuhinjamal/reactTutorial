import React from "react";
import PropTypes from "prop-types";
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
    return (
      <>
        <h1>
          Hello {this.state.date.toLocaleTimeString(this.props.locale)}{" "}
          {this.props.children}
        </h1>
        <button onClick={this.handleClick}>change locale</button>
        {/* 
        <button onClick={this.handleClick.bind(this,xyz)}>change locale</button>
        
        */}
        {/* here is a solution if there need to pass any parameter with this keyword  */}
      </>
    );
  }
  render() {
    const { date, locale } = this.state;
    return (
      <div>
        {" "}
        {this.print()} {date.toLocaleTimeString(locale)}
        The clock situated left is a clock made with react state here we cleared
        destructuring of state and also confusion of this and solution remember
        the keyword this here makes confusion because of call back function
      </div>
    );
  }
}
Clock.propTypes = {
  locale: PropTypes.string,
  children: PropTypes.array,
};

export default Clock;
