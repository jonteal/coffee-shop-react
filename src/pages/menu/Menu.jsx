import { useState, useEffect } from "react";

import { MenuDrinkTable } from "../../components/menu/menuDrinkTable/MenuDrinkTable";
import { MenuSpecialtyDrinks } from "../../components/menu/menuSpecialtyDrinks/MenuSpecialtyDrinks";
import { MenuFoodTable } from "../../components/menu/menuFoodTable/MenuFoodTable";
import ScrollToTop from "react-scroll-to-top";

export const Menu = () => {
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
    <div className="flex flex-col mt-5 mb-10">
      <h1 className="text-zinc-400 text-opacity-50 font-bold text-8xl">Menu</h1>

      <div className="flex flex-col md:flex-row md:mx-auto w-full mt-4">
        {tables.map((table) => (
          <div
            key={table.id}
            className="w-full border flex flex-row justify-center mx-2"
          >
            <MenuDrinkTable key={table.id} tableInfo={table} />
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row mb-10">
        {specialtyItems?.map((item) => (
          <MenuSpecialtyDrinks key={item.id} tableInfo={item} />
        ))}

        {foodTables?.map((table) => (
          <MenuFoodTable key={table.id} tableInfo={table} />
        ))}
      </div>
      <ScrollToTop className="mb-10" smooth />
    </div>
  );
};
