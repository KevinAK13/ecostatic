import { connect } from 'react-redux';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useState, Fragment, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import caballo from 'assets/img/caballo.png';
import { BeatLoader } from 'react-spinners';

const solutions = [
  {
    name: 'Catálogo',
    description: '',
    href: '/catalogo',
  },
  {
    name: 'Nosotros',
    description: '',
    href: '/nosotros',
  },
  {
    name: 'Contacto',
    description: '',
    href: '/contacto',
  },
];

function Navbar() {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  function scrollFunction() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add('shadow-navbar', 'bg-white');
      } else {
        navbar.classList.remove('shadow-navbar', 'bg-white');
      }
    }
  }

  return (
    <nav
      data-scroll
      data-scroll-id="hey"
      id="navbar"
      className="w-full py-4 lg:py-6 top-0 transition duration-300 ease-in-out z-40 fixed"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="-ml-4 -mt-2 flex items-center justify-between lg:flex-nowrap">
          <Link to="/" className="ml-4 mt-2">
            <img src={caballo} width={60} height={30} alt="caballo-logo" />
          </Link>
          <div className="ml-4 mt-2 flex-shrink-0">
            <div className="hidden lg:flex space-x-4">
              {solutions.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className="text-lg font-medium leading-6 text-gray-900 hover:text-orange-500 transition duration-300 ease-in-out mx-4"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
            <div className="lg:hidden">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button className="text-4xl focus:ring-orange focus:outline-none">
                      {open ? (
                        <i className="bx bx-x"></i>
                      ) : (
                        <i className="bx bx-menu"></i>
                      )}
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute -left-32 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                            {solutions.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                              >
                                <div className="ml-4 flex items-center">
                                  <p className="text-xl font-light text-gray-900 mr-4 transition duration-300 ease-in-out hover:text-orange-500">
                                    {item.name}
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Navbar);
