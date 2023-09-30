import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import CoffeeIcon from "../../assets/coffee-logo.jpg";

// COMPONENTS
import { HomeContactForm } from "../../components/home/homeContactForm/HomeContactForm";
import { HomeImageGrid } from "../../components/home/homeImageGrid/HomeImageGrid";
import { HomeInfo } from "../../components/home/homeInfo/HomeInfo";
import { HomeInfoPictureGrid } from "../../components/home/homeInfoPictureGrid/HomeInfoPictureGrid";
import { MenuDrinkTable } from "../../components/menu/menuDrinkTable/MenuDrinkTable";
import { MuiSlider } from "../../components/sliders/muiSlider/MuiSlider";
import { MuiTextSlider } from "../../components/sliders/muiTextSlider/MuiTextSlider";
import ScrollToTop from "react-scroll-to-top";

import "./home.css";

export const Home = () => {
  const [tables, setTables] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [homeInfo, setHomeInfo] = useState([]);
  const getData = () => {
    fetch("/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setTables(myJson.tables);
        setReviews(myJson.reviews);
        setHomeInfo(myJson.homeInfo);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="w-full mx-0">
        <MuiSlider />
      </div>

      <div className="flex justify-center mt-5">
        <img src={CoffeeIcon} alt="Coffee shop logo" className="w-1/12" />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-slate-500 text-opacity-80 text-2xl font-serif my-2">
          About Hillside
        </h1>
        <hr className="home-about-line-break" />
        <div className="flex flex-col items-center">
          <HomeInfo homeInfo={homeInfo} />

          <Link to="/about">
            <div className="flex flex-row items-center">
              <span className="text-yellow-800 text-opacity-80 my-4 text-3xl font-serif italic">
                learn more
              </span>
              <FaArrowRight className="my-4 ml-3 text-2xl text-yellow-800 text-opacity-80" />
            </div>
          </Link>

          <div className="home-image-grid-container flex flex-row justify-center">
            <HomeImageGrid />
          </div>

          {tables.map((table) => (
            <div
              key={table.id}
              className="flex justify-center w-full md:w-1/2 mt-5"
            >
              <MenuDrinkTable tableInfo={table} />
            </div>
          ))}

          <Link to="/menu">
            <div className="flex flex-row items-center">
              <span className="text-yellow-800 text-opacity-80 my-4 text-3xl font-serif italic">
                see full menu
              </span>
              <FaArrowRight className="my-4 ml-3 text-2xl text-yellow-800 text-opacity-80" />
            </div>
          </Link>

          <div className="hidden md:w-full md:block">
            <HomeInfoPictureGrid />
          </div>

          <div className="my-3 p-5 w-full md:w-7/12">
            <MuiTextSlider reviews={reviews} />
          </div>

          <div className="w-full bg-cyan-700 my-5 p-5">
            <h3 className="text-5xl text-gray-100 font-serif italic">
              Get in touch!
            </h3>
          </div>

          <HomeContactForm />
        </div>
      </div>
      <ScrollToTop className="mb-10" smooth />
    </div>
  );
};
