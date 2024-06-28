// components/Banner.js
import React from 'react';

const BannerMedio = () => {
  return (
    <div
      className="relative w-full h-64 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/carousel/8.jpg')" }}
    >
      <div className="absolute inset-0 bg-green-700 opacity-75"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full px-8 text-white">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold">
            Excelencia Garantizada
          </h1>
        </div>
        <div className="md:w-1/2 md:ml-8 mt-4 md:mt-0">
          <p className="text-lg mb-4">
            Te prometemos{' '}
            <span className="font-bold">Excelencia Garantizada</span>{' '}
            - Desempeño Garantizado en cada proyecto.
          </p>
          <button className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
            Contáctanos!
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerMedio;
