function Clock(props) {
  return (
    <p>
      Hello! I'm {props.name}, a {props.age} years old {props.occupation}.
      Pleased to meet you! Hello, {new Date().toLocaleTimeString(props.locale)}
    </p>
  );
}

export default Clock;
