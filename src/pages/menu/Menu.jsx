import "./menu.css";

const Menu = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-zinc-400 text-opacity-20 font-bold menu-header">
        Menu
      </h1>
      <div className="flex flex-col px-5">
        <div className="flex flex-row">
          <div className="coffee-table-container border w-1/2 mx-5 p-2">
            <h2 className="text-5xl text-zinc-600 text-opacity-60 mb-3 font-serif">
              Coffee
            </h2>
            <table className="coffee-table">
              <tr>
                <th></th>
                <th className="text-lg text-zinc-600 text-opacity-60">S</th>
                <th className="text-lg text-zinc-600 text-opacity-60">M</th>
                <th className="text-lg text-zinc-600 text-opacity-60">L</th>
              </tr>
              <tr>
                <td className="flex justify-start text-lg text-zinc-600 text-opacity-60 w-1/4">
                  Drip
                </td>
                <td className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  2
                </td>
                <td className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  3
                </td>
                <td className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  4
                </td>
              </tr>
              <tr>
                <td className="flex justify-start text-lg text-zinc-600 text-opacity-60 w-1/4">
                  Ethiopian
                </td>
                <td className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  4
                </td>
                <td className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  5
                </td>
                <td className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  6
                </td>
              </tr>
            </table>
          </div>
          <div className="coffee-table-container border w-1/2 mx-5 p-2">
            <h2 className="text-5xl text-zinc-600 text-opacity-60 mb-3 font-serif">
              Tea
            </h2>
            <table className="coffee-table">
              <tr>
                <th></th>
                <th className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  S
                </th>
                <th className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  M
                </th>
                <th className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  L
                </th>
              </tr>
              <tr>
                <td className="flex justify-start text-lg text-zinc-600 text-opacity-60 w-1/4">
                  Drip
                </td>
                <td className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  2
                </td>
                <td className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  3
                </td>
                <td className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  4
                </td>
              </tr>
              <tr>
                <td className="flex justify-start text-lg text-zinc-600 text-opacity-60 w-1/4">
                  Ethiopian
                </td>
                <td className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  4
                </td>
                <td className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  5
                </td>
                <td className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  6
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="coffee-table-container border w-1/2 mx-5 my-5 p-2">
            <h2 className="text-5xl text-zinc-600 text-opacity-60 mb-3 font-serif">
              Smoothies
            </h2>
            <table className="coffee-table">
              <tr>
                <th></th>
                <th className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  S
                </th>
                <th className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  M
                </th>
                <th className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  L
                </th>
              </tr>
              <tr>
                <td className="flex justify-start text-lg text-zinc-600 text-opacity-60 w-1/4">
                  Drip
                </td>
                <td className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  2
                </td>
                <td className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  3
                </td>
                <td className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  4
                </td>
              </tr>
              <tr>
                <td className="flex justify-start text-lg text-zinc-600 text-opacity-60 w-1/4">
                  Ethiopian
                </td>
                <td className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  4
                </td>
                <td className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  5
                </td>
                <td className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  6
                </td>
              </tr>
            </table>
          </div>
          <div className="coffee-table-container border w-1/2 mx-5 my-5 p-2">
            <h2 className="text-5xl text-zinc-600 text-opacity-60 mb-3 font-serif">
              Frozen Coffee
            </h2>
            <table className="coffee-table">
              <tr>
                <th></th>
                <th className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  S
                </th>
                <th className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  M
                </th>
                <th className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  L
                </th>
              </tr>
              <tr>
                <td className="flex justify-start text-lg text-zinc-600 text-opacity-60 w-1/4">
                  Drip
                </td>
                <td className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  2
                </td>
                <td className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  3
                </td>
                <td className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  4
                </td>
              </tr>
              <tr>
                <td className="flex justify-start text-lg text-zinc-600 text-opacity-60 w-1/4">
                  Ethiopian
                </td>
                <td className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  4
                </td>
                <td className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  5
                </td>
                <td className="text-lg text-zinc-600 text-opacity-60 w-1/4">
                  6
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
