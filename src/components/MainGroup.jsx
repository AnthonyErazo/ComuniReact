import React, { useEffect, useState } from 'react'
import styles from '../style'
import Footer from './Footer'
import Navbar from './Navbar'
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { SomeGroups } from '.'
import { useLocation, useParams } from 'react-router-dom'
import { getGroupbyId, getNotices } from '../services/groupService'
import PaginationNumber from './PaginationNumber'
import NoticeSection from './NoticeSection'

function MainGroup() {
    const { gid } = useParams()
    const [loading, setLoading] = useState(true);
    const [grupo, setGrupo] = useState(null);
    
    useEffect(() => {
        const fetchGroup = async () => {
            try {
                setLoading(true)
                const data = await getGroupbyId(gid)
                setGrupo(data.payload);
            } catch (error) {
                console.error('Error fetching groups:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchGroup();
    }, [gid]);
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
    return (
        <section id='groupDescription' className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            <div className={`bg-primary ${styles.flexStart} relative`}>
                <div className="absolute w-full h-full">
                    {loading && (
                        <div className="absolute inset-0 bg-primary z-10 flex items-center justify-center animate-pulse">
                            <div className="w-full h-full bg-dimWhite"></div>
                            <div className="absolute inset-0 flex flex-col justify-between z-1">
                                <div className="bg-top-parabola h-[45%] w-full"></div>
                                <div className="bg-bottom-parabola h-[45%] w-full"></div>
                            </div>
                        </div>
                    )}
                    <img
                        src={grupo?.background.ref} alt={grupo?.background.name}
                        className={`h-full w-full absolute object-cover object-center transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
                    />
                    <div className="absolute inset-0 flex flex-col justify-between z-1">
                        <div className="bg-top-parabola h-[45%] w-full"></div>
                        <div className="bg-bottom-parabola h-[45%] w-full"></div>
                    </div>
                </div>
                <div className={`${styles.boxWidth}`}>
                    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} items-center`}>
                        {loading ? (
                            <></>
                        ) : (
                            <>
                                <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-[10] items-center md:items-start`}>
                                    <div className="flex flex-row justify-between items-center w-full">
                                        <h1 className="flex-1 font-poppins text-center md:text-start font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                                            <span className="text-gradient">{grupo?.name}</span>{" "}
                                        </h1>
                                    </div>
                                    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                                        {grupo?.description}
                                    </p>
                                    <div className={`flex m-auto gap-5`}>
                                        {grupo?.linkFacebook && (
                                            <a href={grupo.linkFacebook} target="_blank" rel="noopener noreferrer" className='text-white flex gap-2'>
                                                <BsFacebook className='w-5' />
                                                Facebook
                                            </a>
                                        )}
                                        {grupo?.linkWhatsapp && (
                                            <a href={grupo?.linkWhatsapp} target="_blank" rel="noopener noreferrer" className='text-white flex gap-2'>
                                                <BsWhatsapp className='w-5' />
                                                Whatsapp
                                            </a>
                                        )}
                                        {grupo?.linkInstagram && (
                                            <a href={grupo?.linkInstagram} target="_blank" rel="noopener noreferrer" className='text-white flex gap-2'>
                                                <BsInstagram className='w-5' />
                                                Instagram
                                            </a>
                                        )}
                                    </div>
                                </div>
                                <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                                    <div className="w-100 flex items-center justify-center rounded-full overflow-hidden z-[5]">
                                        <img src={grupo?.img.ref} alt={grupo?.img.name} className="w-[100%] h-[100%]" />
                                    </div>
                                    <div className="absolute z-[1] w-[50%] h-[50%] rounded-full white__gradient bottom-30" />
                                </div>
                            </>
                        )}
                    </section>
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
                        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
                        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
                            <h2 className={styles.heading2}>
                                Descubre<br className="sm:block hidden" /> algunas noticias
                            </h2>
                            <div className="w-full md:mt-0 mt-6">
                                <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                                    Visualiza algunas de las noticias de la comunidad
                                </p>
                            </div>
                        </div>
                    </section>
                    <NoticeSection gid={gid}/>
                    <SomeGroups />
                    <Footer />
                </div>
            </div>
        </section>
    )
}

export default MainGroup
