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
    const { change, locale, show, enable } = this.props;
    if (enable) return null;
    return (
      <>
        <button type="button" onClick={() => change(locale)}>
          {locale === "bn-BD" ? "change-clock" : "ঘড়ি পরিবর্তন করুন "}
        </button>
        {show && <p>hello yusuf</p>}
      </>
    );
  }
}
Button.propTypes = {
  change: PropTypes.func,
  locale: PropTypes.string,
  show: PropTypes.bool,
  enable: PropTypes.bool,
};
export default Button;
