import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

export const MuiTextSlider = () => {
  var items = [
    {
      description:
        "The Chai Latte is my favorite! The barista is always so incredibly nice and always knows what I want when I walk in the door.",
    },
    {
      description:
        "I love that I get to have my dog on the patio! This place is part of my daily routine!",
    },
    {
      description:
        "This place is right around the corner from my house, and I'm so thankful I discovered it. The teas are essential!",
    },
    {
      description: "I love the smoothies! The stawberry banana is amazing!",
    },
  ];

  return (
    <Carousel
      animation="slide"
      duration={1500}
      interval={4000}
      className="h-28"
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

const Item = (props) => {
  return (
    <div className="h-32 flex flex-col justify-start mb-10 md:mb-0">
      <p className="text-lg italic font-serif tracking-wide">
        "{props.item.description}"
      </p>
    </div>
  );
};
