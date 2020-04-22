import React, { useState, useEffect, lazy } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Spinner from "../Spinner";
import ProductContext from "./Context";
import ProductFilter from "./Filters";
const ProductCard = lazy(() => import("./Card"));

function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("/api/products")
      .then(res => {
        setProducts(res.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <ProductContext.Provider value={products}>
      <ProductFilter />
      <div className="mt-10 grid lg:grid-cols-4 sm:grid-cols-2 row-gap-8 col-gap-8">
        <React.Suspense fallback={<Spinner />}>
          {products.map(({ id, name, price, category, cover }) => (
            <ProductCard
              key={id}
              title={name}
              cover={cover}
              price={price}
              created_by="Luis Alvarado"
              category={category["name"]}
            />
          ))}
        </React.Suspense>
      </div>
    </ProductContext.Provider>
  );
}

export default ProductList;

const element = document.getElementById("products");

if (element) {
  ReactDOM.render(<ProductList />, element);
}
