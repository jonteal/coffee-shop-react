import { HomeAboutInfoItem } from "../homeAboutInfoItem/HomeAboutInfoItem";

export const HomeInfo = ({ homeInfo }) => (
  <>
    {homeInfo.map((item) => (
      <HomeAboutInfoItem key={item.id} item={item} />
    ))}
  </>
);
