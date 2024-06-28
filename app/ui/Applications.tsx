'use client';
import React, { useState } from 'react';
import BoxCard from './BoxCard';

const applications = [
  {
    id: 1,
    title: 'Bombeo Residencial',
    description:
      'Suministro de agua confiable y eficiente para tú hogar con nuestras soluciones de bombeo silenciosas y de bajo consumo. Ideales para vivienda urbana o rural.',
    image: '/carousel/1.webp',
    icon: '/icons/BombeoResidencial.svg',
  },
  {
    id: 2,
    title: 'Bombeo Comercial',
    description:
      'Optimiza tus operaciones industriales con nuestros sistemas de bombeo de alta capacidad y durabilidad. Perfectos para establecimientos comerciales, hotelería, restaurantes, hospitales y procesos industriales donde el agua realice un papel fundamental.',
    image: '/carousel/2.webp',
    icon: '/icons/BombeoComercial.svg',
  },
  {
    id: 3,
    title: 'Bombeo Agrícola',
    description:
      'Maximiza la eficiencia en campo con bombas agrícolas diseñadas para altos rendimientos, garantizando un riego uniforme y un suministro constante de agua en tus procesos agroindustriales.',
    image: '/carousel/3.webp',
    icon: '/icons/BombeoAgricola.svg',
  },
  {
    id: 4,
    title: 'Riego Paisajismo',
    description:
      'Embellece y mantiene tus espacios verdes con sistema sistemas de riego automatizados y eficientes. Diseñados para jardinería, parques, zonas comerciales y áreas recreativas, asegurando una distribución optima del agua.',
    image: '/carousel/6.jpg',
    icon: '/icons/RiegoPaisajismo.svg',
  },
  {
    id: 5,
    title: 'Riego Campos Deportivos',
    description:
      'Mantén tus campos deportivos en óptimas condiciones con sistemas de riego especializados, garantizando un césped saludable y uniforme para un rendimiento de juego superior.',
    image: '/carousel/5.jpg',
    icon: '/icons/RiegoCamposDeportivos.svg',
  },
  {
    id: 6,
    title: 'Riego Agricultura',
    description:
      'Optimiza tus cultivos con soluciones de riego precisas y efectivas, adaptadas a tus necesidades agrícolas. Aseguramos una distribución uniforme del agua para maximizar el crecimiento y la productividad de tus plantas.',
    image: '/carousel/7.jpg',
    icon: '/icons/RiegoAgricultura.svg',
  },
];

const Applications = () => {
  const [selectedApplication, setSelectedApplication] = useState<
    number | null
  >(null);

  const handleClick = (id: number) => {
    setSelectedApplication(selectedApplication === id ? null : id);
  };

  return (
    <div className="p-8">
      <h2 className="text-green-600 text-2xl mb-4">
        Aplicaciones Rigare ...
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        id="aplicaciones"
      >
        {applications.map((application) => (
          <BoxCard
            key={application.id}
            service={application}
            handleClick={handleClick}
            isSelected={selectedApplication === application.id}
          />
        ))}
      </div>
      {selectedApplication && (
        <div className="mt-8 p-4 bg-white rounded shadow-lg">
          <h3 className="text-green-600 text-xl mb-2">
            {
              applications.find(
                (app) => app.id === selectedApplication
              )?.title
            }
          </h3>
          <p>
            {
              applications.find(
                (app) => app.id === selectedApplication
              )?.description
            }
          </p>
        </div>
      )}
    </div>
  );
};

export default Applications;
