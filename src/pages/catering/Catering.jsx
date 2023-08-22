import MainImage from "../../assets/images/catering.jpg";
import SecondaryImage from "../../assets/images/catering2.jpg";
import "./catering.css";

const Catering = () => {
  return (
    <>
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

      <div className="flex flex-row mt-5">
        <div className="bg-lime-900 w-5/12 flex flex-col justify-center mr-3">
          <p className="mx-5 my-3 text-xl">
            Call 479-123-4567 or visit our contact page to place your order.
          </p>

          <p className="mx-5 my-3 text-xl">
            We prefer at least a week heads up! THANK YOU!
          </p>
          <p className="mx-5 my-3 text-xl">
            We appreciate your business and hope you keep us in mind for your
            future catering needs!
          </p>
        </div>
        <div className="w-7/12 ml-3">
          <img
            className="catering-secondary-image"
            src={SecondaryImage}
            alt="Catering Image"
          />
          <div className="catering-second-text-container">
            <h2 className="text-slate-50 text-opacity-80 font-bold catering-second-title-header font-serif">
              Call us today!
            </h2>
            <h3 className="text-slate-50 text-opacity-80 font-bold catering-second-subtitle-header font-serif">
              For your future catering needs!
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catering;
