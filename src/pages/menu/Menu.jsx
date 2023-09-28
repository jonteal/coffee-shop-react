import { useState, useEffect } from "react";

import { MenuDrinkTable } from "../../components/menu/menuDrinkTable/MenuDrinkTable";
import MenuSpecialtyDrinks from "../../components/menu/menuSpecialtyDrinks/MenuSpecialtyDrinks";
import MenuFoodTable from "../../components/menu/menuFoodTable/MenuFoodTable";

import "./menu.css";

const Menu = () => {
  const [tables, setTables] = useState([]);
  const [specialtyItems, setSpecialtyItems] = useState([]);
  const [foodTables, setFoodTables] = useState([]);
  const getData = () => {
    fetch("/data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setTables(myJson.tables);
        setSpecialtyItems(myJson.specialtyItems);
        setFoodTables(myJson.food);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="text-zinc-400 text-opacity-20 font-bold text-7xl">Menu</h1>

      <div className="menu-table-wrapper w-full">
        {tables.map((table) => (
          <div className="w-full">
            <MenuDrinkTable key={table.id} tableInfo={table} />
          </div>
        ))}
      </div>

      <div className="flex flex-row">
        {specialtyItems?.map((item) => (
          <MenuSpecialtyDrinks key={item.id} tableInfo={item} />
        ))}

        {foodTables?.map((table) => (
          <MenuFoodTable key={table.id} tableInfo={table} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
