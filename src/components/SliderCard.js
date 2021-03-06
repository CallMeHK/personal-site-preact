/** @jsx h */

import { h, render } from "preact";

const SliderCard = props => (
  <div className="slider-card">
    <div className="slider-card-wrapper">
      <div className="logo">
        <img src={props.logo} />
      </div>
      <div>{props.name}</div>
    </div>
  </div>
);

export default SliderCard;
