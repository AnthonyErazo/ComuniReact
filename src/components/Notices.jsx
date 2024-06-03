import React, { useEffect, useState } from 'react'
import DashboardLayout from './DashboardLayout'
import Breadcrumb from './Breadcrumb'
import Pagination from './PaginationNumber'

export default function Notices() {
  const [loading, setLoading] = useState(true);
  const group = {
      name: 'Centro Cultural Nucleo',
      description: 'El Centro Cultural Núcleo, es uno de los centro culturales emblemáticos de la Facultad Nacional de Ingeniería Industrial y de Sistemas de la Universidad Nacional de Ingeniería de Perú, con más de 30 años formando líderes capaces de gestionar proyectos, realizar investigación y superarse constantemente ha sido y sigue siendo cuna de profesionales destacados en el ámbito laboral, fomentando el desarrollo de capacidades y habilidades diversas se ha logrado quedar muy bien posicionados en concursos de proyectos estudiantiles a nivel nacional e internacional, buscando siempre la excelencia, el Centro Cultural tiene sus puertas abiertas para aquellas personas con ganas de marcar una diferencia significativas y positiva en la sociedad.',
      img: {
          name: 'nombre imagen',
          ref: 'https://scontent.flim6-4.fna.fbcdn.net/v/t39.30808-1/434493740_817644583724303_4719665726187510333_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VZxul79EW28Q7kNvgEuJsZ3&_nc_ht=scontent.flim6-4.fna&oh=00_AYBBetv0Jl0B0mIeJzIKLeDZBdoBn57LFVot3dxR_V-OSQ&oe=66557B68'
      },
      status: true,
      linkWhats: 'https://wa.me/',
      linkFace: 'https://www.facebook.com/',
      linkInsta: 'https://www.instagram.com/',
      notice: [{
          name: 'img1',
          ref: 'https://scontent.flim33-1.fna.fbcdn.net/v/t39.30808-6/445365976_122186827154068653_7133497250983221506_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG44bGKVSICVMGksVzQmFR-VAynEAM-9q5UDKcQAz72rket6fsAXGF50QlyBVQvyEses5cfSIHiHdnUAO4cQnnH&_nc_ohc=NRPPoXnFVxsQ7kNvgEcVL9F&_nc_ht=scontent.flim33-1.fna&oh=00_AYAdpwHTgwodCu_RHzpyO0OkGyYkqDir3cUwZ2kO2dmxig&oe=6661B9D0'
      }, {
          name: 'img2',
          ref: 'https://scontent.flim33-1.fna.fbcdn.net/v/t39.30808-6/445365976_122186827154068653_7133497250983221506_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG44bGKVSICVMGksVzQmFR-VAynEAM-9q5UDKcQAz72rket6fsAXGF50QlyBVQvyEses5cfSIHiHdnUAO4cQnnH&_nc_ohc=NRPPoXnFVxsQ7kNvgEcVL9F&_nc_ht=scontent.flim33-1.fna&oh=00_AYAdpwHTgwodCu_RHzpyO0OkGyYkqDir3cUwZ2kO2dmxig&oe=6661B9D0'
      }, {
          name: 'img3',
          ref: 'https://scontent.flim33-1.fna.fbcdn.net/v/t39.30808-6/445365976_122186827154068653_7133497250983221506_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG44bGKVSICVMGksVzQmFR-VAynEAM-9q5UDKcQAz72rket6fsAXGF50QlyBVQvyEses5cfSIHiHdnUAO4cQnnH&_nc_ohc=NRPPoXnFVxsQ7kNvgEcVL9F&_nc_ht=scontent.flim33-1.fna&oh=00_AYAdpwHTgwodCu_RHzpyO0OkGyYkqDir3cUwZ2kO2dmxig&oe=6661B9D0'
      }, {
          name: 'img2',
          ref: 'https://scontent.flim33-1.fna.fbcdn.net/v/t39.30808-6/445365976_122186827154068653_7133497250983221506_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG44bGKVSICVMGksVzQmFR-VAynEAM-9q5UDKcQAz72rket6fsAXGF50QlyBVQvyEses5cfSIHiHdnUAO4cQnnH&_nc_ohc=NRPPoXnFVxsQ7kNvgEcVL9F&_nc_ht=scontent.flim33-1.fna&oh=00_AYAdpwHTgwodCu_RHzpyO0OkGyYkqDir3cUwZ2kO2dmxig&oe=6661B9D0'
      }, {
          name: 'img2',
          ref: 'https://scontent.flim33-1.fna.fbcdn.net/v/t39.30808-6/445365976_122186827154068653_7133497250983221506_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG44bGKVSICVMGksVzQmFR-VAynEAM-9q5UDKcQAz72rket6fsAXGF50QlyBVQvyEses5cfSIHiHdnUAO4cQnnH&_nc_ohc=NRPPoXnFVxsQ7kNvgEcVL9F&_nc_ht=scontent.flim33-1.fna&oh=00_AYAdpwHTgwodCu_RHzpyO0OkGyYkqDir3cUwZ2kO2dmxig&oe=6661B9D0'
      }, {
          name: 'img2',
          ref: 'https://scontent.flim33-1.fna.fbcdn.net/v/t39.30808-6/445365976_122186827154068653_7133497250983221506_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG44bGKVSICVMGksVzQmFR-VAynEAM-9q5UDKcQAz72rket6fsAXGF50QlyBVQvyEses5cfSIHiHdnUAO4cQnnH&_nc_ohc=NRPPoXnFVxsQ7kNvgEcVL9F&_nc_ht=scontent.flim33-1.fna&oh=00_AYAdpwHTgwodCu_RHzpyO0OkGyYkqDir3cUwZ2kO2dmxig&oe=6661B9D0'
      }]
  };

  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 2000);
  }, []);
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="My Notices" />
        <div className="rounded-sm border  shadow-default border-strokedark bg-boxdark">
          <div className="border-b  py-4 px-7 border-strokedark">
            <h3 className="font-medium  text-white">
              Your Notice
            </h3>
          </div>
          <div className="p-7">
            <form action="#">

              <div
                id="FileUpload"
                className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary  py-4 px-4 bg-meta-4 sm:py-7.5"
              >
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                />
                <div className="flex flex-col items-center justify-center space-y-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border  border-strokedark bg-boxdark">
                    <div className='w-8 h-8'>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                          fill="#3C50E0"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                          fill="#3C50E0"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                          fill="#3C50E0"
                        />
                      </svg>
                    </div>
                  </span>
                  <p>
                    <span className="text-primary">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                  <p>(max, 800 X 800px)</p>
                </div>
              </div>

              <div className="flex justify-end gap-4.5">
                <button
                  className="flex justify-center rounded borderpy-2 px-6 font-medium hover:shadow-1 border-strokedark text-white"
                  type="submit"
                >
                  Cancel
                </button>
                <button
                  className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
        <Pagination />
        {loading ? (<section id="clients" className='grid grid-cols-2 lg:grid-cols-3 gap-5 animate-pulse'>
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="bg-dimWhite w-full h-[250px] sm:h-[400px] lg:h-[390px] rounded-lg"></div>
                        ))}
                    </section>) : (
                        <section id="clients" className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
                            {group.notice.map((notice, index) => (
                                <img
                                    key={index}
                                    src={notice.ref}
                                    alt={notice.name}
                                    onClick={() => setSelectedImage(notice.ref)}
                                    className='w-full h-auto object-cover rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105'
                                />
                            ))}
                            {selectedImage && (
                                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50' onClick={() => setSelectedImage(null)}>
                                    <span className='absolute top-5 right-5 text-white text-4xl font-bold cursor-pointer'>&times;</span>
                                    <img className='max-w-[750px] max-h-[auto] rounded-lg' src={selectedImage} alt="Noticia" />
                                </div>
                            )}
                        </section>
                    )}
      </div>
    </DashboardLayout>
  )
}
