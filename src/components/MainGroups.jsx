import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import styles from '../style';
import Footer from './Footer';
import { Link, useLocation } from 'react-router-dom';
import PaginationNumber from './PaginationNumber';
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { getGroups } from '../services/groupService';
import Loading from './Loading';

function MainGroups() {
    const [loading, setLoading] = useState(true)
    const [grupos, setGrupos] = useState([])
    const [totalPages, setTotalPages] = useState(null)
    const [page, setPage] = useState(1)


    useEffect(() => {
        const fetchGroups = async () => {
            try {
                const data = await getGroups(12, page)
                setTotalPages(data.totalPages)
                setGrupos(data.payload);
            } catch (error) {
                console.error('Error fetching groups:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchGroups();
    }, [page]);
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    if (loading) return <Loading />
    return (
        <section id='allGroups' className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <PaginationNumber totalPages={totalPages} page={page} setPage={setPage} />

            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <section className={`${styles.paddingY}`}>


                        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">


                            {grupos.map((grupo, index) => (
                                <Link to={`/groups/${grupo.id}`} key={index} className='relative mt-20'>
                                    <div className="absolute top-0 z-[0] w-full -mt-25 h-30 md:h-35">
                                        <img
                                            src={grupo.background.ref}
                                            alt={grupo.background.name}
                                            className="h-full w-full object-cover object-center rounded-xl"
                                        />
                                    </div>
                                    <div className="relative bg-black-gradient-2 p-6 flex flex-col items-center gap-2 text-center text-gray-300 z-[1]">
                                        <img
                                            src={grupo.img.ref}
                                            alt={grupo.img.name}
                                            className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
                                        />
                                        <p className="font-poppins font-semibold xs:text-[20px] text-[18px] text-white">{grupo.name}</p>
                                        <p className={`xs:text-[16px] text-[12px] leading-[25px] font-poppins font-normal text-sl text-start line-clamp-4 text-dimWhite`}>{grupo.description}</p>
                                        <div className='flex gap-5'>
                                            {grupo.linkFacebook && <BsFacebook className='w-5 fill-white' />}
                                            {grupo.linkWhatsapp && <BsWhatsapp className='w-5 fill-white' />}
                                            {grupo.linkInstagram && <BsInstagram className='w-5 fill-white' />}
                                        </div>
                                    </div>
                                </Link>
                            ))}


                        </div>

                    </section>
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer setLoading={setLoading} />
                </div>
            </div>
        </section>
    );
}

export default MainGroups;
