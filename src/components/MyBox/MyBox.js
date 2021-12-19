import React from "react";
import Container from "../Container/Container";
import Card from "../Card/Card.js";
import styles from "./MyBox.scss";
import { settings } from "../../data/dataStore";

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
*/

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

export default MyBox;
