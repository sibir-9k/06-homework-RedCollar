import React from "react";
import './image.scss'

export default function SlideImage({ src, alt }) {
  return <img src={src} alt={alt} className='slideImage' />;
}