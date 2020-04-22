import React, { lazy, useContext, Suspense } from "react";
import Spinner from "../Spinner";
import ProductContext from "./Context";

const ProductCard = lazy(() => import("./Card"));

function ProductList() {
  const { products, addProductToCart } = useContext(ProductContext);
  return (
    <div className="mt-10 grid lg:grid-cols-4 sm:grid-cols-2 row-gap-8 col-gap-8">
      <Suspense fallback={<Spinner />}>
        {products.map(({ id, name, price, category, cover }) => (
          <ProductCard
            key={id}
            id={id}
            title={name}
            cover={cover}
            price={price}
            addProduct={() =>
              addProductToCart({ id, name, price, category, cover })
            }
            created_by="Luis Alvarado"
            category={category["name"]}
          />
        ))}
      </Suspense>
    </div>
  );
}

export default ProductList;
