import MainImage from "../../assets/images/catering.jpg";
import SecondaryImage from "../../assets/images/catering2.jpg";

import "./catering.css";

export const Catering = () => (
  <div className="flex flex-col items-center w-full mx-0 px-0 mt-20">
    <div className="container relative text-center w-full px-0">
      <img
        src={MainImage}
        alt="Coffee shop"
        className="catering-main-image w-full"
      />
      <div className="catering-text-container absolute top-1/2 left-1/2">
        <h1 className="text-slate-50 text-opacity-80 font-bold text-7xl md:text-8xl font-serif">
          Hillside
        </h1>
        <h2 className="text-slate-50 text-opacity-80 font-bold text-4xl font-serif">
          Catering Menu
        </h2>
      </div>
    </div>

    <div className="flex flex-col md:flex-row md:justify-center w-full mb-10 mx-auto overflow-hidden">
      <div className="bg-gray-800 opacity-90 w-full md:w-5/12 flex flex-col justify-center py-4">
        <p className="text-slate-50 mx-5 text-xl">
          Call 479-123-4567 or visit our contact page to place your order.
        </p>

        <p className="text-slate-50 mx-5 my-2 text-xl font-nunito">
          We prefer at least a week heads up! THANK YOU!
        </p>
        <p className="text-slate-50 mx-5 my-2 text-xl">
          We appreciate your business and hope you keep us in mind for your
          future catering needs!
        </p>
      </div>

      <div className="relative">
        <img src={SecondaryImage} className="catering-secondary-image" />
        <div className="bg-gray-800 opacity-80 absolute font-serif py-3 px-10 text-slate-50 text-opacity-90 w-8/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-5xl font-bold">Call us today!</h2>
          <h3 className="text-2xl font-semibold">
            For your future catering needs!
          </h3>
        </div>
      </div>
    </div>
  </div>
);
