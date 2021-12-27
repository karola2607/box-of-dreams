import React from "react";
import Container from "../Container/Container";
import "./Home.scss";
import PropTypes from "prop-types";

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    image: PropTypes.node,
  };
  render() {
    const { title, image } = this.props;
    return (
      <Container>
        <div className="Home">
          <header className="homeHeader">
            <img id="present" src={image} />
            <p id="headerTitel">{title}</p>
          </header>
        </div>
      </Container>
    );
  }
}

export default Home;
