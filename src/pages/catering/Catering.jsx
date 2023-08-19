import MainImage from "../../assets/images/catering.jpg";
import "./catering.css";

const Catering = () => {
  return (
    <div className="container">
      <img
        src={MainImage}
        alt="Coffee shop"
        className="catering-main-image"
      ></img>
      <div className="catering-text-container">
        <h1 className="text-slate-50 text-opacity-80 font-bold catering-title-header font-serif">
          Hillside
        </h1>
        <h2 className="text-slate-50 text-opacity-80 font-bold catering-subtitle-header font-serif">
          Catering Menu
        </h2>
      </div>
    </div>
  );
};

export default Catering;
