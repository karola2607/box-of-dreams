import "./Card.scss";
import React from "react";
import PropTypes from "prop-types";

const Card = (props) => <section className="card">{props.title}</section>;

Card.propTypes = {
  title: PropTypes.node,
};

export default Card;
