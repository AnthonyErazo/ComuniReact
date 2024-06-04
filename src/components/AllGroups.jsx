import React, { useEffect, useState } from 'react'
import DashboardLayout from './DashboardLayout'
import Breadcrumb from './Breadcrumb';
import PaginationNumber from './PaginationNumber';
import { FaTrash } from 'react-icons/fa';
import { background, user } from '../assets';
import { getGroups } from '../services/groupService';

export default function AllGroups() {
  const [selectedImage, setSelectedImage] = useState(null);
  const brandData = [
    {
      logo: user,
      name: 'Google',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quibusdam quasi rerum blanditiis reiciendis, quo labore maiores excepturi? Illo autem ipsam ullam accusantium incidunt in, dolores odit explicabo consequatur soluta.',
      linkFacebook: 'http:\\facebook.com',
      linkInstagram: 'http:\\facebook.com',
      linkWhatsapp: 'http:\\facebook.com',
      background: background,
    },
    {
      logo: user,
      name: 'Google',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quibusdam quasi rerum blanditiis reiciendis, quo labore maiores excepturi? Illo autem ipsam ullam accusantium incidunt in, dolores odit explicabo consequatur soluta.',
      linkFacebook: 'http:\\facebook.com',
      linkInstagram: 'http:\\facebook.com',
      linkWhatsapp: 'http:\\facebook.com',
      background: background,
    },
    {
      logo: user,
      name: 'Google',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quibusdam quasi rerum blanditiis reiciendis, quo labore maiores excepturi? Illo autem ipsam ullam accusantium incidunt in, dolores odit explicabo consequatur soluta.',
      linkFacebook: 'http:\\facebook.com',
      linkInstagram: 'http:\\facebook.com',
      linkWhatsapp: 'http:\\facebook.com',
      background: background,
    },
    {
      logo: user,
      name: 'Google',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quibusdam quasi rerum blanditiis reiciendis, quo labore maiores excepturi? Illo autem ipsam ullam accusantium incidunt in, dolores odit explicabo consequatur soluta.',
      linkFacebook: 'http:\\facebook.com',
      linkInstagram: 'http:\\facebook.com',
      linkWhatsapp: 'http:\\facebook.com',
      background: background,
    },
    {
      logo: user,
      name: 'Google',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quibusdam quasi rerum blanditiis reiciendis, quo labore maiores excepturi? Illo autem ipsam ullam accusantium incidunt in, dolores odit explicabo consequatur soluta.',
      linkFacebook: 'http:\\facebook.com',
      linkInstagram: 'http:\\facebook.com',
      linkWhatsapp: 'http:\\facebook.com',
      background: background,
    },
    {
      logo: user,
      name: 'Google',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quibusdam quasi rerum blanditiis reiciendis, quo labore maiores excepturi? Illo autem ipsam ullam accusantium incidunt in, dolores odit explicabo consequatur soluta.',
      linkFacebook: 'http:\\facebook.com',
      linkInstagram: 'http:\\facebook.com',
      linkWhatsapp: 'http:\\facebook.com',
      background: background,
    },
    
  ];
  const [loading, setLoading] = useState(false);
    const [groups, setGroups] = useState([]);
    const [totalPages, setTotalPages] = useState(null)
    const [page, setPage] = useState(1)
    useEffect(() => {
        const fecthAllGroups = async () => {
            try {
                setLoading(true)
                const data = await getGroups(10, page,'{"status":true}')
                setTotalPages(data.totalPages)
                setGroups(data.payload);
            } catch (error) {
                console.error('Error fetching users:', error);
            } finally {
                setLoading(false);
            }
        };

        fecthAllGroups();
    }, [page]);
    const handleDeleteGroup=()=>{

    }
  const columns = ["Name", "Description", "Facebook", "Instagram", "Whatsapp", "Background Image"]
  return (
    <DashboardLayout>
      <Breadcrumb pageName="All Groups" />
      <div className="flex flex-col gap-10">
        <PaginationNumber page={page} totalPages={totalPages} setPage={setPage}/>
        <div className="rounded-sm border px-5 pt-6 pb-2.5 shadow-default border-strokedark bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="text-left bg-meta-4">
                  {columns.map((colum, index) => (
                    <th key={index} className="min-w-[220px] py-4 px-4 font-medium  text-white xl:pl-11">
                      {colum}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {groups.map((group, key) => (
                  <tr key={key}>
                    <td className="border-b  py-5 px-4 pl-9 border-strokedark xl:pl-11">
                      <div className="flex items-center gap-3 p-2.5 xl:p-5">
                        <div className="h-15 w-15 flex items-center justify-center rounded-full overflow-hidden">
                          <img className='cursor-pointer' src={group.img.ref} onClick={() => setSelectedImage(group.img.ref)} alt={group.img.name} />
                        </div>
                        <p className="hidden  text-white sm:block">
                          {group.name}
                        </p>
                      </div>
                    </td>
                    <td className="border-b  py-5 px-4 border-strokedark">
                      <p className="text-white h-30 scroll-py-px overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100">
                        {group.description}
                      </p>
                    </td>
                    <td className="border-b  py-5 px-4 border-strokedark">
                      <p
                        className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium bg-success text-success`}
                      >
                        {group.linkFacebook}
                      </p>
                    </td>
                    <td className="border-b  py-5 px-4 border-strokedark">
                      <p
                        className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium bg-success text-success`}
                      >
                        {group.linkInstagram}
                      </p>
                    </td>
                    <td className="border-b  py-5 px-4 border-strokedark">
                      <p
                        className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium bg-success text-success`}
                      >
                        {group.linkWhatsapp}
                      </p>
                    </td>
                    <td className="border-b  py-5 px-4 border-strokedark">
                      <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 gap-5">
                        <img onClick={() => setSelectedImage(group.background.ref)} src={group.background.ref} className='h-20 w-20 cursor-pointer' alt={group.background.name} />
                        <FaTrash onClick={()=> handleDeleteGroup(group._id)} className='w-7 fill-primary bg-white p-1 rounded-lg' />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* <div className="flex flex-col text-white">
            <div className="grid grid-cols-3 overflow-y-auto rounded-sm bg-meta-4 sm:grid-cols-6">
              <div className="p-2.5 xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Name
                </h5>
              </div>
              <div className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Description
                </h5>
              </div>
              <div className="p-2.5 text-center xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Link Facebook
                </h5>
              </div>
              <div className="hidden p-2.5 text-center sm:block xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Link Instagram
                </h5>
              </div>
              <div className="hidden p-2.5 text-center sm:block xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Link Whatsapp
                </h5>
              </div>
              <div className="hidden p-2.5 text-center sm:block xl:p-5">
                <h5 className="text-sm font-medium uppercase xsm:text-base">
                  Background Image
                </h5>
              </div>
            </div>

            {brandData.map((brand, key) => (
              <div
                className={`grid grid-cols-3 sm:grid-cols-5 ${key === brandData.length - 1
                  ? ''
                  : 'border-b  border-strokedark'
                  }`}
                key={key}
              >
                <div className="flex items-center gap-3 p-2.5 xl:p-5">
                  <div className="h-15 w-15 flex items-center justify-center rounded-full overflow-hidden">
                    <img src={brand.logo} alt="profile" />
                  </div>
                  <p className="hidden  text-white sm:block">
                    {brand.name}
                  </p>
                </div>

                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <p className=" text-white">{brand.visitors}K</p>
                </div>

                <div className="flex items-center justify-center p-2.5 xl:p-5">
                  <p className="text-meta-5">${brand.revenues}</p>
                </div>

                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                  <p className="text-meta-5">{brand.sales}</p>
                </div>

                <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                  <img src={brand.logo} className='h-20 w-20' alt="profile" />
                </div>
              </div>
            ))}
          </div> */}
          {selectedImage && (
                                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50' onClick={() => setSelectedImage(null)}>
                                    <span className='absolute top-5 right-5 text-white text-4xl font-bold cursor-pointer'>&times;</span>
                                    <img className='max-w-[750px] max-h-[auto] rounded-lg' src={selectedImage} alt="Noticia" />
                                </div>
                            )}
      </div>
    </DashboardLayout>
  )
}
