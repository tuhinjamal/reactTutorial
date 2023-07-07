import React from "react";
import PropTypes from "prop-types";
import Button from "./button";
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
  //     date: new Date(),
  //     locale: "bn-BD",
  //   };
  //   this.handleClick = this.handleClick.bind(this);
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
        <h1>
          {this.state.date.toLocaleTimeString(this.props.locale)}
          <br /> {this.props.children} on click button or component button this
          will not change because this clock localed passed through props and
          also remember that props manipulation from parent is not a good
          practicise and also makes complexcity with this prop chareterstics
          remember vue is immutable
        </h1>
        <h1>{date.toLocaleTimeString(locale)}</h1>
        <Button change={this.handleClick} locale="bn-US" />
      </>
    );
  }

  render() {
    return <div>{this.print()}</div>;
  }
}
Clock.propTypes = {
  locale: PropTypes.string,
  children: PropTypes.array,
};
export default Clock;
