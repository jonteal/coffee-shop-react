import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./textSlider.css";

const TextSlider = ({ reviews }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    centerMode: true,
    speed: 3000,
    autoplaySpeed: 4000,
    arrows: true,
    centerPadding: "100px",
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider className="text-slider-container" {...settings}>
      {reviews.map((review) => (
        <p className="mx-20 border" key={review.id}>
          {review.comment}
        </p>
      ))}
    </Slider>
  );
};

export default TextSlider;
