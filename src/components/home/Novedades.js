import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import nov1 from 'assets/img/Nov/nov1.JPG';
import nov2 from 'assets/img/Nov/nov2.JPG';
import nov3 from 'assets/img/Nov/nov3.JPG';

const Novedades = () => {
  const imageVariants = {
    hover: { scale: 1.05 },
  };

  const textVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 sm:py-12 lg:px-8">
      <header className="text-center">
        <h2 className="text-4xl lg:text-7xl font-bold text-blue-gray-900 mb-4 lg:mb-6">Lo Más Nuevo a la Venta</h2>
      </header>

      <ul className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <li>
          <Link to="/detalle-novedad" className="group relative block">
            <motion.div
              className="relative overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
              variants={imageVariants}
            >
              <img src={nov1} alt="" className="aspect-square w-full object-cover" />
              <motion.div className="absolute inset-x-0 bottom-0 p-4">
                <motion.p
                  className="text-xl font-medium text-white"
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                >
                  Caballo Warlander
                </motion.p>
                <motion.span
                  className="mt-1.5 inline-block bg-white px-5 py-3 text-xs font-medium uppercase tracking-wide text-black"
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                >
                  Ver Detalles
                </motion.span>
              </motion.div>
            </motion.div>
          </Link>
        </li>

        <li>
          <Link to="/detalle-novedad" className="group relative block">
            <motion.div
              className="relative overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
              variants={imageVariants}
            >
              <img
                src={nov2}
                alt=""
                className="aspect-square w-full object-cover transition-opacity duration-500 hover:opacity-80"
              />
              <motion.div className="absolute inset-0 flex flex-col items-start justify-end p-6 group-hover:opacity-90">
                <motion.h3
                  className="text-xl font-medium text-white"
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                >
                  Caballo Appaloosa
                </motion.h3>
                <motion.span
                  className="mt-1.5 inline-block bg-white px-5 py-3 text-xs font-medium uppercase tracking-wide text-gray-900"
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                >
                  Ver Detalles
                </motion.span>
              </motion.div>
            </motion.div>
          </Link>
        </li>

        <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <Link to="/detalle-novedad" className="group relative block">
            <motion.div
              className="relative overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
              variants={imageVariants}
            >
              <img
                src={nov3}
                alt=""
                className="aspect-square w-full object-cover transition-opacity duration-500 hover:opacity-80"
              />
              <motion.div className="absolute inset-0 flex flex-col items-start justify-end p-6 group-hover:opacity-90">
                <motion.h3
                  className="text-xl font-medium text-white"
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                >
                  Caballo PRE
                </motion.h3>
                <motion.span
                  className="mt-1.5 inline-block bg-white px-5 py-3 text-xs font-medium uppercase tracking-wide text-gray-900"
                  variants={textVariants}
                  initial="initial"
                  animate="animate"
                >
                  Ver Detalles
                </motion.span>
              </motion.div>
            </motion.div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Novedades;
