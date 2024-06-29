'use client';
// components/Statistics.js
import React from 'react';
import CountUp from 'react-countup';

const Statistics = () => {
  return (
    <div
      className="relative w-full h-64 bg-cover bg-center"
      style={{ backgroundImage: "url('/carousel/Background1.jpg')" }}
    >
      <div className="absolute inset-0 bg-green-700 opacity-75"></div>
      <div className="relative z-10 flex justify-around items-center h-full text-white text-center">
        <div>
          <h2 className="text-4xl font-bold">
            <CountUp
              start={0}
              end={32}
              duration={2.75}
              separator="."
            />
          </h2>
          <p>Proyectos ejecutados </p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">
            <CountUp start={0} end={16} duration={2.75} />
          </h2>
          <p>Diseños Ejecutados </p>
        </div>
        <div>
          <h2 className="text-4xl font-bold">
            <CountUp start={0} end={8} duration={2.75} />
          </h2>
          <p>Años de experiencia </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
