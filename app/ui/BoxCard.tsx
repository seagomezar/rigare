'use client';
import React from 'react';

const BoxCard = ({ service, handleClick, isSelected }: { service: any, handleClick: any, isSelected: any }) => (
    <div className="relative cursor-pointer group" onClick={() => handleClick(service.id)}>
    <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4 group-hover:bg-opacity-75 transition">
      <div className="flex items-center justify-center h-full">
        <img src={service.icon} alt={`${service.title} icon`} className="h-12 w-12 mb-2" />
      </div>
      <h3 className="text-white group-hover:text-yellow-500 text-lg text-center">{service.title}</h3>

    </div>
  </div>
);

export default BoxCard;
