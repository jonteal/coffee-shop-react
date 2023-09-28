import GridImage1 from "../../../assets/images/gridImage1.jpg";
import GridImage2 from "../../../assets/images/gridImage2.jpg";
import GridImage3 from "../../../assets/images/gridImage3.jpg";
import GridImage4 from "../../../assets/images/gridImage4.jpg";

import "./homeInfoPictureGrid.css";

const HomeInfoPictureGrid = () => {
  return (
    <div className="wrapper mb-5">
      <div className="md:grid-item hidden md:block">
        <img src={GridImage1} alt="" />
      </div>
      <div className="grid-item flex flex-col items-center justify-center bg-yellow-700">
        <h2 className="font-serif text-3xl mb-1">Location</h2>
        <p>123 MAIN STREET</p>
        <p>FAYETTEVILLE, AR 72701</p>
      </div>
      <div className="md:grid-item hidden md:block">
        <img src={GridImage2} alt="" />
      </div>
      <div className="grid-item flex flex-col items-center justify-center bg-yellow-700">
        <h2 className="font-serif text-3xl mb-1">Hours</h2>
        <p>MON–SAT 7:30AM–3PM</p>
        <p>SUNDAY 9AM–4PM</p>
      </div>
      <div className="grid-item flex flex-col items-center justify-center bg-cyan-700">
        <h2 className="font-serif text-3xl mb-1">Catering</h2>
        <p>CALL 479-123-4567 TO PLACE</p>
        <p>YOUR ORDER. WE PREFER AT</p>
        <p>LEAST A 24-48 HOUR HEADS UP!</p>
      </div>
      <div className="md:grid-item hidden md:block">
        <img src={GridImage3} alt="" />
      </div>
      <div className="grid-item flex flex-col items-center justify-center bg-cyan-700">
        <h2 className="font-serif text-3xl mb-1">Service Options</h2>
        <p>DINE-IN</p>
        <p>CURBSITE PICKUP</p>
        <p>NO DELIVERY</p>
      </div>
      <div className="md:grid-item hidden md:block">
        <img src={GridImage4} alt="" />
      </div>
    </div>
  );
};

export default HomeInfoPictureGrid;
