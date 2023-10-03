export const MenuSpecialtyDrinkItem = ({ item }) => (
  <div className="flex flex-col items-center my-3">
    <p className="text-md text-zinc-600 text-opacity-60 font-extrabold">
      {item.itemName}
    </p>
    <p className="text-md text-zinc-600 text-opacity-60">{item.ingredients}</p>
  </div>
);
