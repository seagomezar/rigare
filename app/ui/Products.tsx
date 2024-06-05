import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    title: 'Controlador Ri4 Serie Riego',
    image: '/carousel/14.webp',
    icon: '/icons/hammer.png'
  },
  {
    id: 2,
    title: 'Controlador Ri6 Serie Riego',
    image: '/carousel/15.webp',
    icon: '/icons/arrows.png'
  },
  {
    id: 3,
    title: 'Controlador Respaldo serie acueducto',
    image: '/carousel/16.webp',
    icon: '/icons/valve.png'
  }
];

const Products = () => {
  return (
    <div className="p-8">
      <h2 className="text-green-600 text-2xl mb-4">Productos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
