import React from 'react';
import Navbar from './Navbar';
import styles from '../style';
import CTA from './CTA';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Contact from './Contact';
import Pagination from './pagination';

function MainGroups() {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <Pagination />

            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <section id="groups" className={`${styles.paddingY}`}>
                        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
                            <Link to={`/groups/1`}  className="bg-black-gradient-2 p-6 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
                                <img
                                    src='https://via.placeholder.com/150/FF5733'
                                    className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
                                />
                                <p className="font-poppins font-semibold xs:text-[24px] text-[20px] text-white">Centro Cultural Nucleo</p>
                                <p className={`${styles.paragraph} text-sl text-start line-clamp-4 text-white`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolorum. Repellat facilis, dolorum consequuntur ea tempore fuga debitis, dolores ab labore ipsum quidem! Qui fugit aliquam, eveniet fugiat officia fuga.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <CTA />
                    <Contact />
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default MainGroups;
