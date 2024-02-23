import React from 'react';
import potro1 from 'assets/img/cventa/cdm/potro1.JPG'
import potro2 from 'assets/img/cventa/cdm/potro2.JPG'
import crome1 from 'assets/img/cventa/cdm/crome1.JPG'
import crome2 from 'assets/img/cventa/cdm/crome2.JPG'
import revolut1 from 'assets/img/cventa/cdm/revolut1.JPG'
import revolut2 from 'assets/img/cventa/cdm/revolut2.JPG'
import wimpy1 from 'assets/img/cventa/cdm/wimpy1.JPG'
import wimpy2 from 'assets/img/cventa/cdm/wimpy2.JPG'

function VentasCdm() {
  return (

    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header>
    <h2 className="text-7xl font-bold text-blue-gray-900 mb-4 lg:text-8xl">
          Colección Cuarto de Milla
                      </h2>
      <p className="mt-4 max-w-md text-xl text-gray-600">
            Cada uno de estos magníficos ejemplares
            te ofrece la combinación perfecta de velocidad, resistencia y temperamento dócil.
          </p>
    </header>

    <div className="mt-8 flex items-center justify-between">
      <div className="flex rounded border border-gray-100">
        <button
          className="inline-flex h-10 w-10 items-center justify-center border-e text-gray-600 transition hover:bg-gray-50 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
            />
          </svg>
        </button>

        <button
          className="inline-flex h-10 w-10 items-center justify-center text-gray-600 transition hover:bg-gray-50 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
      </div>

      <div>
            <label htmlFor="SortBy" className="sr-only">Ordenar por</label>

            <select id="SortBy" className="h-10 rounded border-gray-300 text-sm">
              <option>Ordenar por</option>
              <option value="Title, DESC">Nombre, descendente</option>
              <option value="Title, ASC">Nombre, ascendente</option>
              <option value="Price, DESC">Precio, descendente</option>
              <option value="Price, ASC">Precio, ascendente</option>
            </select>
          </div>
        </div>


        <ul className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <li>
            <a href="/catalogo/ventas/cuartodemilla/potro" className="group block overflow-hidden">                          {/*CAMBIAR POR ID FASE BACKEND */}
              <div className="relative h-[350px] w-full sm:h-[450px]">
                <img
                  src={potro1}
                  alt=""
                  className="h-[450px] w-full absolute inset-0  object-cover opacity-100 group-hover:opacity-0 transition duration-1000 group-hover:scale-105 sm:h-[450px]"
                />
                <img
                  src={potro2}
                  alt=""
                  className="h-[450px] w-full absolute inset-0  object-cover opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:scale-105 sm:h-[450px]"
                />
              </div>
              <div className="relative bg-white pt-3">
                <h3 className="text-sm text-gray-700 transition duration-1000">GUNA VOODOO</h3>
                <div className="mt-1.5 flex items-center justify-between text-gray-900">
                  <p className="tracking-wide">$100,000</p>
                  <p className="text-xs uppercase tracking-wide">Yegua</p>
                </div>
              </div>
            </a>
          </li>


      <li>

      <a href="#" className="group block overflow-hidden">
        <div className="relative h-[350px] w-full sm:h-[450px]">

        <img
                    src={wimpy1}
                    alt=""
                          className="h-[450px] w-full absolute inset-0  object-cover opacity-100 group-hover:opacity-0 transition duration-1000 group-hover:scale-105 sm:h-[450px]"
                        />

                        <img
                    src={wimpy2}
                    alt=""
                          className="h-[450px] w-full absolute inset-0  object-cover opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:scale-105 sm:h-[450px]"
                        />
                          </div>


  <div className="relative bg-white pt-3">
    <h3 className="text-sm text-gray-700 transition duration-1000">
    GUN WIMPY JAC    </h3>

    <div className="mt-1.5 flex items-center justify-between text-gray-900">
    <p className="tracking-wide">$80,000</p>

      <p className="text-xs  uppercase tracking-wide">Yegua</p>
    </div>
    </div>
        </a>
      </li>

      <li>

      <a href="#" className="group block overflow-hidden">
        <div className="relative h-[350px] w-full sm:h-[450px]">

        <img
                    src={crome1}
                    alt=""
                    className="h-[450px] w-full absolute inset-0  object-cover opacity-100 group-hover:opacity-0 transition duration-1000 group-hover:scale-105 sm:h-[450px]"
                    />

                        <img
                    src={crome2}
                    alt=""
                          className="h-[450px] w-full absolute inset-0  object-cover opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:scale-105 sm:h-[450px]"
                        />
                          </div>


  <div className="relative bg-white pt-3">
    <h3 className="text-sm text-gray-700 transition duration-1000">
    SWEET CROME
    </h3>

    <div className="mt-1.5 flex items-center justify-between text-gray-900">
    <p className="tracking-wide">$120,000</p>

      <p className="text-xs  uppercase tracking-wide">Caballo</p>
    </div>
    </div>
        </a>
      </li>

      <li>

      <a href="#" className="group block overflow-hidden">
        <div className="relative h-[350px] w-full sm:h-[450px]">

        <img
                    src={revolut1}
                    alt=""
                          className="h-[450px] w-full absolute inset-0  object-cover opacity-100 group-hover:opacity-0 transition duration-1000 group-hover:scale-105 sm:h-[450px]"
                        />

                        <img
                    src={revolut2}
                    alt=""
                          className="h-[450px] w-full absolute inset-0  object-cover opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:scale-105 sm:h-[450px]"
                        />
                          </div>


  <div className="relative bg-white pt-3">
    <h3 className="text-sm text-gray-700 transition duration-1000">
    GUN WIMPY REVOLUT    </h3>

    <div className="mt-1.5 flex items-center justify-between text-gray-900">
    <p className="tracking-wide">$60,000</p>

      <p className="text-xs  uppercase tracking-wide">Caballo</p>
    </div>
    </div>
        </a>
      </li>
    </ul>
  </div>
</section>


  );
}

export default VentasCdm;
