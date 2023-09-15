import React from "react";
import SlideTitle from '../../shared/ui/title/Title';
import SlideImage from "../../shared/ui/image/Image";

import './slide.scss'

export default function Slide({ data }) {

  return (
    <div className='slide'>
      <SlideImage src={data.imageUrl} alt={data.title} />
      <SlideTitle title={data.title} />
    </div>
  );
}