import React, { useState } from 'react'
import Breadcrumb from './Breadcrumb'
import Table from './Table'
import DashboardLayout from './DashboardLayout'
import PaginationNumber from './PaginationNumber';
import { FaExchangeAlt, FaTrash } from 'react-icons/fa';


export default function Users() {
    const [selectedImage, setSelectedImage] = useState(null);
    const packageData = [
        {
            name: 'Free package',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quibusdam quasi rerum blanditiis reiciendis, quo labore maiores excepturi? Illo autem ipsam ullam accusantium incidunt in, dolores odit explicabo consequatur soluta.',
            logo: 'https://via.placeholder.com/150',
            background: 'https://via.placeholder.com/150',
            linkFacebook: 'http:\\facebook.com',
            linkInstagram: 'http:\\facebook.com',
            linkWhatsapp: 'http:\\facebook.com',
        },
        {
            name: 'Free package',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quibusdam quasi rerum blanditiis reiciendis, quo labore maiores excepturi? Illo autem ipsam ullam accusantium incidunt in, dolores odit explicabo consequatur soluta.',
            logo: 'https://via.placeholder.com/150',
            background: 'https://via.placeholder.com/150',
            linkFacebook: 'http:\\facebook.com',
            linkInstagram: 'http:\\facebook.com',
            linkWhatsapp: 'http:\\facebook.com',
        },
        {
            name: 'Free package',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quibusdam quasi rerum blanditiis reiciendis, quo labore maiores excepturi? Illo autem ipsam ullam accusantium incidunt in, dolores odit explicabo consequatur soluta.',
            logo: 'https://via.placeholder.com/150',
            background: 'https://via.placeholder.com/150',
            linkFacebook: 'http:\\facebook.com',
            linkInstagram: 'http:\\facebook.com',
            linkWhatsapp: 'http:\\facebook.com',
        },
        {
            name: 'Free package',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quibusdam quasi rerum blanditiis reiciendis, quo labore maiores excepturi? Illo autem ipsam ullam accusantium incidunt in, dolores odit explicabo consequatur soluta.',
            logo: 'https://via.placeholder.com/150',
            background: 'https://via.placeholder.com/150',
            linkFacebook: 'http:\\facebook.com',
            linkInstagram: 'http:\\facebook.com',
            linkWhatsapp: 'http:\\facebook.com',
        },
        {
            name: 'Free package',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quibusdam quasi rerum blanditiis reiciendis, quo labore maiores excepturi? Illo autem ipsam ullam accusantium incidunt in, dolores odit explicabo consequatur soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quibusdam quasi rerum blanditiis reiciendis, quo labore maiores excepturi? Illo autem ipsam ullam accusantium incidunt in, dolores odit explicabo consequatur soluta.',
            logo: 'https://via.placeholder.com/150',
            background: 'https://via.placeholder.com/150',
            linkFacebook: 'http:\\facebook.com',
            linkInstagram: 'http:\\facebook.com',
            linkWhatsapp: 'http:\\facebook.com',
        },
    ];
    const columns = ["Name Group", "Description", "Images", "Links", "Actions"]
    return (
        <DashboardLayout>
            <Breadcrumb pageName="New Users" />
            <div className="flex flex-col gap-10">
                <PaginationNumber />
                <div className="rounded-sm border px-5 pt-6 pb-2.5 shadow-default border-strokedark bg-boxdark sm:px-7.5 xl:pb-1">
                    <div className="max-w-full overflow-x-auto">
                        <table className="w-full table-auto">
                            <thead>
                                <tr className=" text-left bg-meta-4">
                                    {columns.map((colum, index) => (
                                        <th key={index} className="min-w-[220px] py-4 px-4 font-medium  text-white xl:pl-11">
                                            {colum}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {packageData.map((packageItem, key) => (
                                    <tr key={key}>
                                        <td className="border-b  py-5 px-4 pl-9 border-strokedark xl:pl-11">
                                            <h5 className="font-medium  text-white">
                                                {packageItem.name}
                                            </h5>
                                        </td>
                                        <td className="border-b  py-5 px-4 border-strokedark">
                                            <p className="text-white h-30 scroll-py-px overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100">
                                                {packageItem.description}
                                            </p>
                                        </td>
                                        <td className="border-b  py-5 px-4 border-strokedark">
                                            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 gap-5">
                                                <img src={packageItem.logo} onClick={() => setSelectedImage(packageItem.logo)} className='h-20 w-20 cursor-pointer' alt="profile" />
                                                <img src={packageItem.background} onClick={() => setSelectedImage(packageItem.background)} className='h-20 w-20 cursor-pointer' alt="profile" />
                                            </div>
                                        </td>
                                        <td className="border-b flex flex-col  py-5 px-4 border-strokedark gap-2">
                                            <p
                                                className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium bg-success text-success`}
                                            >
                                                {packageItem.linkFacebook}
                                            </p>
                                            <p
                                                className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium bg-success text-success`}
                                            >
                                                {packageItem.linkFacebook}
                                            </p>
                                            <p
                                                className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium bg-success text-success`}
                                            >
                                                {packageItem.linkFacebook}
                                            </p>
                                        </td>
                                        <td className="border-b  py-5 px-4 border-strokedark">
                                            <div className="flex items-center justify-center space-x-3.5 gap-5">
                                                <button className="hover:text-primary">
                                                    <FaExchangeAlt className='fill-white' />
                                                </button>
                                                <button className="hover:text-primary">
                                                    <FaTrash className='fill-white' />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {selectedImage && (
                                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50' onClick={() => setSelectedImage(null)}>
                                    <span className='absolute top-5 right-5 text-white text-4xl font-bold cursor-pointer'>&times;</span>
                                    <img className='max-w-[750px] max-h-[auto] rounded-lg' src={selectedImage} alt="Noticia" />
                                </div>
                            )}
        </DashboardLayout>
    )
}
