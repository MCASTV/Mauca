import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const services = [
  { title: 'Mantenimiento de Equipos', description: 'Mantenga sus equipos en perfecto estado con nuestros servicios profesionales.' },
  { title: 'Instalación de Sistemas Operativos', description: 'Instalamos y configuramos sistemas operativos según sus necesidades.' },
  { title: 'Diseño Web', description: 'Diseñamos sitios web modernos y funcionales para su negocio.' },
  { title: 'Alojamiento Web', description: 'Ofrecemos soluciones de alojamiento web seguras y confiables.' },
];

const Services = () => {
  return (
    <section id="services" className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="h-full">
              <CardContent>
                <Typography variant="h6" component="div" className="font-bold">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
