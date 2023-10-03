export const MenuDrinkItem = ({ item }) => (
  <div className="flex flex-row my-2">
    <div className="flex justify-start text-base text-zinc-600 text-opacity-60 w-4/12">
      {item.itemName}
    </div>
    {item?.prices.map((price) => (
      <div key={price} className="text-lg text-zinc-600 text-opacity-60 w-3/12">
        {price}
      </div>
    ))}
  </div>
);
