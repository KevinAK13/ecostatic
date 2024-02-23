import { useMediaQuery } from 'react-responsive';
import { Carousel } from "@material-tailwind/react";

export function ProductCard() {
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });
  const isMediumScreen = useMediaQuery({ minWidth: 641, maxWidth: 768 });
  const isLargeScreen = useMediaQuery({ minWidth: 769 });

  const getBorderRadius = () => {
    if (isSmallScreen) return '1rem';
    if (isMediumScreen) return '1.5rem';
    if (isLargeScreen) return '2rem';
    // Agrega más condiciones según sea necesario
    return '2rem';
  };

  return (
    <div className="max-w-md mx-auto">
      <Carousel loop={true} autoplay={false} className="rounded-md" style={{ borderRadius: getBorderRadius() }}>
        <img
          src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="image 1"
          className="h-full w-full object-cover object-center rounded-xl"
        />
        <img
          src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="image 2"
          className="h-full w-full object-cover object-center rounded-xl"
        />
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 3"
          className="h-full w-full object-cover object-center rounded-xl"
        />
      </Carousel>

      <div className="mt-4 p-4 bg-white rounded-md shadow-md">
        <h3 className="text-xl font-semibold text-gray-800">Product Name</h3>
        <p className="mt-2 text-sm text-gray-600">
          Description of the product. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className="mt-4 text-lg font-bold text-orange-button">$299</p>
      </div>
    </div>
  );
}

export default ProductCard;
