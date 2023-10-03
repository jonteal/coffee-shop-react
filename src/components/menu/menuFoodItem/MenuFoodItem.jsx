export const MenuFoodItem = ({ item }) => (
  <div className="flex flex-row items-center justify-between">
    <h2 className="text-lg text-zinc-600 text-opacity-60">{item.itemName}</h2>
    <div className="text-lg text-zinc-600 text-opacity-60 w-1/4">
      {item.price}
    </div>
  </div>
);
