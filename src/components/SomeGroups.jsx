import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Autoplay } from 'swiper/modules';
import CardItem from './CardItem';
import styles from "../style";
import { useEffect, useState } from 'react';
import Button from './Button';
import { useParams } from 'react-router-dom';
import { getGroups } from '../services/groupService';

function Testimonials() {
  const { gid } = useParams()
  const [loading, setLoading] = useState(true);
  const [grupos, setGrupos] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        setLoading(true)
        let data
        if (gid) {
          data = await getGroups(5, 1, `{"status":true,"_id": { "$ne": "${gid}" }}`)
        } else {
          data = await getGroups(5, 1)
        }
        setGrupos(data.payload);
      } catch (error) {
        console.error('Error fetching groups:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, [gid]);
  return (
    <section id="grupos" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          Tu Viaje<br className="sm:block hidden" /> Comienza Aquí
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Descubre nuevas pasiones y haz amigos para toda la vida en las comunidades de la UNI.
          </p>
          <Button title={'Ver mas'} route={'/groups#allGroups'} />
        </div>
      </div>
      {grupos.length === 5 && (
        <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
          <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            pagination={{
              el: ".pagination",
              clickable: true,
            }}
            slidesPerView={4}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 25,
              },
              "@0.50": {
                slidesPerView: 1.25,
                spaceBetween: 25,
              },
              "@1.00": {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              "@1.25": {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              "@1.50": {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              "@1.75": {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {grupos.map((grupo, index) => (
              <SwiperSlide key={index}>
                <CardItem grupo={grupo} isLoading={loading} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  )
};

export default Testimonials;