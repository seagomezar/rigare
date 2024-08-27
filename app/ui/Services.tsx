'use client';
import React, { useState } from 'react';

const services = [
  {
    id: 1,
    title: 'Sistemas de Bombeo',
    description:
      'Nuestra Unidad Estratégica de Sistemas de Bombeo ha sido diseñada para proporcionar soluciones eficientes en una amplia variedad de aplicaciones de bombeo de agua. Con un equipo dedicado comprometido con la excelencia y respaldado por sólidas alianzas estratégicas, garantizamos la entrega de un valor excepcional en cada proyecto que emprendemos. Descubre cómo nuestras soluciones de bombeo pueden optimizar tus operaciones y maximizar tu rendimiento.',
    image: '/Servicios Sistemas de Bombeo.webp',
  },
  {
    id: 2,
    title: 'Sistemas de Riego',
    description:
      'Nuestra Unidad Estratégica de Sistemas de Riego ha sido diseñada para llevar eficiencia y excelencia a cada terreno que tocamos. En colaboración con los principales fabricantes a nivel mundial, nos centramos en optimizar el uso del agua tanto en la agricultura como en el paisajismo. Descubre cómo podemos hacer florecer tus espacios con nuestros sistemas de riego automatizados y sostenibles.',
    image: '/Servicios Sistemas de Riego.jpg',
  },
  {
    id: 3,
    title: 'Diseño de Sistemas de Riego',
    description:
      'Nuestra Unidad Estratégica de Diseño de Sistemas de Riego ha sido creada con el propósito de fusionar innovación y eficiencia en un servicio que aborde las necesidades hídricas de proyectos productivos o paisajísticos. Somos expertos y tenemos cobertura desde el dimensionamiento y la planificación inicial hasta la ejecución, nos comprometemos a convertir tus proyectos de riego en realidades sostenibles y efectivas. Descubre cómo podemos transformar tus sueños en un vibrante verdor.',
    image: '/Servicios Diseño Sistemas de Riego.jpg',
  },
  {
    id: 4,
    title: 'Fabricación de Controladores',
    description:
      'Controla cada gota con mayor eficiencia. Presentamos nuestros innovadores controladores para sistemas de bombeo y sistemas de riego, diseñados para llevar la gestión de agua a otro nivel. Con nuestra tecnología podrás optimizar tus recursos hídricos de manera inteligente y eficaz. Ajusta los tiempos, la frecuencia y la cantidad de agua con alta precisión, garantizando un uso eficiente y sostenible de este recurso invaluable. Nuestros controladores ofrecen una interfaz intuitiva y fácil de usar, diseñada para satisfacer las necesidades de agricultores, operadores de mantenimiento y profesionales del sector. Descubre una nueva era en la gestión del agua.',
    image: '/Servicios Fabricación controladores.webp',
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<
    number | null
  >(null);

  const handleClick = (id: number) => {
    setSelectedService(selectedService === id ? null : id);
  };

  const selected = services.find(
    (service) => service.id === selectedService
  );

  return (
    <div className="p-8">
      <h2 className="text-green-600 text-2xl mb-4">
        Servicios Rigare
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        id="servicios"
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="relative cursor-pointer group"
            onClick={() => handleClick(service.id)}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4 group-hover:bg-opacity-75 transition">
              <h3 className="text-white group-hover:text-yellow-500 text-lg">
                {service.title}
              </h3>
              <div className="text-right">
                <div className="inline-block p-2 bg-yellow-600 group-hover:bg-yellow-500 transition">
                  <svg
                    className="w-6 h-6 text-white group-hover:text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selected && (
        <div className="mt-8 p-4 bg-white rounded shadow-lg">
          <h3 className="text-green-600 text-xl mb-2">
            {selected.title}
          </h3>
          <p>{selected.description}</p>
        </div>
      )}
    </div>
  );
};

export default Services;
