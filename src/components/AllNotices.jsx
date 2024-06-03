import React, { useEffect, useState } from "react";
import DashboardLayout from "./DashboardLayout";
import Breadcrumb from "./Breadcrumb";
import PaginationNumber from "./PaginationNumber";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import styles from "../style";
import { quotes } from "../assets";
import { BiCloset, BiTrash } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { IoCloseCircle } from "react-icons/io5";

export default function AllNotices() {
  useEffect(() => {
    setTimeout(() => {
      setGrupos([
        {
          img: "https://scontent.flim33-1.fna.fbcdn.net/v/t39.30808-1/434493740_817644583724303_4719665726187510333_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFLp_qEr10WEbtBGreQDCA3ClObpG6JhDwKU5ukbomEPHgP6wgtCTDdukrXks82XrlStVTCoKWcsbRRJLcxOt4O&_nc_ohc=mUYLCCYJT9MQ7kNvgF0mAd4&_nc_ht=scontent.flim33-1.fna&oh=00_AYBdHRilJOtwOIp4WO3VSJnunXQvSlWt2uGNnfqxodsR7g&oe=666201A8",
        },
        {
          img: "https://scontent.flim33-1.fna.fbcdn.net/v/t39.30808-1/434493740_817644583724303_4719665726187510333_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFLp_qEr10WEbtBGreQDCA3ClObpG6JhDwKU5ukbomEPHgP6wgtCTDdukrXks82XrlStVTCoKWcsbRRJLcxOt4O&_nc_ohc=mUYLCCYJT9MQ7kNvgF0mAd4&_nc_ht=scontent.flim33-1.fna&oh=00_AYBdHRilJOtwOIp4WO3VSJnunXQvSlWt2uGNnfqxodsR7g&oe=666201A8",
        },
        {
          img: "https://scontent.flim33-1.fna.fbcdn.net/v/t39.30808-1/434493740_817644583724303_4719665726187510333_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFLp_qEr10WEbtBGreQDCA3ClObpG6JhDwKU5ukbomEPHgP6wgtCTDdukrXks82XrlStVTCoKWcsbRRJLcxOt4O&_nc_ohc=mUYLCCYJT9MQ7kNvgF0mAd4&_nc_ht=scontent.flim33-1.fna&oh=00_AYBdHRilJOtwOIp4WO3VSJnunXQvSlWt2uGNnfqxodsR7g&oe=666201A8",
        },
        {
          img: "https://scontent.flim33-1.fna.fbcdn.net/v/t39.30808-1/434493740_817644583724303_4719665726187510333_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFLp_qEr10WEbtBGreQDCA3ClObpG6JhDwKU5ukbomEPHgP6wgtCTDdukrXks82XrlStVTCoKWcsbRRJLcxOt4O&_nc_ohc=mUYLCCYJT9MQ7kNvgF0mAd4&_nc_ht=scontent.flim33-1.fna&oh=00_AYBdHRilJOtwOIp4WO3VSJnunXQvSlWt2uGNnfqxodsR7g&oe=666201A8",
        },
        {
          img: "https://scontent.flim33-1.fna.fbcdn.net/v/t39.30808-1/434493740_817644583724303_4719665726187510333_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFLp_qEr10WEbtBGreQDCA3ClObpG6JhDwKU5ukbomEPHgP6wgtCTDdukrXks82XrlStVTCoKWcsbRRJLcxOt4O&_nc_ohc=mUYLCCYJT9MQ7kNvgF0mAd4&_nc_ht=scontent.flim33-1.fna&oh=00_AYBdHRilJOtwOIp4WO3VSJnunXQvSlWt2uGNnfqxodsR7g&oe=666201A8",
        },
        {
          img: "https://scontent.flim33-1.fna.fbcdn.net/v/t39.30808-1/434493740_817644583724303_4719665726187510333_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFLp_qEr10WEbtBGreQDCA3ClObpG6JhDwKU5ukbomEPHgP6wgtCTDdukrXks82XrlStVTCoKWcsbRRJLcxOt4O&_nc_ohc=mUYLCCYJT9MQ7kNvgF0mAd4&_nc_ht=scontent.flim33-1.fna&oh=00_AYBdHRilJOtwOIp4WO3VSJnunXQvSlWt2uGNnfqxodsR7g&oe=666201A8",
        },
        {
          img: "https://scontent.flim33-1.fna.fbcdn.net/v/t39.30808-1/434493740_817644583724303_4719665726187510333_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFLp_qEr10WEbtBGreQDCA3ClObpG6JhDwKU5ukbomEPHgP6wgtCTDdukrXks82XrlStVTCoKWcsbRRJLcxOt4O&_nc_ohc=mUYLCCYJT9MQ7kNvgF0mAd4&_nc_ht=scontent.flim33-1.fna&oh=00_AYBdHRilJOtwOIp4WO3VSJnunXQvSlWt2uGNnfqxodsR7g&oe=666201A8",
        },
        {
          img: "https://scontent.flim33-1.fna.fbcdn.net/v/t39.30808-1/434493740_817644583724303_4719665726187510333_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFLp_qEr10WEbtBGreQDCA3ClObpG6JhDwKU5ukbomEPHgP6wgtCTDdukrXks82XrlStVTCoKWcsbRRJLcxOt4O&_nc_ohc=mUYLCCYJT9MQ7kNvgF0mAd4&_nc_ht=scontent.flim33-1.fna&oh=00_AYBdHRilJOtwOIp4WO3VSJnunXQvSlWt2uGNnfqxodsR7g&oe=666201A8",
        },
      ]);
      setLoading(false);
    }, 0);
  }, []);
  const [loading, setLoading] = useState(true);
  const [grupos, setGrupos] = useState([]);
  const handleDelete = (index) => {
    setGrupos(grupos.filter((_, i) => i !== index));
  };
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <DashboardLayout>
      <Breadcrumb pageName="All Notices" />
      <PaginationNumber />
      <section>
        <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
          <div className="w-full flex justify-between items-center p-4">
            <h2 className={`${styles.heading1}`}>Centro Cultural Nucleo</h2>
            <button className="ml-auto bg-primary text-white flex gap-2 px-4 py-2 rounded">
              <BiTrash className="w-5" />
              Eliminar
            </button>
          </div>
          <Swiper
            modules={[Pagination]}
            pagination={{
              el: ".pagination",
              clickable: true,
            }}
            slidesPerView={6}
            breakpoints={{
              "@0.00": {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              "@0.50": {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              "@1.00": {
                slidesPerView: 4,
                spaceBetween: 25,
              },
              "@1.25": {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              "@1.50": {
                slidesPerView: 6,
                spaceBetween: 30,
              }
            }}
          >
            {grupos.map((grupo, index) => (
              <SwiperSlide key={index}>
                <div className="relative max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <IoCloseCircle className="cursor-pointer w-6 lg:w-8 text-black absolute top-0 right-0" onClick={handleDelete} />
                  <img
                    onClick={() => setSelectedImage(grupo.img)}
                    src={grupo?.img}
                    alt={grupo?.title}
                    className="h-full object-cover rounded-[10px] cursor-pointer"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
          <div className="w-full flex justify-between items-center p-4">
            <h2 className={`${styles.heading1}`}>Centro Cultural Nucleo</h2>
            <button className="ml-auto bg-primary text-white flex gap-2 px-4 py-2 rounded">
              <BiTrash className="w-5" />
              Eliminar
            </button>
          </div>
          <Swiper
            modules={[Pagination]}
            pagination={{
              el: ".pagination",
              clickable: true,
            }}
            slidesPerView={6}
            breakpoints={{
              "@0.00": {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              "@0.50": {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              "@1.00": {
                slidesPerView: 4,
                spaceBetween: 25,
              },
              "@1.25": {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              "@1.50": {
                slidesPerView: 6,
                spaceBetween: 30,
              }
            }}
          >
            {grupos.map((grupo, index) => (
              <SwiperSlide key={index}>
                <div className="relative max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <IoCloseCircle className="w-6 lg:w-8 text-black absolute top-0 right-0" onClick={handleDelete} />
                  <img
                    src={grupo?.img}
                    alt={grupo?.title}
                    className="h-full object-cover rounded-[10px]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {selectedImage && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50' onClick={() => setSelectedImage(null)}>
          <span className='absolute top-5 right-5 text-white text-4xl font-bold cursor-pointer'>&times;</span>
          <img className='max-w-[750px] max-h-[auto] rounded-lg' src={selectedImage} alt="Noticia" />
        </div>
      )}
    </DashboardLayout>
  );
}
