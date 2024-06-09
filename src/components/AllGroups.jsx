import React, { useEffect, useState } from 'react'
import DashboardLayout from './DashboardLayout'
import Breadcrumb from './Breadcrumb';
import PaginationNumber from './PaginationNumber';
import { FaExchangeAlt, FaTrash } from 'react-icons/fa';
import { background, user } from '../assets';
import { deleteGroup, getGroups, updateGroup } from '../services/groupService';
import Loading from './Loading';
import { useAlert } from '../context/AlertContext';
import { useModal } from '../context/ModalContext';

export default function AllGroups() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(null)
  const [page, setPage] = useState(1)
  const [selectedImage, setSelectedImage] = useState(null);
  const { addAlert } = useAlert()
  const { openModal } = useModal()
  const fecthAllGroups = async () => {
    try {
      const data = await getGroups(5, page, '{"status":true}')
      if (data.payload.length == 0 && page > 1) {
        setPage(page - 1)
      }
      setTotalPages(data.totalPages)
      setGroups(data.payload);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true)
    fecthAllGroups();
  }, [page]);
  const handleChangeStatusGroup = (gid) => {
    const fecthChangeStatus = async () => {
        try {
            setLoading(true)
            const data = await updateGroup(gid, { status: false })
            addAlert('success', data.message)
        } catch (error) {
            console.error('Error fetching change group:', error);
            addAlert('error', error.response.data.message)
        } finally {
            fecthAllGroups()
        }
    };

    fecthChangeStatus();
}
  const handleDeleteGroup = (gid) => {
    const fecthDeleteGroup = async () => {
      try {
        setLoading(true)
        const data = await deleteGroup(gid)
        addAlert('success', data.message)
      } catch (error) {
        console.error('Error fetching group:', error);
        addAlert('error', error.response.data.message)
      } finally {
        fecthAllGroups()
      }
    };
    fecthDeleteGroup();
  }
  const columns = ["Name", "Description", "Links", "Background Image"]
  if (loading) return <Loading dashboard />
  return (
    <>
      <Breadcrumb pageName="All Groups" />
      <div className="flex flex-col gap-10">
        <PaginationNumber page={page} totalPages={totalPages} setPage={setPage} />
        <div className="rounded-sm border px-5 pt-6 pb-2.5 shadow-default border-strokedark bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="text-left bg-meta-4">
                  {columns.map((colum, index) => (
                    <th key={index} className="text-center min-w-[220px] py-4 px-4 font-medium  text-white xl:pl-11">
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
                          <img className='cursor-pointer' src={group.img?.ref || user} onClick={() => setSelectedImage(group.img?.ref || user)} alt={group.img?.name || 'user'} />
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
                    <td className="border-b flex flex-col py-5 px-4 border-strokedark">
                      {group.linkFacebook && <p
                        className={`inline-flex mt-2 rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium bg-success text-success`}
                      >
                        {group.linkFacebook}
                      </p>}
                      {group.linkInstagram && <p
                        className={`inline-flex mt-2 rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium bg-success text-success`}
                      >
                        {group.linkInstagram}
                      </p>}
                      {group.linkWhatsapp && <p
                        className={`inline-flex mt-2 rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium bg-success text-success`}
                      >
                        {group.linkWhatsapp}
                      </p>}
                    </td>
                    <td className="border-b  py-5 px-4 border-strokedark">
                      <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5 gap-5">
                        <img onClick={() => setSelectedImage(group.background?.ref || background)} src={group.background?.ref || background} className='h-20 cursor-pointer w-full' alt={group.background?.name || 'background'} />
                        <div className='flex flex-col gap-2'>
                          <button onClick={()=>openModal({
                            title:'Ocultar grupo',
                            body:'¿Esta seguro de ocultar este grupo?'
                          },() => handleChangeStatusGroup(group._id))}>
                            <FaExchangeAlt className='w-7 fill-primary bg-white p-1 rounded-lg' />
                          </button>
                          <button onClick={()=>openModal({
                            title:'Eliminar grupo',
                            body:'Esta a punto de eliminar un grupo, se le enviara correo al propietario de este grupo'
                          },() => handleDeleteGroup(group._id))}>
                            <FaTrash className='w-7 fill-primary bg-white p-1 rounded-lg' />
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {selectedImage && (
          <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-[999999]' onClick={() => setSelectedImage(null)}>
            <span className='absolute top-5 right-5 text-white text-4xl font-bold cursor-pointer'>&times;</span>
            <img className='max-w-[750px] max-h-[auto] rounded-lg' src={selectedImage} alt="Noticia" />
          </div>
        )}
      </div>
    </>
  )
}
