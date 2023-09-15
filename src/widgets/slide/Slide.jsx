import React from "react";
import PropTypes from "prop-types";
import SlideTitle from '../../shared/ui/title/Title';
import SlideImage from "../../shared/ui/image/Image";

import './Slide.scss'

export default function Slide({ data }) {

  return (
    <div className='slide'>
      <SlideImage src={data.imageUrl} alt={data.title} />
      <SlideTitle title={data.title} />
    </div>
  );
}

Slide.propTypes = {
  data: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};
