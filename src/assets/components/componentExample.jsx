import { useState, useEffect } from 'react';
function Clock(props) {
  const [date, setDate] = useState(new Date());
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  });
  return (
    <div>
      <h1>The time is <span>
      {date.toLocaleTimeString()}
    </span></h1>
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
        Pleased to meet you! Hello, the time is {" "}
        {new Date().toLocaleTimeString(props.locale)}
      </p>
    </div>
  );
}

export default Clock;
