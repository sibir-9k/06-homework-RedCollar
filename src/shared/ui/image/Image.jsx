import React from "react";
import PropTypes from "prop-types";
import './Image.scss'

export default function SlideImage({ src, alt }) {
  return <img src={src} alt={alt} className='slideImage' />;
}

SlideImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
