import React, { useEffect, useState } from 'react'
import PaginationNumber from './PaginationNumber'
import { getNotices } from '../services/groupService';

function NoticeSection({gid}) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [notices, setNotices] = useState(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    useEffect(() => {
        const fetchNotices = async () => {
            try {
                setLoading(true)
                const dataNotices = await getNotices(gid,6,page)
                setNotices(dataNotices.payload)
                setTotalPages(dataNotices.totalPages)
            } catch (error) {
                console.error('Error fetching groups:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchNotices();
    }, [page]);
  return (
    <>
      <PaginationNumber setPage={setPage} page={page} totalPages={totalPages} />
                    {loading ? (<section id="clients" className='grid grid-cols-2 lg:grid-cols-3 gap-5 animate-pulse'>
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="bg-dimWhite w-full h-[250px] sm:h-[400px] lg:h-[390px] rounded-lg"></div>
                        ))}
                    </section>) : (
                        <section id="clients" className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
                            {notices.map((notice, index) => (
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
                                    <img className='max-w-[550px] max-h-[auto] rounded-lg' src={selectedImage} alt="Noticia" />
                                </div>
                            )}
                        </section>
                    )}
    </>
  )
}

export default NoticeSection
