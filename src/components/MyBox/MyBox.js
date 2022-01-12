import React from "react";
import Container from "../Container/Container";
import Card from "../Card/Card.js";
import "./MyBox.scss";
import { settings, cards } from "../../data/dataStore";
import PropTypes from "prop-types";
import Creator from "../Creator/Creator.js";

class MyBox extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
    addCard: PropTypes.func,
  };

  render() {
    const { cards, addCard } = this.props;
    return (
      <Container>
        <div>
          <Creator text={settings.columnCreatorText} action={addCard} />
        </div>
        <div className="boxes">
          {cards.map((cards) => (
            <Card key={cards.title} {...cards} />
          ))}
        </div>
      </Container>
    );
  }
}

export default MyBox;
