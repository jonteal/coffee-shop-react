import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./homeImageSlider.css";
import SliderImage1 from "../../../assets/images/stock1.jpg";
import SliderImage2 from "../../../assets/images/stock2.jpg";
import SliderImage3 from "../../../assets/images/stock3.jpg";
import SliderImage4 from "../../../assets/images/stock4.jpg";

export const HomeImageSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    centerMode: true,
  };
  return (
    <div className="home-image-slider-container">
      <Slider {...settings}>
        <div>
          <img src={SliderImage1} alt="" />
        </div>
        <div>
          <img src={SliderImage2} alt="" />
        </div>
        <div>
          <img src={SliderImage3} alt="" />
        </div>
        <div>
          <img src={SliderImage4} alt="" />
        </div>
      </Slider>
    </div>
  );
};
