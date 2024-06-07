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
import Loading from "./Loading";
import { getGroups } from "../services/groupService";

export default function AllNotices() {
  const [loading, setLoading] = useState(true);
  const [grupos, setGrupos] = useState([]);
  const [totalPages, setTotalPages] = useState(null)
  const [page, setPage] = useState(1)
  const handleDelete = (index) => {
    setGrupos(grupos.filter((_, i) => i !== index));
  };
  const fecthAllNotices = async () => {
    try {
      const data = await getGroups(5, page,'{ "notice": { "$ne": [] } }')
      if (data.payload.length == 0 && page > 1) {
        setPage(page - 1)
      }
      setTotalPages(data.totalPages)
      setGrupos(data.payload);
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    setLoading(true)
    fecthAllNotices()
  }, [page])
  const [selectedImage, setSelectedImage] = useState(null);
  if (loading) return <Loading dashboard />
  return (
    <>
      <Breadcrumb pageName="All Notices" />
      <PaginationNumber />
      <section>
      {grupos.map((grupo, indexGroup) => (
          <div key={indexGroup} className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
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
              slidesPerView={grupo.notice.length < 6 ? grupo.notice.length : 6}
              spaceBetween={30}
              breakpoints={{
                "@0.00": {
                  slidesPerView: grupo.notice.length < 2 ? grupo.notice.length : 2,
                  spaceBetween: 25,
                },
                "@0.50": {
                  slidesPerView: grupo.notice.length < 3 ? grupo.notice.length : 3,
                  spaceBetween: 25,
                },
                "@1.00": {
                  slidesPerView: grupo.notice.length < 4 ? grupo.notice.length : 4,
                  spaceBetween: 25,
                },
                "@1.25": {
                  slidesPerView: grupo.notice.length < 5 ? grupo.notice.length : 5,
                  spaceBetween: 20,
                },
                "@1.50": {
                  slidesPerView: grupo.notice.length < 6 ? grupo.notice.length : 6,
                  spaceBetween: 30,
                }
              }}
            >
              {grupo.notice.map((notice, indexNotice) => (
                <SwiperSlide key={indexNotice}>
                  <div className="relative max-w-full md:mr-10 sm:mr-5 mr-0 my-5 feedback-card bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <IoCloseCircle className="cursor-pointer w-6 lg:w-8 text-black absolute top-0 right-0" onClick={handleDelete} />
                    <img
                      onClick={() => setSelectedImage(notice.ref)}
                      src={notice.ref}
                      alt={notice.name}
                      className="h-full w-full object-cover rounded-[10px] cursor-pointer"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
        
      </section>
      {selectedImage && (
        <div className='fixed z-[999999] inset-0 flex items-center justify-center bg-black bg-opacity-75' onClick={() => setSelectedImage(null)}>
          <span className='absolute top-5 right-5 text-white text-4xl font-bold cursor-pointer'>&times;</span>
          <img className='max-w-[750px] max-h-[auto] rounded-lg' src={selectedImage} alt="Noticia" />
        </div>
      )}
    </>
  );
}
