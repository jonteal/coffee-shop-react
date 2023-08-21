import { useState, useEffect } from "react";

import MenuDrinkTable from "../../components/menuDrinkTable/MenuDrinkTable";

import "./menu.css";

const Menu = () => {
  const [tables, setTables] = useState([]);
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
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="text-zinc-400 text-opacity-20 font-bold menu-header">
        Menu
      </h1>

      {tables.map((table) => (
        <MenuDrinkTable key={table.id} tableInfo={table} />
      ))}
    </div>
  );
};

export default Menu;
