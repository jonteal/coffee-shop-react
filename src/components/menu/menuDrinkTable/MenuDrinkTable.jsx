import MenuDrinkItem from "../menuDrinkItem/MenuDrinkItem";

import "./menuDrinkTable.css";

const MenuDrinkTable = ({ tableInfo }) => {
  return (
    <div className="flex flex-col px-5 menu-drink-table-container my-3 mx-3">
      <div className="mx-2 p-2">
        <h2 className="text-5xl text-zinc-600 text-opacity-60 mb-3 font-serif">
          {tableInfo?.category}
        </h2>
        <div className="menu-drink-table">
          <div className="flex flex-row">
            {tableInfo?.sizes.map((size) => (
              <p
                key={size}
                className="text-lg text-zinc-600 text-opacity-60 w-1/4 font-bold"
              >
                {size}
              </p>
            ))}
          </div>
          {tableInfo?.items.map((item) => (
            <MenuDrinkItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuDrinkTable;
