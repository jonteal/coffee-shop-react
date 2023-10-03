import MeImg from "../../assets/images/me.jpg";
import Stock2 from "../../assets/images/Stock2.jpg";

import "./about.css";

export const About = () => (
  <div className="flex flex-col mt-5">
    <div className="flex flex-col md:flex-row items-center md:justify-center">
      <div className="w-5/6 md:w-1/2 h-auto mt-10 mb-0 ml-10 mr-5 flex flex-row justify-center">
        <img
          src={MeImg}
          className="md:w-2/3 rounded-xl shadow-xl about-image-1"
        />
      </div>
      <div className="w-5/6 md:w-1/2 mx-5 my-10">
        <h1 className="text-6xl text-slate-400 font-serif">I'm Jon Jackson</h1>
        <div className="flex flex-1 flex-row justify-center">
          <div className="inline-block h-[100px] min-h-[1em] w-0.5 self-stretch bg-neutral-400 opacity-100 dark:opacity-50 my-2"></div>
        </div>
        <p className="my-3 text-center font-light text-lg">
          Lorem ipsum dolor sit amet.
        </p>
        <p className="my-3 font-light text-lg text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          quae non necessitatibus dolor omnis. Nobis aperiam quam sit harum
          ipsum consequuntur magni voluptatem commodi minima mollitia, veritatis
          perferendis minus hic rem itaque consectetur ab tempore explicabo?
        </p>
        <p className="my-3 font-light text-lg text-center">
          Debitis maxime minus nihil reiciendis magni accusamus dolor suscipit
          tenetur soluta unde quisquam eum saepe ipsam alias aut possimus,
          quaerat laudantium assumenda ratione ex?
        </p>
        <p className="my-3 text-center font-light text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          laboriosam, eum perferendis velit natus autem earum consequatur, quasi
          eligendi doloremque suscipit.
        </p>
      </div>
    </div>
    <div className="flex flex-col md:mt-20 md:flex-row mb-20">
      <div className="w-5/6 md:w-1/2 mx-5 my-0">
        <h1 className="text-6xl text-slate-400 font-serif">
          About Hillside Cafe
        </h1>
        <div className="flex flex-1 flex-row justify-center">
          <div className="inline-block h-[100px] min-h-[1em] w-0.5 self-stretch bg-neutral-400 opacity-100 dark:opacity-50 my-2"></div>
        </div>
        <p className="my-3 font-light text-lg text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          quae non necessitatibus dolor omnis. Nobis aperiam quam sit harum
          ipsum consequuntur magni voluptatem commodi minima mollitia, veritatis
          perferendis minus hic rem itaque consectetur ab tempore explicabo?
        </p>
        <p className="my-3 font-light text-lg text-center">
          Debitis maxime minus nihil reiciendis magni accusamus dolor suscipit
          tenetur soluta unde quisquam eum saepe ipsam alias aut possimus,
          quaerat laudantium assumenda ratione ex?
        </p>
        <p className="my-3 font-light text-lg text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          laboriosam, eum perferendis velit natus autem earum consequatur, quasi
          eligendi doloremque suscipit.
        </p>
      </div>
      <div className="w-5/6 md:w-1/2 my-10 mx-5">
        <img src={Stock2} className="rounded-xl about-image-2" />
      </div>
    </div>
  </div>
);
