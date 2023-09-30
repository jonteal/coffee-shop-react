export const HomeAboutInfoItem = ({ item }) => {
  return (
    <p className="w-5/6 md:w-1/2 my-2 text-lg text-slate-500 text-opacity-80">
      {item.infoItem}
    </p>
  );
};
