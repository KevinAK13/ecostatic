import React from 'react';
import transporte from 'assets/img/Caballos/transporte.jpg';
import calidad from 'assets/img/Caballos/calidad.JPG';


const incentives = [
  {
    name: 'Envíos Nacionales e Internacionales',
    imageSrc: transporte,  // Cambiado de {transporte} a transporte
    description: 'Entregas rápidas y seguras a tu puerta.',
  },
  {
    name: 'Calidad y Precio Inigualables',
    imageSrc: calidad,
    description: 'Garantizamos la excelencia a precios competitivos.',
  },
];

export default function Incentives() {
  return (
    <div className="mx-auto max-w-full py-12 sm:px-4 lg:px-full md:py-8">
      <div className="max-w-screen-full mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-gray-900 mb-4 lg:mb-6">Nuestros Beneficios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {incentives.map((incentive) => (
            <article
              key={incentive.name}
              className="relative overflow-hidden shadow-lg transition duration-500 transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                alt={incentive.name}
                src={incentive.imageSrc}
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 hover:opacity-80"
              />
              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <a className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white hover:text-gray-300 hover:shadow-lg transition duration-500">
                    <h3>{incentive.name}</h3>
                  </a>
                  <p className="mt-2 line-clamp-3 text-lg text-white/95">
                    {incentive.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
