import React, { useEffect, useState } from 'react'
import Breadcrumb from './Breadcrumb'
import DashboardLayout from './DashboardLayout'
import PaginationNumber from './PaginationNumber';
import { FaExchangeAlt, FaTrash } from 'react-icons/fa';
import { background, user } from '../assets';
import { getAllUsers } from '../services/userService';
import { deleteGroup, getGroups, updateGroup } from '../services/groupService';
import Loading from './Loading';
import { useAlert } from '../context/AlertContext';
import { useModal } from '../context/ModalContext';


export default function Users() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [groups, setGroups] = useState([]);
    const [totalPages, setTotalPages] = useState(null)
    const [page, setPage] = useState(1)
    const { addAlert } = useAlert()
    const { openModal } = useModal()
    const fecthNewUsers = async () => {
        try {
            const data = await getGroups(5, page, '{"status":false}')
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
        fecthNewUsers();
    }, [page]);
    const handleChangeStatusGroup = (gid) => {
        const fecthChangeStatus = async () => {
            try {
                setLoading(true)
                const data = await updateGroup(gid, { status: true })
                addAlert('success', data.message)
            } catch (error) {
                console.error('Error fetching change group:', error);
                addAlert('error', error.response.data.message)
            } finally {
                fecthNewUsers()
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
                console.error('Error fetching delete group:', error);
                addAlert('error', error.response.data.message)
            } finally {
                fecthNewUsers()
            }
        };

        fecthDeleteGroup();
    }
    const columns = ["Name Group", "Description", "Images", "Links", "Actions"]
    if (loading) return <Loading dashboard />
    return (
        <>
            <Breadcrumb pageName="New Users" />
            <div className="flex flex-col gap-10">
                <PaginationNumber page={page} totalPages={totalPages} setPage={setPage} />
                <div className="rounded-sm border px-5 pt-6 pb-2.5 shadow-default border-strokedark bg-boxdark sm:px-7.5 xl:pb-1">
                    <div className="max-w-full overflow-x-auto">
                        <table className="w-full table-auto">
                            <thead>
                                <tr className=" text-left bg-meta-4">
                                    {columns.map((colum, index) => (
                                        <th key={index} className="min-w-[220px] py-4 px-4 font-medium  text-white xl:pl-11 text-center">
                                            {colum}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {groups?.map((group, key) => (
                                    <tr key={key}>
                                        <td className="border-b  py-5 px-4 pl-9 border-strokedark xl:pl-11">
                                            <h5 className="font-medium  text-white">
                                                {group.name}
                                            </h5>
                                        </td>
                                        <td className="border-b  py-5 px-4 border-strokedark">
                                            <p className="text-white h-30 scroll-py-px overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100">
                                                {group.description}
                                            </p>
                                        </td>
                                        <td className="border-b  py-5 px-4 border-strokedark">
                                            <div className="hidden w-full p-7 items-center justify-center sm:flex xl:p-5 gap-5">
                                                <img src={group.img?.ref || user} onClick={() => setSelectedImage(group.img?.ref || user)} className='h-20 w-full cursor-pointer' alt={group.img?.name || 'user'} />
                                                <img src={group.background?.ref || background} onClick={() => setSelectedImage(group.background?.ref || background)} className='h-20 w-full cursor-pointer' alt={group.background?.name || 'background'} />
                                            </div>
                                        </td>
                                        <td className="border-b flex flex-col  py-5 px-4 border-strokedark gap-2">
                                            {group.linkFacebook && <p
                                                className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium bg-success text-success`}
                                            >
                                                {group.linkFacebook}
                                            </p>}
                                            {group.linkWhatsapp && <p
                                                className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium bg-success text-success`}
                                            >
                                                {group.linkWhatsapp}
                                            </p>}
                                            {group.linkInstagram && <p
                                                className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium bg-success text-success`}
                                            >
                                                {group.linkInstagram}
                                            </p>}
                                        </td>
                                        <td className="border-b  py-5 px-4 border-strokedark">
                                            <div className="flex items-center justify-center space-x-3.5 gap-5">
                                                <button onClick={() =>openModal( {
                                                    title:'Dejar de ocultar',
                                                    body:'¿Desea hacer visible este grupo?'
                                                },()=>handleChangeStatusGroup(group._id))
                                                } className="hover:text-primary">
                                                    <FaExchangeAlt className='fill-white' />
                                                </button>
                                                <button onClick={() => openModal({
                                                    title:'Eliminar grupo',
                                                    body:'Esta a punto de eliminar un grupo, se le enviara correo al propietario de este grupo'
                                                },()=>handleDeleteGroup(group._id))
                                                } className="hover:text-primary">
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
                <div className='fixed z-[999999] inset-0 flex items-center justify-center bg-black bg-opacity-75' onClick={() => setSelectedImage(null)}>
                    <span className='absolute top-5 right-5 text-white text-4xl font-bold cursor-pointer'>&times;</span>
                    <img className='max-w-[750px] max-h-[auto] rounded-lg' src={selectedImage} alt="Noticia" />
                </div>
            )}
        </>
    )
}
