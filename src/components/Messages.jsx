import React from 'react'
import DashboardLayout from './DashboardLayout'
import Breadcrumb from './Breadcrumb'
import Table from './Table'
import PaginationNumber from './PaginationNumber';
import { FaExchangeAlt, FaTrash } from 'react-icons/fa';
import { BiMessageAdd } from 'react-icons/bi';

export default function Messages() {
  const packageData = [
    {
      name: 'Free package',
      email: 'email@email.com',
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quibusdam quasi rerum blanditiis reiciendis, quo labore maiores excepturi? Illo autem ipsam ullam accusantium incidunt in, dolores odit explicabo consequatur soluta.`,
    },
    {
      name: 'Free package',
      email: 'email@email.com',
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quibusdam quasi rerum blanditiis reiciendis, quo labore maiores excepturi? Illo autem ipsam ullam accusantium incidunt in, dolores odit explicabo consequatur soluta.`,
    },
    {
      name: 'Free package',
      email: 'email@email.com',
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quibusdam quasi rerum blanditiis reiciendis, quo labore maiores excepturi? Illo autem ipsam ullam accusantium incidunt in, dolores odit explicabo consequatur soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quibusdam quasi rerum blanditiis reiciendis, quo labore maiores excepturi? Illo autem ipsam ullam accusantium incidunt in, dolores odit explicabo consequatur soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quibusdam quasi rerum blanditiis reiciendis, quo labore maiores excepturi? Illo autem ipsam ullam accusantium incidunt in, dolores odit explicabo consequatur soluta.`,
    },
    {
      name: 'Free package',
      email: 'email@email.com',
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quibusdam quasi rerum blanditiis reiciendis, quo labore maiores excepturi? Illo autem ipsam ullam accusantium incidunt in, dolores odit explicabo consequatur soluta.`,
    },
    {
      name: 'Free package',
      email: 'email@email.com',
      message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quibusdam quasi rerum blanditiis reiciendis, quo labore maiores excepturi? Illo autem ipsam ullam accusantium incidunt in, dolores odit explicabo consequatur soluta.`,
    },

  ];
  const columns = ["Name", "Email", "Message", "Actions"]
  return (
    <DashboardLayout>
      <Breadcrumb pageName="Messages" />
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
                      <p className=" text-white">
                        {packageItem.email}
                      </p>
                    </td>
                    <td className="border-b  py-5 px-4 border-strokedark">
                      <p className="text-white h-30 scroll-py-px overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100">
                        {packageItem.message}
                      </p>
                    </td>
                    <td className="border-b  py-5 px-4 border-strokedark">
                      <div className="flex items-center space-x-3.5 gap-5 justify-center">
                        <button className="hover:text-primary">
                          <BiMessageAdd className='fill-white' />
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
    </DashboardLayout>
  )
}
