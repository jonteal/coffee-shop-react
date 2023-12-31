import ScrollToTop from "react-scroll-to-top";
import MainImage from "../../assets/images/gridImage3.jpg";
import LocationImage from "../../assets/images/stock5.jpg";

import "./locations.css";

export const Locations = () => (
  <>
    <div className="h-screen w-full mt-20">
      <div className="locations-main-container w-full text-slate-50 text-center relative h-screen">
        <img
          src={MainImage}
          alt="Coffee shop"
          className="catering-main-image w-full h-screen object-cover"
        />
        <div className="location-text-container">
          <h1 className="text-zinc-200 text-opacity-60 font-bold text-7xl md:locations-header font-serif">
            Locations
          </h1>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center">
      <h2 className="text-4xl block font-semibold tracking-wider mt-10">
        Fayetteville
      </h2>
      <div className="flex flex-1 flex-row justify-center">
        <div className="inline-block h-[100px] min-h-[1em] w-0.5 self-stretch bg-neutral-400 opacity-100 dark:opacity-50 my-2"></div>
      </div>
      <p className="text-lg capitalize block font-semibold">
        123 DICKSON STREET
      </p>
      <p className="text-lg capitalize block font-semibold">
        FAYETTEVILLE, AR 72701
      </p>
      <p className="text-lg capitalize block font-semibold">800-500-0000</p>

      <img
        className="w-full md:w-72 h-auto my-5"
        src={LocationImage}
        alt="Coffees in a circle"
      />
    </div>
    <ScrollToTop className="mb-10" smooth />
  </>
);
