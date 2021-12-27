import React from "react";
import Container from "../Container/Container";
import Card from "../Card/Card.js";
import "./MyBox.scss";
import { settings, cards } from "../../data/dataStore";
import PropTypes from "prop-types";
import Creator from "../Creator/Creator.js";

class MyBox extends React.Component {
  state = {
    cards: cards || [],
  };
  addCard(title) {
    this.setState((state) => ({
      cards: [
        ...state.cards,
        {
          key: state.cards.length
            ? state.cards[state.cards.length - 1].key + 1
            : 0,
          title,
        },
      ],
    }));
  }
  render() {
    return (
      <Container>
        <div>
          <Creator
            text={settings.columnCreatorText}
            action={(title) => this.addCard(title)}
          />
        </div>
        <div className="boxes">
          {this.state.cards.map(({ key, title, ...cardProps }) => (
            <Card key={key} {...cardProps} title={title} />
          ))}
        </div>
      </Container>
    );
  }
}

export default MyBox;
