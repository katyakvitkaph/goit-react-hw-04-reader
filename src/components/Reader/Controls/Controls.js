import React from "react";
import PropTypes from "prop-types";
import s from "../../styles.css";
// import Reader from "../Reader";

const Controls = ({ decrementBut, incrementBut, index, length }) => (
  <section className={s.controls}>
    <button
      onClick={decrementBut}
      type="button"
      className="button"
      disabled={index === 0}
    >
      Назад
    </button>
    <button
      onClick={incrementBut}
      type="button"
      className="button"
      disabled={index === length - 1}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  decrementBut: PropTypes.func.isRequired,
  incrementBut: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired
};
export default Controls;
