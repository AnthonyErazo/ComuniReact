import React, { useEffect, useState } from 'react'
import styles from '../style'
import Hero from './Hero'
import Testimonials from './Testimonials'
import CTA from './CTA'
import Footer from './Footer'
import Navbar from './Navbar'
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import Button from './Button'
import Contact from './Contact'
import Pagination from './pagination'

function MainGroup() {
    const [loading, setLoading] = useState(true);
    const group = {
        name: 'Centro Cultural Nucleo',
        description: 'El Centro Cultural Núcleo, es uno de los centro culturales emblemáticos de la Facultad Nacional de Ingeniería Industrial y de Sistemas de la Universidad Nacional de Ingeniería de Perú, con más de 30 años formando líderes capaces de gestionar proyectos, realizar investigación y superarse constantemente ha sido y sigue siendo cuna de profesionales destacados en el ámbito laboral, fomentando el desarrollo de capacidades y habilidades diversas se ha logrado quedar muy bien posicionados en concursos de proyectos estudiantiles a nivel nacional e internacional, buscando siempre la excelencia, el Centro Cultural tiene sus puertas abiertas para aquellas personas con ganas de marcar una diferencia significativas y positiva en la sociedad.',
        img: {
            name: 'nombre imagen',
            ref: 'https://scontent.flim6-4.fna.fbcdn.net/v/t39.30808-1/434493740_817644583724303_4719665726187510333_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VZxul79EW28Q7kNvgEuJsZ3&_nc_ht=scontent.flim6-4.fna&oh=00_AYBBetv0Jl0B0mIeJzIKLeDZBdoBn57LFVot3dxR_V-OSQ&oe=66557B68'
        },
        status: true,
        linkWhats: 'https://wa.me/',
        linkFace: 'https://www.facebook.com/',
        linkInsta: 'https://www.instagram.com/',
        notice: [{
            name: 'img1',
            ref: 'https://scontent.flim33-1.fna.fbcdn.net/v/t39.30808-6/445365976_122186827154068653_7133497250983221506_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG44bGKVSICVMGksVzQmFR-VAynEAM-9q5UDKcQAz72rket6fsAXGF50QlyBVQvyEses5cfSIHiHdnUAO4cQnnH&_nc_ohc=NRPPoXnFVxsQ7kNvgEcVL9F&_nc_ht=scontent.flim33-1.fna&oh=00_AYAdpwHTgwodCu_RHzpyO0OkGyYkqDir3cUwZ2kO2dmxig&oe=6661B9D0'
        }, {
            name: 'img2',
            ref: 'https://scontent.flim33-1.fna.fbcdn.net/v/t39.30808-6/445365976_122186827154068653_7133497250983221506_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG44bGKVSICVMGksVzQmFR-VAynEAM-9q5UDKcQAz72rket6fsAXGF50QlyBVQvyEses5cfSIHiHdnUAO4cQnnH&_nc_ohc=NRPPoXnFVxsQ7kNvgEcVL9F&_nc_ht=scontent.flim33-1.fna&oh=00_AYAdpwHTgwodCu_RHzpyO0OkGyYkqDir3cUwZ2kO2dmxig&oe=6661B9D0'
        }, {
            name: 'img3',
            ref: 'https://scontent.flim33-1.fna.fbcdn.net/v/t39.30808-6/445365976_122186827154068653_7133497250983221506_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG44bGKVSICVMGksVzQmFR-VAynEAM-9q5UDKcQAz72rket6fsAXGF50QlyBVQvyEses5cfSIHiHdnUAO4cQnnH&_nc_ohc=NRPPoXnFVxsQ7kNvgEcVL9F&_nc_ht=scontent.flim33-1.fna&oh=00_AYAdpwHTgwodCu_RHzpyO0OkGyYkqDir3cUwZ2kO2dmxig&oe=6661B9D0'
        }, {
            name: 'img2',
            ref: 'https://scontent.flim33-1.fna.fbcdn.net/v/t39.30808-6/445365976_122186827154068653_7133497250983221506_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG44bGKVSICVMGksVzQmFR-VAynEAM-9q5UDKcQAz72rket6fsAXGF50QlyBVQvyEses5cfSIHiHdnUAO4cQnnH&_nc_ohc=NRPPoXnFVxsQ7kNvgEcVL9F&_nc_ht=scontent.flim33-1.fna&oh=00_AYAdpwHTgwodCu_RHzpyO0OkGyYkqDir3cUwZ2kO2dmxig&oe=6661B9D0'
        }, {
            name: 'img2',
            ref: 'https://scontent.flim33-1.fna.fbcdn.net/v/t39.30808-6/445365976_122186827154068653_7133497250983221506_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG44bGKVSICVMGksVzQmFR-VAynEAM-9q5UDKcQAz72rket6fsAXGF50QlyBVQvyEses5cfSIHiHdnUAO4cQnnH&_nc_ohc=NRPPoXnFVxsQ7kNvgEcVL9F&_nc_ht=scontent.flim33-1.fna&oh=00_AYAdpwHTgwodCu_RHzpyO0OkGyYkqDir3cUwZ2kO2dmxig&oe=6661B9D0'
        }, {
            name: 'img2',
            ref: 'https://scontent.flim33-1.fna.fbcdn.net/v/t39.30808-6/445365976_122186827154068653_7133497250983221506_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG44bGKVSICVMGksVzQmFR-VAynEAM-9q5UDKcQAz72rket6fsAXGF50QlyBVQvyEses5cfSIHiHdnUAO4cQnnH&_nc_ohc=NRPPoXnFVxsQ7kNvgEcVL9F&_nc_ht=scontent.flim33-1.fna&oh=00_AYAdpwHTgwodCu_RHzpyO0OkGyYkqDir3cUwZ2kO2dmxig&oe=6661B9D0'
        }]
    };

    const [selectedImage, setSelectedImage] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>

            <div className={`bg-primary ${styles.flexStart} relative`}>
                <div className="absolute w-full h-full">
                    <img
                        src="https://scontent.flim33-1.fna.fbcdn.net/v/t39.30808-6/326332255_1197621694195013_2949145340276907201_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFtUk9TSl9GcjKo2rAJ8LxY5dSjEPtvDMbl1KMQ-28MxnPLxNTjHmX2KRfMmVKqspbSuN4qzI6BfUzrTvEleGxw&_nc_ohc=ub95tzaj1nIQ7kNvgEdlG0m&_nc_ht=scontent.flim33-1.fna&oh=00_AYCi4Pu33ILEfAjl9Sf7DKkyb7gv9YLjRitSon8NccSF1A&oe=6661D83F"
                        alt="profile cover"
                        className="h-full w-full absolute  object-cover object-center z-0"
                    />
                    <div className="absolute inset-x-0 bg-top-parabola h-[90%] w-full top-0 z-1"></div>
                    <div className="absolute inset-x-0 bg-bottom-parabola h-[90%] w-full bottom-0 z-1"></div>
                </div>
                <div className={`${styles.boxWidth}`}>
                    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} items-center`}>
                        {loading ? (
                            <div className="bg-primary w-full overflow-hidden animate-pulse">
                                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                                    <div className={`${styles.boxWidth}`}>
                                        <div className="flex items-center justify-between w-full">
                                            <div className="flex-1">
                                                <div className="bg-dimWhite h-[150px] w-[100%] mb-4 rounded"></div>
                                                <div className="bg-dimWhite h-[20px] w-[100%] mb-2 rounded"></div>
                                                <div className="bg-dimWhite h-[20px] w-[100%] mb-2 rounded"></div>
                                                <div className="bg-dimWhite h-[20px] w-[100%] mb-2 rounded"></div>
                                                <div className="bg-dimWhite h-[20px] w-[100%] mb-2 rounded"></div>
                                                <div className="bg-dimWhite h-[20px] w-[100%] mb-2 rounded"></div>
                                                <div className="bg-dimWhite h-[20px] w-[100%] mb-2 rounded"></div>
                                                <div className="bg-dimWhite h-[20px] w-[100%] mb-2 rounded"></div>
                                            </div>
                                            <div className="flex-1 flex justify-center items-center">
                                                <div className="bg-dimWhite h-[300px] w-[300px] rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="flex gap-5 mt-5">
                                            <div className="bg-dimWhite h-[30px] w-[80px] rounded"></div>
                                            <div className="bg-dimWhite h-[30px] w-[80px] rounded"></div>
                                            <div className="bg-dimWhite h-[30px] w-[80px] rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-[10] items-center md:items-start`}>
                                    <div className="flex flex-row justify-between items-center w-full">
                                        <h1 className="flex-1 font-poppins text-center md:text-start font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                                            <span className="text-gradient">Centro Cultural Nucleo</span>{" "}
                                        </h1>
                                    </div>
                                    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, similique sequi? Unde provident doloribus harum doloremque minus saepe, accusantium eius blanditiis suscipit veniam praesentium omnis possimus atque, aliquam ducimus sit.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, similique sequi? Unde provident doloribus harum doloremque minus saepe, accusantium eius blanditiis suscipit veniam praesentium omnis possimus atque, aliquam ducimus sit.
                                    </p>
                                    <div className={`flex gap-5`}>
                                        <button className='text-white flex gap-2'><BsFacebook className='w-5' /> Facebook</button>
                                        <button className='text-white flex gap-2'><BsWhatsapp className='w-5' /> Whatsapp</button>
                                        <button className='text-white flex gap-2'><BsInstagram className='w-5' /> Instagram</button>
                                    </div>
                                </div>
                                <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                                    <div className="w-100 flex items-center justify-center rounded-full overflow-hidden z-[5]">
                                        <img src='https://scontent.flim33-1.fna.fbcdn.net/v/t39.30808-1/434493740_817644583724303_4719665726187510333_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFLp_qEr10WEbtBGreQDCA3ClObpG6JhDwKU5ukbomEPHgP6wgtCTDdukrXks82XrlStVTCoKWcsbRRJLcxOt4O&_nc_ohc=mUYLCCYJT9MQ7kNvgF0mAd4&_nc_ht=scontent.flim33-1.fna&oh=00_AYBdHRilJOtwOIp4WO3VSJnunXQvSlWt2uGNnfqxodsR7g&oe=666201A8' alt="profile" className="w-[100%] h-[100%]" />
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
                        <Pagination />
                    </section>
                    {loading ? (<section id="clients" className='grid grid-cols-2 lg:grid-cols-3 gap-5 animate-pulse'>
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="bg-dimWhite w-full h-[250px] sm:h-[400px] lg:h-[390px] rounded-lg"></div>
                        ))}
                    </section>) : (
                        <section id="clients" className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
                            {group.notice.map((notice, index) => (
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
                                    <img className='max-w-[750px] max-h-[auto] rounded-lg' src={selectedImage} alt="Noticia" />
                                </div>
                            )}
                        </section>
                    )}
                    <Testimonials />
                    <CTA />
                    <Contact />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default MainGroup
