import Carousel from "react-material-ui-carousel";
import SliderImage1 from "../../../assets/images/stock1.jpg";
import SliderImage2 from "../../../assets/images/stock2.jpg";
import SliderImage3 from "../../../assets/images/stock3.jpg";
import SliderImage4 from "../../../assets/images/stock4.jpg";

export const MuiSlider = (props) => {
  var items = [
    {
      image: SliderImage1,
    },
    {
      image: SliderImage2,
    },
    {
      image: SliderImage3,
    },
    {
      image: SliderImage4,
    },
  ];

  return (
    <Carousel animation="slide" duration={1500} interval={4000} swipe={true}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

const Item = (props) => {
  return (
    <img className="d-block w-100" src={props.item.image} alt="First slide" />
  );
};
