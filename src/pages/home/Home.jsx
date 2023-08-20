import { Link } from "react-router-dom";
import Slider from "../../components/slider/Slider";
import CoffeeIcon from "../../assets/coffee-logo.jpg";
import { FaArrowRight } from "react-icons/fa";

import "./home.css";
import HomeImageGrid from "../../components/homeImageGrid/HomeImageGrid";

const Home = () => {
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
          <p className="w-1/2 my-2 text-slate-500 text-opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aut
            deleniti, fugiat dolor soluta dolore debitis eius doloremque at vero
            aperiam.
          </p>
          <p className="w-1/2 my-2 text-slate-500 text-opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aut
            deleniti, fugiat dolor soluta dolore debitis eius doloremque at vero
            aperiam.
          </p>
          <p className="w-1/2 my-2 text-slate-500 text-opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aut
            deleniti, fugiat dolor soluta dolore debitis eius doloremque at vero
            aperiam.
          </p>
          <p className="w-1/2 my-2 text-slate-500 text-opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aut
            deleniti, fugiat dolor soluta dolore debitis eius doloremque at vero
            aperiam.
          </p>

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
        </div>
      </div>
    </div>
  );
};

export default Home;
