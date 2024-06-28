import Image from 'next/image';
const Nav = () => {
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
        <a href="#" className="text-black">
          Servicios
        </a>
        <a href="#" className="text-black">
          Aplicaciones
        </a>
        <a href="#" className="text-black">
          Productos
        </a>
        <a href="#" className="text-black">
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
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
    </header>
  );
};

export default Nav;
