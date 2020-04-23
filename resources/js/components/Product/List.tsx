import React, { useContext } from "react";
import ProductContext from "./Context";
import ProductCard from "./Card";
import EmptyProducts from "./Empty";

const CountResults = ({ count, total }) => {
  return (
    <h1 className="text-white text-xs pt-2 text-center py-2 bg-gray-1000">
      Mostrando (&nbsp;<strong className="text-green-500">{count}</strong>&nbsp;) de {total} registros
    </h1>
  );
};

function ProductList() {
  let state: any = useContext(ProductContext);

  if (state.isLoading) {
    return <EmptyProducts title="🔥 Cargando Productos..." />;
  } else if (state.products.data.length == 0) {
    return <EmptyProducts type={0} title="😐 No hay productos disponibles" />;
  }
  return (
    <>
      <CountResults
        total={state.products.meta.total}
        count={state.products.data.length}
      />
      <div className="mt-10 grid lg:grid-cols-4 sm:grid-cols-2 row-gap-8 col-gap-8">
        {state.products.data.map(el => {
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
    </>
  );
}

export default ProductList;
