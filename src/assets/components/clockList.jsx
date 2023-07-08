import Clock from "./clock";
import PropTypes from "prop-types";

export default function ClockList({ quantities = [] }) {
  return (
    <>
      <div>
        <p>this is a loop in a react way </p>
        {quantities.map((key) => (
          <Clock key={key} />
        ))}
        {quantities.map(() => (
          <Clock key={Math.random()} />
        ))}
        <p>do not use index a key in loop</p>
        <p>this is end of loop in a react way</p>
      </div>
    </>
  );
}
ClockList.propTypes = {
  quantities: PropTypes.array,
};
