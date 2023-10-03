import { MenuSpecialtyDrinkItem } from "../menuSpecialtyDrinkItem/MenuSpecialtyDrinkItem";

export const MenuSpecialtyDrinks = ({ tableInfo }) => (
  <div className="w-full md:ml-5 mb-4">
    <div className="mt-3 border menu-specialty-items-container flex flex-col items-center px-2 pb-3 my-3 mx-3 bg-slate-200">
      <h2 className="text-5xl text-zinc-600 text-opacity-60 mb-3 font-serif mt-3">
        {tableInfo.category}
      </h2>
      <div className="flex flex-row mx-2 md:mx-5 w-full">
        {tableInfo.sizes.map((size) => (
          <p key={size} className="w-1/3 text-lg text-zinc-600 text-opacity-60">
            {size}
          </p>
        ))}
      </div>
      <div className="flex flex-row justify-around w-full">
        {tableInfo.prices.map((price) => (
          <p
            key={price}
            className="w-full text-lg text-zinc-600 text-opacity-60"
          >
            {price}
          </p>
        ))}
      </div>
      <div className="mt-2">
        {tableInfo.items.map((item) => (
          <MenuSpecialtyDrinkItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  </div>
);
