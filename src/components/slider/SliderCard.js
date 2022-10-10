import React from "react";
import sliderImage from "../../styles/img/slider.jpg";

export function SliderCard() {
  return (
    <>
      <div className="card">
        <img src={sliderImage} alt="" />
        <div className="card-title">
          <h3>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</h3>
        </div>
        <p>1h ago · by Troy Corlson</p>
      </div>
      <div className="card">
        <img src={sliderImage} alt="" />
        <div className="card-title">
          <h3>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</h3>
        </div>
        <p>1h ago · by Troy Corlson</p>
      </div>
      <div className="card">
        <img src={sliderImage} alt="" />
        <div className="card-title">
          <h3>A Plan to Rebuild the Bus Terminal Everyone Loves to Hate</h3>
        </div>
        <p>1h ago · by Troy Corlson</p>
      </div>
    </>
  );
}
