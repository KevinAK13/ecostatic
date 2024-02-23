import { Button } from "@material-tailwind/react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import home1 from 'assets/img/Caballos/home1.JPG';
import home2 from 'assets/img/Caballos/home2.JPG';
import home3 from 'assets/img/Caballos/home3.JPG';

const Barra = () => {
  const sliderSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'ease-in-out',
    arrows: false,
    dots: false,
  };

  return (
    <section 
    >

      <div className="mx-auto max-w-full py-12 sm:px-4 lg:px-full md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:ml-5">
          <div className="mx-auto max-w-full relative transform scale-100 hover:scale-105 hover:shadow-lg transition-transform duration-500" style={{ margin: 0, padding: 0 }}>
          <Slider {...sliderSettings}>
  {[home1, home2, home3].map((image, index) => (
    <div key={index} className="h-96">
      <img
        alt=""
        src={image}
        className="w-full h-96 object-cover overflow-hidden"
      />
    </div>
  ))}
</Slider>
          </div>

          <div className="flex flex-col items-center text-center lg:text-left mb-4 lg:mb-0">
            <h2 className="text-4xl font-bold text-blue-gray-900 mb-4">
              Nuestros caballos
            </h2>

            <p className="text-gray-600 font-light text-xl mb-6 text-center">
  Descubre nuestra colección de caballos en venta, donde la elegancia y belleza definen cada raza.

</p>
<p className="text-gray-600 font-light text-xl mb-6 text-center">

  ¿Quieres ampliar tu línea equina? También ofrecemos servicios de maquila con yeguas y sementales seleccionados. 
</p>

            <a href="/catalogo">
        <Button variant="gradient" className="rounded-sm"  size="lg" >              Ver Catálogo
</Button>
      </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Barra;
