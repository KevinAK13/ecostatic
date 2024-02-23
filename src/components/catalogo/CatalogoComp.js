import React from 'react';
import { Link } from 'react-router-dom';  // Importa Link desde react-router-dom
import ventas from 'assets/img/Caballos/ventas.JPG';
import maquila from 'assets/img/Caballos/maquila.JPG';

const incentives = [
  {
    name: 'Comprar caballos',
    imageSrc: ventas,
    description: 'Descubre nuestra colección de caballos en venta.',
    link: '/catalogo/ventas',  // Enlace para la sección de ventas
  },
  {
    name: 'Maquila',
    imageSrc: maquila,
    description: 'Servicios de maquila con yeguas y sementales seleccionados.',
    link: '/catalogo/piedecria',  // Enlace para la sección de maquila
  },
];

export default function CatalogoComp() {
  return (
    <div className="mx-auto max-w-full py-12 sm:px-4 lg:px-full md:py-8">
      <div className="max-w-screen-full mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {incentives.map((incentive) => (
            <article
              key={incentive.name}
              className="relative overflow-hidden shadow-lg transition duration-500 transform hover:scale-105 hover:shadow-2xl"
            >
              <Link to={incentive.link}>
                <img
                  alt={incentive.name}
                  src={incentive.imageSrc}
                  className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-gray-900/25 opacity-0 hover:opacity-100 transition duration-500"></div>
              </Link>
              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <Link to={incentive.link} className="text-4xl md:text-3xl lg:text-7xl font-extrabold text-white hover:text-gray-300 hover:shadow-lg transition duration-500">
                    <h3>{incentive.name}</h3>
                  </Link>
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
