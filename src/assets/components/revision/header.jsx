import React from "react";
import Clock from "./revision-component/headerClock";
class Header extends React.Component {
  render() {
    return (
      <>
        <div>
          <Clock locale="bn-BD">
            {" "}
            session 9 done now it is 10. this clock used props{" "}
          </Clock>
        </div>
      </>
    );
  }
}

export default Header;
