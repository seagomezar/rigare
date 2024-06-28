'use client'; // components/Nav.js
import { useState } from 'react';
import Image from 'next/image';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-white py-4 px-8 flex items-center justify-between">
      <div className="flex items-center">
        <Image
          src="/logo-rigare.png"
          alt="Rigare SAS Logo"
          width={200}
          height={24}
          priority
        />
      </div>
      <nav className="hidden md:flex space-x-4">
        <a href="#servicios" className="text-black">
          Servicios
        </a>
        <a href="#aplicaciones" className="text-black">
          Aplicaciones
        </a>
        <a href="#productos" className="text-black">
          Productos
        </a>
        <a href="#contacto" className="text-black">
          Contacto
        </a>
      </nav>
      <div className="hidden md:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-black focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md z-20">
          <nav className="flex flex-col space-y-2 p-4">
            <a
              href="#servicios"
              onClick={() => {
                toggleMenu();
              }}
              className="text-black"
            >
              Servicios
            </a>
            <a
              href="#aplicaciones"
              onClick={() => {
                toggleMenu();
              }}
              className="text-black"
            >
              Aplicaciones
            </a>
            <a
              href="#productos"
              onClick={() => {
                toggleMenu();
              }}
              className="text-black"
            >
              Productos
            </a>
            <a
              href="#contacto"
              onClick={() => {
                toggleMenu();
              }}
              className="text-black"
            >
              Contacto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Nav;
