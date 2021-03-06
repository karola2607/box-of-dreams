import React from "react";
import PropTypes from "prop-types";

const Icon = (props) => <i className={`fas fa-${props.name}`}></i>;

export default Icon;

Icon.propTypes = {
  name: PropTypes.string,
};
