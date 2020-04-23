import React, { useContext } from "react";
import ProductContext from "./Context";
import ProductCard from "./Card";
import EmptyCart from "./Empty";

function ProductList() {
  const { products, addProductToCart } = useContext(ProductContext);
  return (
    <div className="mt-10 grid lg:grid-cols-4 sm:grid-cols-2 row-gap-8 col-gap-8">
      {products.length > 0 ? (
        products.map(({ id, name, price, category, cover }) => (
          <ProductCard
            key={id}
            id={id}
            title={name}
            cover={cover}
            price={price}
            addProduct={() =>
              addProductToCart({ id, name, price, category, cover })
            }
            category={category["name"]}
          />
        ))
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default ProductList;
