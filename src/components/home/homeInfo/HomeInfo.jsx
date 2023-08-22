import HomeAboutInfoItem from "../homeAboutInfoItem/HomeAboutInfoItem";

const HomeInfo = ({ homeInfo }) => {
  return (
    <>
      {homeInfo.map((item) => (
        <HomeAboutInfoItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default HomeInfo;
