import { useContext } from "react";
import PropTypes from "prop-types";
import { SliderContext } from '../../../features/Slider'
import './Dot.scss'

export default function Dot({ number }) {
  const { goToSlide, slideNumber } = useContext(SliderContext);

  return (
    <div
      className={`dot ${slideNumber === number ? "selected" : ""}`}
      onClick={() => goToSlide(number)}
    />
  );
}

Dot.propTypes = {
  number: PropTypes.number.isRequired
};
