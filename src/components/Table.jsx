import React from 'react'
import { FaExchangeAlt, FaTrash } from 'react-icons/fa'

export default function Table({ packageData, columns,change }) {
    return (
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
                                    <p className="text-sm">${packageItem.price}</p>
                                </td>
                                <td className="border-b  py-5 px-4 border-strokedark">
                                    <p className=" text-white">
                                        {packageItem.invoiceDate}
                                    </p>
                                </td>
                                <td className="border-b  py-5 px-4 border-strokedark">
                                    <p
                                        className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${packageItem.status === 'Paid'
                                            ? 'bg-success text-success'
                                            : packageItem.status === 'Unpaid'
                                                ? 'bg-danger text-danger'
                                                : 'bg-warning text-warning'
                                            }`}
                                    >
                                        {packageItem.status}
                                    </p>
                                </td>
                                <td className="border-b  py-5 px-4 border-strokedark">
                                    <div className="flex items-center space-x-3.5">
                                        {change&&<button className="hover:text-primary">
                                            <FaExchangeAlt className='fill-white' />
                                        </button>}
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
    )
}
