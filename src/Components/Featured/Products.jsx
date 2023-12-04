
import React from 'react';

const ProductCard = ({ product }) => (
  <div className="bg-white p-4 rounded-md shadow-md">
    <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
    <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
    <p className="text-gray-600 mb-2">{product.des}</p>
    <p className="text-[#FF6600] font-bold">${product.price.toFixed(2)}</p>
  </div>
  
);

const Products = ({ data }) => {
  if (!data) {
    return null; 
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {data.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default Products; 
