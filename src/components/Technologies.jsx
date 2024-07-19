import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const webTechnologies = [
  { name: 'React', description: 'Biblioteca para construir interfaces de usuario.' },
  { name: 'Node.js', description: 'Entorno de ejecución para JavaScript en el servidor.' },
  { name: 'Express', description: 'Framework para aplicaciones web en Node.js.' },
  { name: 'HTML', description: 'Lenguaje de marcado para la creación de páginas web.' },
];

const designTechnologies = [
  { name: 'CSS', description: 'Lenguaje de estilo para diseñar páginas web.' },
  { name: 'Tailwind', description: 'Framework de CSS para diseño rápido.' },
  { name: 'Material-UI', description: 'Biblioteca de componentes de React para diseño.' },
  { name: 'Bootstrap', description: 'Framework de CSS para diseño responsivo.' },
];

const databases = [
  { name: 'MongoDB', description: 'Base de datos NoSQL orientada a documentos.' },
  { name: 'SQL', description: 'Lenguaje de consulta estructurado para bases de datos relacionales.' },
];

const designTools = [
  { name: 'JSON Web Token (JWT)', description: 'Método para representar reclamos de forma segura.' },
  { name: 'Ajax', description: 'Técnica para crear aplicaciones web rápidas y dinámicas.' },
  { name: 'Bcrypt', description: 'Biblioteca para hashing de contraseñas.' },
];

const maintenanceTechnologies = [
  { name: 'Mantenimiento de Laptop', description: 'Servicios de mantenimiento para laptops.' },
  { name: 'Mantenimiento de Desktop', description: 'Servicios de mantenimiento para desktops.' },
  { name: 'Mantenimiento de Servidores', description: 'Servicios de mantenimiento para servidores' },
  { name: 'Mantenimiento de Impresoras', description: 'Servicios de mantenimiento para impresoras.' },
  { name: 'Respaldo de Informacion', description: 'Respaldo de informacion previamente.' },
];

const softwareTechnologies = [
  { name: 'Windows 10', description: 'Sistema operativo de Microsoft.' },
  { name: 'Windows 11', description: 'Última versión del sistema operativo de Microsoft.' },
  { name: 'Office 2022', description: 'Suite ofimática de Microsoft.' },
  { name: 'Adobe Products', description: 'Herramientas de Adobe para diseño y productividad.' },
  { name: 'Nitro PDF', description: 'Software para crear y editar archivos PDF.' },
];

const Technologies = () => {
  return (
    <section id="technologies" className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Tecnologías y Herramientas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-4">Lenguajes de Diseño Web</h3>
            <div className="space-y-4">
              {webTechnologies.map((tech, index) => (
                <Card key={index} className="h-full">
                  <CardContent>
                    <Typography variant="h6" component="div" className="font-bold">
                      {tech.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {tech.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Estilos de Diseño Web</h3>
            <div className="space-y-4">
              {designTechnologies.map((tech, index) => (
                <Card key={index} className="h-full">
                  <CardContent>
                    <Typography variant="h6" component="div" className="font-bold">
                      {tech.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {tech.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Bases de Datos</h3>
            <div className="space-y-4">
              {databases.map((tech, index) => (
                <Card key={index} className="h-full">
                  <CardContent>
                    <Typography variant="h6" component="div" className="font-bold">
                      {tech.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {tech.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Herramientas de Diseño</h3>
            <div className="space-y-4">
              {designTools.map((tool, index) => (
                <Card key={index} className="h-full">
                  <CardContent>
                    <Typography variant="h6" component="div" className="font-bold">
                      {tool.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {tool.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Mantenimiento</h3>
            <div className="space-y-4">
              {maintenanceTechnologies.map((tech, index) => (
                <Card key={index} className="h-full">
                  <CardContent>
                    <Typography variant="h6" component="div" className="font-bold">
                      {tech.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {tech.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Software</h3>
            <div className="space-y-4">
              {softwareTechnologies.map((tech, index) => (
                <Card key={index} className="h-full">
                  <CardContent>
                    <Typography variant="h6" component="div" className="font-bold">
                      {tech.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {tech.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;

