import { useState, useEffect } from "react";
function Clock(props) {
  const [date, setDate] = useState(new Date());
  function refreshClock() {
    setDate(new Date());
  }

  const [buttonText, setButtonText] = useState("en-US");
  function changeLocale(e) {
    setButtonText("bn-BD");
    e.preventDefault();

    console.log("the button was clicked", e);
  }
  function changeLocaleUS(e) {
    setButtonText("en-US");
    e.preventDefault();

    console.log("the button was clicked", e);
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  });

  return (
    <div>
      <h1>
        The time is <span>{date.toLocaleTimeString()}</span>
      </h1>
      <h1>
        In this component we will discuss about state . in a word state is a
        condition or situation of anything
      </h1>
      <h3>State of component is data of this component which changes</h3>
      <h4>
        here arise a confusion with props by demanding props as data of
        component but this is not true it's actually ornaments and pushed to
        component from outside but actual data of componet situated inside the
        component
      </h4>
      <h6>let's see an example of state in below section</h6>

      <p>
        Hello! I'm {props.name}, a {props.age} years old {props.occupation}.
        Pleased to meet you! Hello, the time is{" "}
        {new Date().toLocaleTimeString(props.locale)}
      </p>
      <p>
        Here we will talk about event handling, initially we will we add below a
        button on clik this button there will change the locale from en-US to to
        bn-BD <button onClick={changeLocaleUS}>en-US</button>{" "}
        {new Date().toLocaleTimeString(buttonText)}
      </p>
      <button onClick={changeLocale}>{buttonText}</button>
    </div>
  );
}

export default Clock;
