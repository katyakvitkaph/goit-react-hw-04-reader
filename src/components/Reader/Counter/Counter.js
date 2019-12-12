import React from "react";
import PropTypes from "prop-types";
import s from "../../styles.css";

const Counter = ({ countNumbs }) => (
  <p className={s.counter}>{countNumbs}/12</p>
);

export default Counter;

Counter.propTypes = {
  countNumbs: PropTypes.number.isRequired
};
