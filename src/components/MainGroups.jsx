import React from 'react';
import Navbar from './Navbar';
import styles from '../style';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import PaginationNumber from './PaginationNumber';
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';

function MainGroups() {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <PaginationNumber />

            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <section id="groups" className={`${styles.paddingY}`}>


                        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
                            
                            <Link to={`/groups/1`} className='relative mt-20'>
                                <div className="absolute top-0 z-[0] w-full -mt-25 h-30 md:h-35">
                                    <img
                                        src="https://scontent.flim33-1.fna.fbcdn.net/v/t39.30808-6/326332255_1197621694195013_2949145340276907201_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFtUk9TSl9GcjKo2rAJ8LxY5dSjEPtvDMbl1KMQ-28MxnPLxNTjHmX2KRfMmVKqspbSuN4qzI6BfUzrTvEleGxw&_nc_ohc=ub95tzaj1nIQ7kNvgEdlG0m&_nc_ht=scontent.flim33-1.fna&oh=00_AYCi4Pu33ILEfAjl9Sf7DKkyb7gv9YLjRitSon8NccSF1A&oe=6661D83F"
                                        alt="profile cover"
                                        className="h-full w-full object-cover object-center rounded-xl"
                                    />
                                </div>
                                <div  className="relative bg-black-gradient-2 p-6 flex flex-col items-center gap-2 text-center text-gray-300 z-[1]">
                                    <img
                                        src='https://scontent.flim33-1.fna.fbcdn.net/v/t39.30808-1/434493740_817644583724303_4719665726187510333_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFLp_qEr10WEbtBGreQDCA3ClObpG6JhDwKU5ukbomEPHgP6wgtCTDdukrXks82XrlStVTCoKWcsbRRJLcxOt4O&_nc_ohc=mUYLCCYJT9MQ7kNvgF0mAd4&_nc_ht=scontent.flim33-1.fna&oh=00_AYBdHRilJOtwOIp4WO3VSJnunXQvSlWt2uGNnfqxodsR7g&oe=666201A8'
                                        className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
                                    />
                                    <p className="font-poppins font-semibold xs:text-[20px] text-[18px] text-white">Centro Cultural Nucleo</p>
                                    <p className={`xs:text-[16px] text-[12px] leading-[25px] font-poppins font-normal text-sl text-start line-clamp-4 text-dimWhite`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolorum. Repellat facilis, dolorum consequuntur ea tempore fuga debitis, dolores ab labore ipsum quidem! Qui fugit aliquam, eveniet fugiat officia fuga.</p>
                                    <div className='flex gap-5'>
                                        <BsFacebook className='w-5 fill-white' />
                                        <BsWhatsapp className='w-5 fill-white' />
                                        <BsInstagram className='w-5 fill-white' />
                                    </div>
                                </div>
                            </Link>
                            

                        </div>

                    </section>
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default MainGroups;
