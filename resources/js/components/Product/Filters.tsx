import React, { useContext, useState, useEffect, Suspense } from "react";
import axios from "axios";
import ProductContext from "./Context";
const FilterItem = React.lazy(() => import("./FilterItem"));

function Filters() {
  const { filterByCategory, getAllProducts, sortProductBy } = useContext(
    ProductContext
  );
  const [selectedFilterItem, setSelectedFilter] = useState(0);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    axios
      .get("/api/categories")
      .then(res => {
        setFilters(res.data.data);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <div
      className="bg-white container rounded-t-lg mx-auto"
      style={{ background: "#303030" }}
    >
      <div className="max-w-7xl mx-auto py-4 sm:px-6 lg:px-6">
        <div className="flex justify-between items-center text-sm">
          <div>
            <ul className="flex">
              <li className="mr-4">
                <button
                  onClick={() => {
                    getAllProducts();
                    setSelectedFilter(0);
                  }}
                  className={`font-thin ${
                    selectedFilterItem == 0
                      ? "font-bold text-white"
                      : "text-gray-150"
                  } flex items-center`}
                >
                  <svg
                    className="mr-2"
                    width="16"
                    height="16"
                    viewBox="0 0 69 68"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.396 0.0469055H8.396C6.40687 0.0469055 4.49922 0.837081 3.09269 2.2436C1.68617 3.65013 0.895996 5.55778 0.895996 7.54691V22.5469C0.895996 24.536 1.68617 26.4437 3.09269 27.8502C4.49922 29.2567 6.40687 30.0469 8.396 30.0469H23.396C25.3851 30.0469 27.2928 29.2567 28.6993 27.8502C30.1058 26.4437 30.896 24.536 30.896 22.5469V7.54691C30.896 5.55778 30.1058 3.65013 28.6993 2.2436C27.2928 0.837081 25.3851 0.0469055 23.396 0.0469055ZM60.896 0.0469055H45.896C43.9069 0.0469055 41.9992 0.837081 40.5927 2.2436C39.1862 3.65013 38.396 5.55778 38.396 7.54691V22.5469C38.396 24.536 39.1862 26.4437 40.5927 27.8502C41.9992 29.2567 43.9069 30.0469 45.896 30.0469H60.896C62.8851 30.0469 64.7928 29.2567 66.1993 27.8502C67.6058 26.4437 68.396 24.536 68.396 22.5469V7.54691C68.396 5.55778 67.6058 3.65013 66.1993 2.2436C64.7928 0.837081 62.8851 0.0469055 60.896 0.0469055ZM23.396 37.5469H8.396C6.40687 37.5469 4.49922 38.3371 3.09269 39.7436C1.68617 41.1501 0.895996 43.0578 0.895996 45.0469V60.0469C0.895996 62.036 1.68617 63.9437 3.09269 65.3502C4.49922 66.7567 6.40687 67.5469 8.396 67.5469H23.396C25.3851 67.5469 27.2928 66.7567 28.6993 65.3502C30.1058 63.9437 30.896 62.036 30.896 60.0469V45.0469C30.896 43.0578 30.1058 41.1501 28.6993 39.7436C27.2928 38.3371 25.3851 37.5469 23.396 37.5469ZM60.896 37.5469H45.896C43.9069 37.5469 41.9992 38.3371 40.5927 39.7436C39.1862 41.1501 38.396 43.0578 38.396 45.0469V60.0469C38.396 62.036 39.1862 63.9437 40.5927 65.3502C41.9992 66.7567 43.9069 67.5469 45.896 67.5469H60.896C62.8851 67.5469 64.7928 66.7567 66.1993 65.3502C67.6058 63.9437 68.396 62.036 68.396 60.0469V45.0469C68.396 43.0578 67.6058 41.1501 66.1993 39.7436C64.7928 38.3371 62.8851 37.5469 60.896 37.5469Z"
                      fill="#56c667"
                    />
                  </svg>
                  Mostrar Todo
                </button>
              </li>

              <Suspense
                fallback={
                  <span className="text-white">Cargando lista de filtros</span>
                }
              >
                {filters.map(({ id, name }) => (
                  <FilterItem
                    key={id}
                    id={id}
                    selected={selectedFilterItem}
                    filter={filterByCategory}
                    setSelected={setSelectedFilter}
                    category={id}
                    title={name}
                  />
                ))}
              </Suspense>
            </ul>
          </div>
          <div>
            <select
              defaultValue={0}
              onChange={({ target }) => sortProductBy(target.value)}
              className="cursor-pointer form-select text-sm text-white bg-gray-1000 border-transparent block w-full"
            >
              <option disabled value="0">Ordenar Por</option>
              <option value="Asc">Nombre (Asc)</option>
              <option value="Desc">Nombre (Desc)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
