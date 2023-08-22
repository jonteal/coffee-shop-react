import Image1 from "../../../assets/images/homeGrid/image1.jpg";
import Image2 from "../../../assets/images/homeGrid/image2.jpg";
import Image3 from "../../../assets/images/homeGrid/image3.jpg";
import Image4 from "../../../assets/images/homeGrid/image4.jpg";
import Image5 from "../../../assets/images/homeGrid/image5.jpg";
import Image6 from "../../../assets/images/homeGrid/image6.jpg";
import Image7 from "../../../assets/images/homeGrid/image7.jpg";
import Image8 from "../../../assets/images/homeGrid/image8.jpg";

import "./homeImageGrid.css";

const HomeImageGrid = () => {
  return (
    <div className="image-grid-container">
      <div className="row">
        <div className="column">
          <img src={Image1} />
          <img src={Image2} />
          <img src={Image3} />
        </div>
        <div className="column">
          <img src={Image4} />
          <img src={Image5} />
        </div>
        <div className="column">
          <img src={Image6} />
          <img src={Image7} />
          <img src={Image8} />
        </div>
      </div>
    </div>
  );
};

export default HomeImageGrid;
