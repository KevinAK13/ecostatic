import { useEffect, useRef } from 'react';

function Header() {
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
        <source src="https://download-video.akamaized.net/v3-1/playback/6869321f-aefb-402d-b748-4eef4b066f20/a24ff755-bcd6d8a5?__token__=st=1708643858~exp=1708658258~acl=%2Fv3-1%2Fplayback%2F6869321f-aefb-402d-b748-4eef4b066f20%2Fa24ff755-bcd6d8a5%2A~hmac=90cb7f2f2319eaac23f94faa26ef9231b399daddb2a59b0377836c094eab5cfa&r=dXMtZWFzdDE%3D" type="video/mp4" />
        Su navegador no soporta la etiqueta de video.
      </video>
      <div className="absolute inset-0 flex items-center justify-center bg-gray-900/30">
        <div className="container bg-transparent text-center">
          <h1 className="text-5xl font-semibold text-white lg:text-8xl">Bienvenido a Rancho Tepic</h1>
          <p className="text-white lg:text-4xl">Venta y crianza de caballos</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
