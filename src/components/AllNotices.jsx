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
import { eliminatedAllNoticeImage, eliminatedNoticeImage, getGroups } from "../services/groupService";
import { useAlert } from "../context/AlertContext";
import { useModal } from "../context/ModalContext";

export default function AllNotices() {
  const [loading, setLoading] = useState(true);
  const [grupos, setGrupos] = useState([]);
  const [totalPages, setTotalPages] = useState(null)
  const [page, setPage] = useState(1)
  const {addAlert} = useAlert()
  const { openModal } = useModal()
  const handleDeleteNotice = (gid,notice) => {
    const fecthDeleteNotice=async()=>{
      try{
        setLoading(true)
        const response=await eliminatedNoticeImage(gid,notice)
        addAlert('success',response.message)
      }catch(error){
        console.error('Error fetching delete notice:', error);
        addAlert('error',error.response.data.message)
      }finally{
        fecthAllNotices()
      }
    }
    fecthDeleteNotice()
  };
  const fecthAllNotices = async () => {
    try {
      const data = await getGroups(5, page, '{ "notice": { "$ne": [] } }')
      if (data.payload.length == 0 && page > 1) {
        setPage(page - 1)
      }
      setTotalPages(data.totalPages)
      setGrupos(data.payload);
    } catch (error) {
      console.error('Error fetching notices:', error);
    } finally {
      setLoading(false)
    }
  }
  const hanldeDeleteAllNotices=(gid)=>{
    const fecthDeleteAllNotice=async()=>{
      try{
        setLoading(true)
        const response=await eliminatedAllNoticeImage(gid)
        addAlert('success',response.message)
      }catch(error){
        console.error('Error fetching delete notice:', error);
        addAlert('error',error.response.data.message)
      }finally{
        fecthAllNotices()
      }
    }
    fecthDeleteAllNotice()
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
      <PaginationNumber page={page} totalPages={totalPages} setPage={setPage} />
      <section>
        {grupos.map((grupo, indexGroup) => (
          <div key={indexGroup} className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
            <div className="w-full flex justify-between items-center p-4">
              <h2 className={`${styles.heading1}`}>Centro Cultural Nucleo</h2>
              <button onClick={()=>openModal({
                title:'Eliminar todas las noticias',
                body:'¿Esta seguro de eliminar todas las noticias de este grupo?'
              },()=>hanldeDeleteAllNotices(grupo._id))} className="ml-auto bg-primary text-white flex gap-2 px-4 py-2 rounded">
                <BiTrash className="w-5" />
                Eliminar
              </button>
            </div>
            <Swiper
              modules={Pagination}
              pagination={{
                el: ".pagination",
                clickable: true,
              }}
              slidesPerView={4}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                420: {
                  slidesPerView: 2,
                },
                600: {
                  slidesPerView: 3,
                },
                800: {
                  slidesPerView: 4,
                },
                1000: {
                  slidesPerView: 5,
                },
                1450: {
                  slidesPerView: 6,
                },
                1650:{
                  slidesPerView:7
                },
                1680:{
                  slidesPerView:8
                }
              }}
              className="flex flex-row overflow-y-auto w-full">
              {grupo.notice.map((notice, indexNotice) => (
                <SwiperSlide className="p-5" key={indexNotice}>
                  <div className="relative w-40 m-auto shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <IoCloseCircle className="cursor-pointer w-6 lg:w-8 text-black absolute top-0 right-0" onClick={()=>openModal({
                      title:'Eliminar una noticia',
                      body:'¿Esta seguro de eliminar esta noticia?'
                    },()=>handleDeleteNotice(grupo._id,notice))} />
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
          <img className='max-w-[750px] p-20 max-h-[auto] rounded-lg' src={selectedImage} alt="Noticia" />
        </div>
      )}
    </>
  );
}
