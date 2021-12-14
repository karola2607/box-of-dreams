import React from "react";
import Container from "../Container/Container";
import styles from "./Home.scss";

class Home extends React.Component {
  render() {
    return (
      <Container>
        <div className="Home">
          <header className="Home-header">
            <img id="present" src="https://i.postimg.cc/pr9b3sjV/present.gif" />
            <p id="headerTitel">Buy me a present!</p>
          </header>
        </div>
      </Container>
    );
  }
}

export default Home;
