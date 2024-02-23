import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import potro1 from 'assets/img/cventa/cdm/potro1.JPG';
import potro2 from 'assets/img/cventa/cdm/potro2.JPG';
import { Button } from '@material-tailwind/react';

function Potro() {
  const images = [potro1, potro2];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'ease-in-out',
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (

    <section className="bg-white py-12">
   


<section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-4xl font-bold text-gray-900 md:text-3xl">
            WINPY HORSE QUARTER
          </h2>
    
          <p className="hidden text-gray-500 md:mt-4 md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
            sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
            quisque ut interdum tincidunt duis.
          </p>
          <div className="object-center text-center lg:text-left mt-8 ml-auto">
  <a href="https://api.whatsapp.com/send?phone=5213112666998&text=Me%20interesa%20comprar%20el%20Potro1.%20Me%20gustar%C3%ADa%20tener%20m%C3%A1s%20informaci%C3%B3n.">
    <Button fullWidth variant="gradient" className="rounded-sm px-8 py-3 text-xl">Comprar</Button>
  </a>
</div>


        </div>
      </div>
    

      <Slider {...sliderSettings}>
    {images.map((image, index) => (
      <div key={index}>
        <img 
          alt="" 
          src={image} 
          className="container pt-10 mx-auto lg:max-w-full lg:max-h-96 w-full h-96 rounded-sm" 
        />
      </div>
    ))}
  </Slider>

    </section>


      <div className="container mx-auto px-4">
        <div className="flow-root rounded-lg border border-gray-100 py-4 px-6 shadow-md">
          <dl className="-my-3 divide-y divide-gray-100 text-sm">
            <div className="grid grid-cols-1 gap-4 p-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-800">Fecha de nacimiento</dt>
              <dd className="text-gray-700 sm:col-span-2">24 de Enero 2023</dd>
            </div>

            <div className="grid grid-cols-1 gap-4 p-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-800">Raza</dt>
              <dd className="text-gray-700 sm:col-span-2">Cuarto de Milla</dd>
            </div>

            <div className="grid grid-cols-1 gap-4 p-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-800">Nombre</dt>
              <dd className="text-gray-700 sm:col-span-2">Rayo</dd>
            </div>

            <div className="grid grid-cols-1 gap-4 p-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-800">Precio</dt>
              <dd className="text-gray-700 sm:col-span-2">$25,000</dd>
            </div>

            <div className="grid grid-cols-1 gap-4 p-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-800">Descripción</dt>
              <dd className="text-gray-700 sm:col-span-2">
                <ul className="list-disc list-inside">
                  <li>Buena conformación y genética</li>
                  <li>Garantizado para cualquier persona</li>
                  <li>Listo para lucirlo en cabalgatas y desfiles</li>
                  <li>Muy voluntario</li>
                  <li>Bonita estampa</li>
                  <li>Muy manso y sin ninguna maña</li>
                  <li>Sano completamente</li>
                </ul>
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-4 p-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-800">Habilidades</dt>
              <dd className="text-gray-700 sm:col-span-2">
                <ul className="list-disc list-inside">
                  <li>Rienda de paseo</li>
                  <li>Baile</li>
                  <li>Ceja y da pierna</li>
                  <li>Iniciado en rienda charra</li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export default Potro;