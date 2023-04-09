import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ prod }) => {
  const { img, name, price,des } = prod;

  return (
    <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
      <div className="relative">
        <img
          className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
          src={img}
          alt=""
        />
        <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
      </div>
      <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
        <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
          {name}
        </h5>
        <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
          Price:{price}$
        </h5>
        <p className="mb-5 text-gray-700">
         {des}
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center h-12 px-6 font-bold 
                tracking-wide text-white transition duration-200 rounded shadow-md
                 bg-sky-500 hover:bg-sky-600 
                 focus:shadow-outline focus:outline-none"
        >
          <Link to='/booking'>  Buy Now</Link>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
