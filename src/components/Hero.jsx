import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="bg-gray-800 text-white h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Mauca Consultury</h1>
        <p className="text-lg mb-8">Ofrecemos mantenimiento de equipos, instalación de sistemas operativos, diseño web y alojamiento web.</p>
        <a href="#services" className="bg-blue text-white px-6 py-3 rounded-full hover:bg-blue-600">Nuestros Servicios</a>
        
        <a href="#technologies" className="bg-blue text-white px-6 py-3 rounded-full hover:bg-blue-600">Nuestras tecnologias</a>
      </div>
    </section>
  );
};

export default Hero;
