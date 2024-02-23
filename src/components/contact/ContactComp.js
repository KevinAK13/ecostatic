import React from 'react';
import { Button } from '@material-tailwind/react';

function ContactComp() {
  return (
    <section className="bg-beige dark:bg-black">
      <div className="container px-6 py-12 mx-auto">
        <div className="text-center">
          <h1 className="mt-2 text-3xl font-semibold text-black dark:text-white md:text-4xl">Compartenos tu experiencia o haznos saber tus comentarios.</h1>
        </div>

        <img className="object-cover w-full h-64 mt-10 rounded-lg lg:h-96 mx-auto" src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=100" alt="" />

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3 sm:grid-cols-2">
          <div className="p-4 rounded-lg bg-beige dark:bg-gray-800 text-center">
            <span className="inline-block p-3 text-beige rounded-lg bg-beige/80 dark:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: '' }}>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"></path>
              </svg>
            </span>
            <h2 className="mt-4 text-lg font-medium text-black dark:text-white">Escribenos</h2>
            <p className="mt-2  text-sm text-gray-600 dark:text-gray-400">Envía un mensaje por WhatsApp.</p>
            <p className="mt-2 pb-5 text-sm text-beige dark:text-gray-300">+52 (311) 523-0240</p>

            <a className="pt-2"href="https://api.whatsapp.com/send?phone=5213112666998&text=Me%20interesa%20comprar%20el%20Potro1.%20Me%20gustar%C3%ADa%20tener%20m%C3%A1s%20informaci%C3%B3n.">
            <Button size="sm" variant="gradient" className=" rounded-sm text-sm">Envíar mensaje</Button>
  </a>          
  </div>



          <div className="p-4 rounded-lg bg-beige dark:bg-gray-800 text-center">
            <span className="inline-block p-3 text-beige rounded-lg bg-beige/80 dark:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </span>
            <h2 className="mt-4 text-lg font-medium text-black dark:text-white">Visitanos</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Visita nuestras instalaciones.</p>
            <p className="mt-2 pb-5 text-sm text-beige dark:text-gray-300">100 Smith Street Collingwood VIC 3066 AU</p>
            <a className="pt-2"href="https://www.google.com/maps/dir//Tepic,+Nay./@21.5015293,-104.9045171,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x842735d8893dcfdb:0x83784645f40c2d79!2m2!1d-104.8945887!2d21.5041651!3e0?hl=es-419&entry=ttu">
            <Button size="sm" variant="gradient" className=" rounded-sm text-sm">Abrir en Maps</Button>
  </a>          
          </div>

          <div className="p-4 rounded-lg bg-beige dark:bg-gray-800 text-center">
            <span className="inline-block p-3 text-beige rounded-lg bg-beige/80 dark:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </span>
            <h2 className="mt-4 text-lg font-medium text-black dark:text-white">Llamanos</h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Lunes a Viernes de 8 am a 5 pm.</p>
            <p className="mt-2 pb-5 text-sm text-beige dark:text-gray-300">+52 (311) 523-0240</p>
            <a className="pt-2"href="tel:661111222">
            <Button size="sm" variant="gradient" className=" rounded-sm text-sm">Llamar</Button>
  </a>        


          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactComp;
