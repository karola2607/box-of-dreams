import React from "react";
import Container from "../Container/Container";
import "./Home.scss";
import { pageContents } from "../../data/dataStore";

class Home extends React.Component {
  render() {
    return (
      <Container>
        <div className="Home">
          <header className="homeHeader">
            <img id="present" src={pageContents.image} />
            <p id="headerTitel">{pageContents.title}</p>
          </header>
        </div>
      </Container>
    );
  }
}

export default Home;
