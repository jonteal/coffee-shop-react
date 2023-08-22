import MenuFoodItem from "../menuFoodItem/MenuFoodItem";

const MenuFoodTable = ({ tableInfo }) => (
  <div className="flex flex-col px-5 my-3 border mx-4 w-2/3 h-44">
    <div className="mx-2 p-2">
      <h2 className="text-5xl text-zinc-600 text-opacity-60 mb-3 font-serif">
        {tableInfo?.category}
      </h2>
      <div className="food-table">
        {tableInfo?.items.map((item) => (
          <MenuFoodItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  </div>
);

export default MenuFoodTable;
