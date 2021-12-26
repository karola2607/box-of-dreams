import React from "react";
import Container from "../Container/Container";
import styles from "./Home.scss";
import { pageContents } from "../../data/dataStore";

class Home extends React.Component {
  render() {
    return (
      <Container>
        <div className="Home">
          <header className="homeHeader">
            <img id="present" src="https://i.postimg.cc/pr9b3sjV/present.gif" />
            <p id="headerTitel">{pageContents.title}</p>
          </header>
        </div>
      </Container>
    );
  }
}

export default Home;
