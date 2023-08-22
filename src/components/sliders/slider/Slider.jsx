import React from "react";
import SliderImage1 from "../../../assets/images/stock1.jpg";
import SliderImage2 from "../../../assets/images/stock2.jpg";
import SliderImage3 from "../../../assets/images/stock3.jpg";
import SliderImage4 from "../../../assets/images/stock4.jpg";

import "./slider.css";

const Slider = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide carousel-inner-container"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={SliderImage1} alt="First slide" />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={SliderImage2}
            alt="Second slide"
          />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={SliderImage3} alt="Third slide" />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src={SliderImage4}
            alt="Fourth slide"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Slider;
