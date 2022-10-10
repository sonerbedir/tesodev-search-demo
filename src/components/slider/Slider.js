import React from "react";
import { SliderCard } from "./SliderCard";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

export function Slider() {
  return (
    <div className="slider-wrapper">
      <div className="slider-content-container">
        <div className="arrow-left">
          <BsFillArrowLeftCircleFill />
        </div>
        <SliderCard />
        <div className="arrow-right">
          <BsFillArrowRightCircleFill />
        </div>
      </div>
    </div>
  );
}
