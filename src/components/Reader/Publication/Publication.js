import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
import s from "../../styles.css";

const Publication = ({ publications }) => (
  <article className={s.publication}>
    <h2>{publications.title}</h2>
    <p>{publications.text}</p>
  </article>
);

Publication.propTypes = {
  publications: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string
  }).isRequired
};

export default Publication;
