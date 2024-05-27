import React from 'react';
import DashboardLayout from './DashboardLayout';
import { banner, fondo1, fondo2 } from '../assets';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="w-full h-[calc(95vh-45px)] flex flex-col gap-5 pt-4 justify-center">
        <div className="w-full overflow-hidden transition-all duration-300 ease-in-out flex justify-center">
          <div
            className="h-64 bg-[#03073c] rounded-xl shadow-lg relative w-11/12"
            style={{
              background: `url(${fondo1}) no-repeat center center / cover`,
            }}
          >
            <div className="absolute bottom-5 right-5 text-white text-right">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1">¡Bienvenido a tu Dashboard de COMUNI!</h1>
              <h2 className="text-1xl sm:text-2xl md:text-3xl text-meta-5 mb-1">Mira o modifica tu grupo</h2>
              <p className="text-sm md:text-lg mb-1">Gestiona y actualiza la información de tu grupo en cualquier momento.</p>
              <div className="flex items-center justify-end mb-1">
                <Link to={'/dashboard/myGroup'} className="bg-boxdark text-sm md:text-lg text-white py-2 px-4 rounded">
                  Ver más
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full overflow-hidden transition-all duration-300 ease-in-out flex justify-center">
          <div
            className="h-64 bg-[#03073c] rounded-xl shadow-lg relative w-11/12 "
            style={{
              background: `url(${fondo2}) no-repeat center center / cover`,
            }}
          >
            <div className="absolute bottom-5 left-5 text-white text-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1">Explora y Gestiona tus Comunidades en COMUNI</h1>
              <h2 className="text-1xl sm:text-2xl md:text-3xl text-meta-5 mb-1">Publicar noticias e imágenes</h2>
              <p className="text-sm md:text-lg mb-1">Comparte las últimas novedades y eventos de tu comunidad.</p>
              <div className="flex items-center justify-start mb-1">
                <Link to={'/dashboard/myNotices'} className="bg-boxdark text-sm md:text-lg text-white py-2 px-4 rounded">
                  Ver más
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
