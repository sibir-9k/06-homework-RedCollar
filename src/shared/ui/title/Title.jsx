import React from "react";
import PropTypes from "prop-types";
import './Title.scss'

export default function SlideTitle({ title }) {
  return <div className="slide-title">{title}</div>;
}

SlideTitle.propTypes = {
  title: PropTypes.string.isRequired
};
