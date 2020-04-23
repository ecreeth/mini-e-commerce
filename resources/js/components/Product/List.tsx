import React, { useContext } from "react";
import ProductContext from "./Context";
import ProductCard from "./Card";
import EmptyProducts from "./Empty";

function ProductList() {
  let state: any = useContext(ProductContext);

  if (state.isLoading) {
    return <EmptyProducts title="🔥 Cargando Productos..." />;
  } else if (state.products.length == 0) {
    return <EmptyProducts type={0} title="😐 No hay productos disponibles" />;
  }
  return (
    <div className="mt-10 grid lg:grid-cols-4 sm:grid-cols-2 row-gap-8 col-gap-8">
      {state.products.map(el => {
        const { id, name, price, category, cover } = el;
        return (
          <ProductCard
            key={id}
            id={id}
            title={name}
            cover={cover}
            price={price}
            addProduct={() =>
              state.addProductToCart({ id, name, price, category, cover })
            }
            category={category["name"]}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
