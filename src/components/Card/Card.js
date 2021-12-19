import styles from "./Card.scss";
import React from "react";
import PropTypes from "prop-types";

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.node,
  };
  render() {
    return <section className="card">{this.props.title}</section>;
  }
}

export default Card;
