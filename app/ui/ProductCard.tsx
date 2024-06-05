'use client';
import React from 'react';

const ProductCard = ({ product }: { product: any }) => (
    <div className="relative group">
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-75 transition">
        </div>
        <div className="text-center mt-2">
            <h3 className="text-lg font-handwritten">{product.title}</h3>
        </div>
    </div>
);

export default ProductCard;
