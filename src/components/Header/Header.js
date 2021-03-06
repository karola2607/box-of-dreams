import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.scss";
import Container from "../Container/Container.js";
import { settings } from "../../data/dataStore.js";
import Icon from "../Icon/Icon.js";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Container>
          <div className="wrapper">
            <Link to="/" className="logo">
              <Icon name={settings.defaultHeaderIcon} />
            </Link>
            <nav>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
              <NavLink exact to="/info" activeClassName="active">
                Info
              </NavLink>
              <NavLink exact to="/my-box" activeClassName="active">
                My box
              </NavLink>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;
