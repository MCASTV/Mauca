import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Mauca Consultury</div>
        <div className="space-x-4">
          <a href="#about" className="text-gray-300 hover:text-white">Sobre Nosotros</a>
          <a href="#services" className="text-gray-300 hover:text-white">Servicios</a>
          <a href="#technologies" className="text-gray-300 hover:text-white">Tecnologias</a>
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
