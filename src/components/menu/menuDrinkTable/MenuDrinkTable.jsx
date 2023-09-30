import { MenuDrinkItem } from "../menuDrinkItem/MenuDrinkItem";

export const MenuDrinkTable = ({ tableInfo }) => {
  return (
    <div className="flex flex-col px-2 w-5/6 my-3 mx-0">
      <div className="p-2">
        <h2 className="text-5xl text-zinc-600 text-opacity-60 mb-3 font-serif">
          {tableInfo?.category}
        </h2>
        <div className="w-full">
          {tableInfo?.items.map((item) => (
            <MenuDrinkItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
