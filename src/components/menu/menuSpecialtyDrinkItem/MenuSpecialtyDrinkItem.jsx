const MenuSpecialtyDrinkItem = ({ item }) => {
  return (
    <div className="flex flex-col items-start mt-2">
      <p className="text-md text-zinc-600 text-opacity-60 font-bold">
        {item.itemName}
      </p>
      <p className="text-md text-zinc-600 text-opacity-60">
        {item.ingredients}
      </p>
    </div>
  );
};

export default MenuSpecialtyDrinkItem;
