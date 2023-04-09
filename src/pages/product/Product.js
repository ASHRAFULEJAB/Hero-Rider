import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const Product = () => {
  const products = useLoaderData();
  console.log(products);
  return (
    <div>
      <h1 className="text-center m-3 text-3xl font-bold">
        {" "}
        Books Category:{products.length}
      </h1>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
          {products.map((prod) => (
            <ProductCard key={prod._id} prod={prod}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
