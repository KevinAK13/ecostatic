import { useEffect, useRef } from 'react';

function Images() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoEnd = () => {
      video.currentTime = 0; // Reinicia el video al principio
      video.play(); // Vuelve a reproducir el video
    };

    video.addEventListener('ended', handleVideoEnd);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, []);

  return (
    <div className="relative w-full h-[38rem]">
      <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover rounded-sm" autoPlay muted>
        <source src="https://cdn.pixabay.com/vimeo/362769997/amanecer-27257.mp4?rendition=source&expiry=1708631693&hash=838aaeeaca3fae3ada3c25f637a13d60c9c32df2" type="video/mp4" />
        Su navegador no soporta la etiqueta de video.
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container bg-transparent text-center">
          <h1 className="text-3xl font-semibold text-white lg:text-6xl">LOS MEJORES EN LA REGIÓN</h1>
          <p className="text-white lg:text-3xl">Desde 2019</p>
        </div>
      </div>
    </div>
  );
}

export default Images;
