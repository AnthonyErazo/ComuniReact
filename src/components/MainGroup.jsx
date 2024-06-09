import React, { useEffect, useState } from 'react'
import styles from '../style'
import Footer from './Footer'
import Navbar from './Navbar'
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { SomeGroups } from '.'
import { Link, useLocation, useParams } from 'react-router-dom'
import { getGroupbyId, getNotices } from '../services/groupService'
import PaginationNumber from './PaginationNumber'
import NoticeSection from './NoticeSection'
import Loading from './Loading'
import { FaCamera, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'

function MainGroup() {
    const { gid } = useParams()
    const [loading, setLoading] = useState(true);
    const [grupo, setGrupo] = useState(null);

    useEffect(() => {
        const fetchGroup = async () => {
            try {
                const data = await getGroupbyId(gid)
                setGrupo(data.payload);
            } catch (error) {
                console.error('Error fetching group:', error);
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
    if (loading) return <Loading />
    return (
        <>
            <section id='groupDescription' className="bg-primary w-full overflow-hidden">
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Navbar />
                    </div>
                </div>
                <div className={`bg-primary ${styles.flexStart} relative`}>
                    <div className="overflow-hidden rounded-sm border shadow-custom-light bg-primary">
                        <div className="relative z-20 h-35 md:h-65">
                            <img
                                src={grupo.background?.ref || background}
                                alt={grupo.background?.name || 'background'}
                                className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
                            />
                        </div>
                        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
                            <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
                                <div className="relative drop-shadow-2">
                                    <div className="h-full w-full flex items-center justify-center rounded-full overflow-hidden">
                                        <img src={grupo.img?.ref || user} alt={grupo.img?.name || "user"} />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h3 className="mb-1.5 text-2xl font-semibold  text-white">
                                    {grupo.name || `'Nombre de su grupo'`}
                                </h3>

                                <div className="mx-auto max-w-180">
                                    <p className="mt-4.5 text-white">
                                        {grupo.description || `'Descripcion de su grupo'`}
                                    </p>
                                </div>

                                <div className="mt-6.5">
                                    <h4 className="mb-3.5 font-medium  text-white">
                                        My social networks
                                    </h4>
                                    <div className="flex items-center justify-center gap-8">
                                        {grupo.linkFacebook && <a
                                            href={grupo.linkFacebook}
                                            target="_blank"
                                            className="hover:text-primary"
                                            aria-label="social-icon"
                                        >
                                            <FaFacebookF className='fill-white w-6' />
                                        </a>}
                                        {grupo.linkWhatsapp && <a
                                            href={grupo.linkFacebook}
                                            target="_blank"
                                            className="hover:text-primary"
                                            aria-label="social-icon"
                                        >
                                            <FaWhatsapp className='fill-white w-6' />
                                        </a>}
                                        {grupo.linkInstagram && <a
                                            href={grupo.linkInstagram}
                                            target="_blank"
                                            className="hover:text-primary"
                                            aria-label="social-icon"
                                        >
                                            <FaInstagram className='fill-white w-6' />
                                        </a>}
                                    </div>
                                </div>
                            </div>
                        </div>
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
                        <NoticeSection gid={gid} />
                        <SomeGroups />
                        <Footer setLoading={setLoading} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainGroup
