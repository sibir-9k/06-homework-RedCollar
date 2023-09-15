import React, { useContext } from "react";
import { SliderContext } from "../../features/Slider";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

import './Arrows.scss'

export default function Arrows() {
  const { changeSlide } = useContext(SliderContext);

  return (
    <div className='arrows'>
      <button className='arrow left' onClick={() => changeSlide(-1)}> <AiOutlineCaretLeft /></button>
      <button className='arrow right' onClick={() => changeSlide(1)}><AiOutlineCaretRight /></button>
    </div>
  );
}