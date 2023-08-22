const MenuDrinkItem = ({ item }) => {
  return (
    <div className="flex flex-row my-2">
      <div className="flex justify-start text-lg text-zinc-600 text-opacity-60 w-1/4">
        {item.itemName}
      </div>
      {item?.prices.map((price) => (
        <div
          key={price}
          className="text-lg text-zinc-600 text-opacity-60 w-1/4"
        >
          {price}
        </div>
      ))}
    </div>
  );
};

export default MenuDrinkItem;
