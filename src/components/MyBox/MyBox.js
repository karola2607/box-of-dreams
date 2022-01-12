import React from "react";
import Container from "../Container/Container";
import Card from "../Card/Card.js";
import "./MyBox.scss";
import { settings, cards } from "../../data/dataStore";
import PropTypes from "prop-types";
import Creator from "../Creator/Creator.js";

const MyBox = (props) => (
  <Container>
    <div>
      <Creator text={settings.columnCreatorText} action={props.addCard} />
    </div>
    <div className="boxes">
      {props.cards.map((cards) => (
        <Card key={cards.title} {...cards} />
      ))}
    </div>
  </Container>
);

MyBox.propTypes = {
  cards: PropTypes.array,
  addCard: PropTypes.func,
};
export default MyBox;
