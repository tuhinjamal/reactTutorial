import React from "react";
import Button from "./button";
class Clock extends React.Component {
  state = {
    date: new Date(),
    locale: "bn-BD",
  };
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
  handleClick = (locale) => {
    this.setState({
      locale,
    });
  };
  render() {
    const { date, locale } = this.state;
    let button;
    if (locale === "bn-BD") {
      console.log("Hello", locale);
      button = (
        <Button change={this.handleClick} locale="en-US">
          Click Here
        </Button>
      );
    } else {
      button = (
        <Button change={this.handleClick} locale="bn-BD">
          Click Here
        </Button>
      );
      console.log("Hello");
    }
    return (
      <>
        <h1>{date.toLocaleTimeString(locale)}</h1>
        <p>conditional rendering approach one</p>
        {/* <Button change={this.handleClick} locale="bn-US" />  */}
        {button}
        <p>conditional rendering approach two inline conditional rendering</p>

        {locale === "bn-BD" ? (
          <Button
            change={this.handleClick}
            locale="en-US"
            show={false}
            enable={false}
          />
        ) : (
          <Button change={this.handleClick} locale="bn-BD" show enable />
        )}
      </>
    );
  }
}

export default Clock;
