import React from 'react';
import cesp1 from 'assets/img/Caballos/caz1.JPG';
import cesp2 from 'assets/img/Caballos/caz2.JPG';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button } from "@material-tailwind/react";


function Azteca() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-stretch">
        <div className="lg:col-span-1">
          <div className="rounded bg-gray-100 p-6 sm:p-8">
            <div className="mx-auto max-w-md text-center lg:text-left">
              <header>
                <h2 className="text-2xl font-bold text-gray-900 sm:text-4xl">Raza Azteca</h2>
                <p className="mt-4 text-gray-700">
                  Descubre la elegancia y la destreza en nuestra exclusiva colección de caballos españoles.
                </p>
              </header>
              <a               className=" mt-8 inline-block"
href="/catalogo">
        <Button variant="gradient" className="rounded-sm"  size="lg" >              Ver Todos
</Button>
      </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 lg:pl-4">
          <Slider {...settings} className="max-w-sm mx-auto lg:mx-0">
            <div className="group block relative overflow-hidden">
              <img
                src={cesp1}
                alt=""
                className="aspect-square w-full h-60 rounded object-cover transition-opacity duration-300 group-hover:opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50">
                <h3 className="text-xl font-medium text-center">Modelo Clásico</h3>
              </div>
            </div>

            <div className="group block relative overflow-hidden">
              <img
                src={cesp2}
                alt=""
                className="aspect-square w-full h-60 rounded object-cover transition-opacity duration-300 group-hover:opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black bg-opacity-50">
                <h3 className="text-xl font-medium text-center">Modelo Elegante</h3>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Azteca;
