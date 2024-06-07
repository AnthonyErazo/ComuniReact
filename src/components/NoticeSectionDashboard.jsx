import React, { useEffect, useState } from 'react'
import { BiTrash } from 'react-icons/bi';
import { eliminatedNoticeImage, getNotices } from '../services/groupService';
import PaginationNumber from './PaginationNumber';
import { useAlert } from '../context/AlertContext';

function NoticeSectionDashboard({ idGroup }) {
    const [loading, setLoading] = useState(true);
    const [myNotices, setMyNotices] = useState(null)
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const { addAlert } = useAlert()
    const fecthMyNotices = async () => {
        try {
            const dataNotices = await getNotices(idGroup, 6, page)
            setMyNotices(dataNotices.payload)
            setTotalPages(dataNotices.totalPages)
        } catch (error) {
            console.error('Error fetching my group:', error)
        } finally {
            setLoading(false)
        }

    }
    useEffect(() => {
        fecthMyNotices()
    }, [page]);
    const handleEliminatedNotice = async (notice) => {
        try {
            setLoading(true)
            const dataNotices = await eliminatedNoticeImage(idGroup, notice);
            fecthMyNotices()
            addAlert('success', dataNotices.message)
        } catch (error) {
            console.error('Error adding notice image:', error);
            addAlert('success', error.response.data.message)
        }
    };
    return (
        <>
            <PaginationNumber page={page} setPage={setPage} totalPages={totalPages} />
            {loading ? (<section id="clients" className='grid grid-cols-2 lg:grid-cols-3 gap-5 animate-pulse'>
                {[...Array(6)].map((_, index) => (
                    <div key={index} className="bg-dimWhite w-full h-[250px] sm:h-[400px] lg:h-[390px] rounded-lg"></div>
                ))}
            </section>) : (
                <>
                    <section id="clients" className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
                        {myNotices.map((notice, index) => (
                            <div key={index} className='relative'>
                                <img
                                    src={notice.ref}
                                    alt={notice.name}
                                    onClick={() => setSelectedImage(notice.ref)}
                                    className='w-full h-auto object-cover rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105'
                                />
                                <BiTrash onClick={() => handleEliminatedNotice(notice)} className='absolute w-8 bg-white cursor-pointer fill-black top-0 right-0 rounded-2xl p-1 m-2' />
                            </div>
                        ))}
                        {selectedImage && (
                            <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50' onClick={() => setSelectedImage(null)}>
                                <span className='absolute top-5 right-5 text-white text-4xl font-bold cursor-pointer'>&times;</span>
                                <img className='max-w-[750px] max-h-[auto] rounded-lg' src={selectedImage} alt="Noticia" />
                            </div>
                        )}
                    </section>
                </>
            )}
        </>
    )
}

export default NoticeSectionDashboard
