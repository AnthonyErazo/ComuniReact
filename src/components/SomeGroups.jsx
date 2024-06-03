import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Autoplay } from 'swiper/modules';
import CardItem from './CardItem';
import styles from "../style";
import { useEffect, useState } from 'react';
import Button from './Button';

function Testimonials() {
  const [loading, setLoading] = useState(true);
  const [grupos, setGrupos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setGrupos([
        { title: 'Centro Cultural Nucleo', img: 'https://scontent.flim33-1.fna.fbcdn.net/v/t39.30808-1/434493740_817644583724303_4719665726187510333_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFLp_qEr10WEbtBGreQDCA3ClObpG6JhDwKU5ukbomEPHgP6wgtCTDdukrXks82XrlStVTCoKWcsbRRJLcxOt4O&_nc_ohc=mUYLCCYJT9MQ7kNvgF0mAd4&_nc_ht=scontent.flim33-1.fna&oh=00_AYBdHRilJOtwOIp4WO3VSJnunXQvSlWt2uGNnfqxodsR7g&oe=666201A8', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis est hic iusto quam maxime consectetur recusandae sequi quisquam rerum, nam debitis facere voluptates, exercitationem cum quis aut quasi nulla esse." },
        { title: 'Centro Cultural Nucleo', img: 'https://scontent.flim33-1.fna.fbcdn.net/v/t39.30808-1/434493740_817644583724303_4719665726187510333_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFLp_qEr10WEbtBGreQDCA3ClObpG6JhDwKU5ukbomEPHgP6wgtCTDdukrXks82XrlStVTCoKWcsbRRJLcxOt4O&_nc_ohc=mUYLCCYJT9MQ7kNvgF0mAd4&_nc_ht=scontent.flim33-1.fna&oh=00_AYBdHRilJOtwOIp4WO3VSJnunXQvSlWt2uGNnfqxodsR7g&oe=666201A8', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis est hic iusto quam maxime consectetur recusandae sequi quisquam rerum, nam debitis facere voluptates, exercitationem cum quis aut quasi nulla esse." },
        { title: 'Centro Cultural Nucleo', img: 'https://scontent.flim33-1.fna.fbcdn.net/v/t39.30808-1/434493740_817644583724303_4719665726187510333_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFLp_qEr10WEbtBGreQDCA3ClObpG6JhDwKU5ukbomEPHgP6wgtCTDdukrXks82XrlStVTCoKWcsbRRJLcxOt4O&_nc_ohc=mUYLCCYJT9MQ7kNvgF0mAd4&_nc_ht=scontent.flim33-1.fna&oh=00_AYBdHRilJOtwOIp4WO3VSJnunXQvSlWt2uGNnfqxodsR7g&oe=666201A8', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis est hic iusto quam maxime consectetur recusandae sequi quisquam rerum, nam debitis facere voluptates, exercitationem cum quis aut quasi nulla esse." },
        { title: 'Centro Cultural Nucleo', img: 'https://scontent.flim33-1.fna.fbcdn.net/v/t39.30808-1/434493740_817644583724303_4719665726187510333_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFLp_qEr10WEbtBGreQDCA3ClObpG6JhDwKU5ukbomEPHgP6wgtCTDdukrXks82XrlStVTCoKWcsbRRJLcxOt4O&_nc_ohc=mUYLCCYJT9MQ7kNvgF0mAd4&_nc_ht=scontent.flim33-1.fna&oh=00_AYBdHRilJOtwOIp4WO3VSJnunXQvSlWt2uGNnfqxodsR7g&oe=666201A8', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis est hic iusto quam maxime consectetur recusandae sequi quisquam rerum, nam debitis facere voluptates, exercitationem cum quis aut quasi nulla esse." },
        { title: 'Centro Cultural Nucleo', img: 'https://scontent.flim33-1.fna.fbcdn.net/v/t39.30808-1/434493740_817644583724303_4719665726187510333_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFLp_qEr10WEbtBGreQDCA3ClObpG6JhDwKU5ukbomEPHgP6wgtCTDdukrXks82XrlStVTCoKWcsbRRJLcxOt4O&_nc_ohc=mUYLCCYJT9MQ7kNvgF0mAd4&_nc_ht=scontent.flim33-1.fna&oh=00_AYBdHRilJOtwOIp4WO3VSJnunXQvSlWt2uGNnfqxodsR7g&oe=666201A8', description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis est hic iusto quam maxime consectetur recusandae sequi quisquam rerum, nam debitis facere voluptates, exercitationem cum quis aut quasi nulla esse." }
      ]);
      setLoading(false);
    }, 5000);
  }, []);
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
          <Button title={'Ver mas'} route={'/groups'} />
        </div>
      </div>
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
          {(loading ? Array.from(new Array(5)) : grupos).map((grupo, index) => (
            <SwiperSlide key={index}>
              <CardItem grupo={grupo} isLoading={loading} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
};

export default Testimonials;