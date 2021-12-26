import React from "react";
import Container from "../Container/Container";
import Card from "../Card/Card.js";
import styles from "./MyBox.scss";
import { settings, cards } from "../../data/dataStore";
import PropTypes from "prop-types";
import Creator from "../Creator/Creator.js";

/*const MyBox = () => (
  <Container>
    <div className="boxes">
      <Card title={settings.cardCreatorText} />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </Container>
);


const MyBox = () => {
  const size = 20;
  return (
    <div className="boxes">
      {Array(size)
        .fill()
        .map((x, i) => (
          <Card key={i} title={settings.cardCreatorText} />
        ))}
    </div>
  );
};
*/

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
