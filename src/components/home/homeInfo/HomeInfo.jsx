import { HomeAboutInfoItem } from "../homeAboutInfoItem/HomeAboutInfoItem";

export const HomeInfo = ({ homeInfo }) => {
  return (
    <>
      {homeInfo.map((item) => (
        <HomeAboutInfoItem key={item.id} item={item} />
      ))}
    </>
  );
};
