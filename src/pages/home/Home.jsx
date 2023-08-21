import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import CoffeeIcon from "../../assets/coffee-logo.jpg";

// COMPONENTS
import Slider from "../../components/slider/Slider";
import HomeImageGrid from "../../components/homeImageGrid/HomeImageGrid";
import MenuDrinkTable from "../../components/menuDrinkTable/MenuDrinkTable";
import HomeAboutInfoItem from "../../components/homeAboutInfoItem/HomeAboutInfoItem";
import HomeInfoPictureGrid from "../../components/homeInfoPictureGrid/HomeInfoPictureGrid";

import "./home.css";

const Home = () => {
  const [tables, setTables] = useState([]);
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
      });
  };
  useEffect(() => {
    getData();
  }, []);

  console.log("tables: ", tables);
  return (
    <div>
      <div className="slider-container">
        <Slider />
      </div>
      <div className="flex justify-center mt-5">
        <img src={CoffeeIcon} alt="" className="w-1/12" />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-slate-500 text-opacity-80 home-about-subtitle-header font-serif my-2">
          About Hillside
        </h1>
        <hr className="home-about-line-break" />
        <div className="flex flex-col items-center">
          <HomeAboutInfoItem />
          <HomeAboutInfoItem />
          <HomeAboutInfoItem />
          <HomeAboutInfoItem />

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

          <div className="flex justify-center w-9/12 mt-5">
            <MenuDrinkTable tableInfo={tables[0]} />
          </div>

          <div className="flex justify-center w-9/12 mt-5">
            <MenuDrinkTable tableInfo={tables[1]} />
          </div>

          <Link to="/menu">
            <div className="flex flex-row items-center">
              <span className="text-yellow-800 text-opacity-80 my-4 text-3xl font-serif italic">
                see full menu
              </span>
              <FaArrowRight className="my-4 ml-3 text-2xl text-yellow-800 text-opacity-80" />
            </div>
          </Link>

          <div className="home-info-picture-grid-container">
            <HomeInfoPictureGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
