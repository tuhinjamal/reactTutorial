import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { change: currentChange, locale: currenLocale } = this.props;
    const { change: nextChange, locale: nextLocale } = nextProps;
    if (currentChange == nextChange && nextLocale == currenLocale) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    const { change, locale } = this.props;
    return (
      <button type="button" onClick={() => change(locale)}>
        Click Here
      </button>
    );
  }
}
Button.propTypes = {
  change: PropTypes.func,
  locale: PropTypes.string,
};
export default Button;
