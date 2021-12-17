import styles from "./Card.scss";
import React from "react";
import { settings } from "../../data/dataStore";

class Card extends React.Component {
  render() {
    return <section className="card">{settings.cardCreatorText}</section>;
  }
}

export default Card;
