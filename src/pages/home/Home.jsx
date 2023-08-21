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

const tableInfo = [
  {
    id: 1,
    category: "Coffee",
    sizes: ["", "S", "M", "L"],
    items: [
      {
        id: 1,
        itemName: "Drip",
        prices: ["3", "4", "5"],
      },
      {
        id: 2,
        itemName: "Ethiopian",
        prices: ["4", "5", "6"],
      },
      {
        id: 3,
        itemName: "Cappucino",
        prices: ["3", "4", "5"],
      },
      {
        id: 4,
        itemName: "Breve",
        prices: ["4", "5", "6"],
      },
      {
        id: 5,
        itemName: "Latte",
        prices: ["3", "4", "5"],
      },
      {
        id: 6,
        itemName: "Mocha",
        prices: ["4", "5", "6"],
      },
      {
        id: 7,
        itemName: "Cold Brew",
        prices: ["3", "4", "5"],
      },
    ],
  },
  {
    id: 2,
    category: "Tea",
    sizes: ["", "S", "M", "L"],
    items: [
      {
        id: 1,
        itemName: "Honey Chai",
        prices: ["3", "4", "5"],
      },
      {
        id: 2,
        itemName: "Black Hibiscus",
        prices: ["4", "5", "6"],
      },
      {
        id: 3,
        itemName: "London Fog",
        prices: ["3", "4", "5"],
      },
      {
        id: 4,
        itemName: "Soft Touch",
        prices: ["4", "5", "6"],
      },
      {
        id: 5,
        itemName: "Matcha Latte",
        prices: ["3", "4", "5"],
      },
      {
        id: 6,
        itemName: "Thai Tea",
        prices: ["4", "5", "6"],
      },
      {
        id: 7,
        itemName: "Chai Tea Latte",
        prices: ["3", "4", "5"],
      },
    ],
  },
];

const Home = () => {
  console.log("tableInfo: ", tableInfo);
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
            <MenuDrinkTable tableInfo={tableInfo[0]} />
          </div>

          <div className="flex justify-center w-9/12 mt-5">
            <MenuDrinkTable tableInfo={tableInfo[1]} />
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
