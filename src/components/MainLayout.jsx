import styles, { layout } from "../style";
import { Business, CTA, Footer, Navbar,Hero } from "./";

import { questions1, questions2 } from "../constants";
import Testimonials from "./Testimonials";
import { useState } from "react";
import SliderItem from "./SliderItem";
import SliderThumbnailItem from "./SliderThumbnailItem";
import Arrows from "./Arrows";
import { fondo1, fondo2 } from "../assets";

const MainLayout = () => {
  const [itemActive, setItemActive] = useState(1);
    const countItems = 5;
  
    const onNext = () => {
      setItemActive(itemActive + 1);
      if (itemActive >= countItems) {
        setItemActive(1);
      }
    };
  
    const onPrevius = () => {
      setItemActive(itemActive - 1);
      if (itemActive === 1) {
        setItemActive(5);
      }
    };
  return (<div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
  
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className='h-screen relative '>
      <ul>
        <SliderItem
          itemActive={itemActive}
          id={1}
          image={fondo1}
          brand='Explora'
          name='Comunidades UNI'
          desc='Descubre un mundo de posibilidades y encuentra nuevas comunidades estudiantiles para unirte y participar.'
        />
        <SliderItem
          itemActive={itemActive}
          id={2}
          image={fondo2}
          brand='Conectate'
          name='Pasiones UNI'
          desc='Encuentra tu comunidad y haz conexiones significativas que comparten tus intereses y pasiones.'
        />
        <SliderItem
          itemActive={itemActive}
          id={3}
          image={fondo1}
          brand='Vive'
          name='Experiencia UNI'
          desc='Sumérgete en la vida estudiantil y vive una experiencia única participando en las comunidades más vibrantes de la UNI.'
        />
        <SliderItem
          itemActive={itemActive}
          id={4}
          image={fondo2}
          brand='Crea'
          name='Tu Comunidad'
          desc='Haz realidad tus ideas y crea tu propia comunidad en COMUNI. Comparte tu pasión y conecta con otros estudiantes.'
        />
        <SliderItem
          itemActive={itemActive}
          id={5}
          image={fondo1}
          brand='Descubre'
          name='Oportunidades UNI'
          desc='Explora un mundo de oportunidades y descubre experiencias únicas en las diversas comunidades estudiantiles de la UNI.'
        />
        <SliderItem
          itemActive={itemActive}
          id={6}
          image={fondo2}
          brand='Unete'
          name='Participa UNI'
          desc='Únete a la acción y participa en actividades emocionantes organizadas por las comunidades estudiantiles de la UNI. ¡Tu viaje comienza aquí!'
        />
      </ul>
      <Arrows onClickPrev={() => onPrevius()} onClickNext={() => onNext()} />
      <ul className='absolute bottom-0 z-10 flex sm:justify-end gap-3 w-full h-[250px] px-14 overflow-y-hidden overflow-x-auto'>
        <SliderThumbnailItem
          itemActive={itemActive}
          image={fondo1}
          id={1}
          name='Explora'
          onClick={() => setItemActive(1)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image={fondo2}
          id={2}
          name='Conectate'
          onClick={() => setItemActive(2)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image={fondo1}
          id={3}
          name='Vive'
          onClick={() => setItemActive(3)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image={fondo2}
          id={4}
          name='Crea'
          onClick={() => setItemActive(4)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image={fondo1}
          id={5}
          name='Descubre'
          onClick={() => setItemActive(5)}
        />
        <SliderThumbnailItem
          itemActive={itemActive}
          image={fondo2}
          id={6}
          name='Unete'
          onClick={() => setItemActive(5)}
        />
      </ul>
    </div>
<div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
  <div className={`${styles.boxWidth}`}>
    <Business
      title={'¿Qué es COMUNI?'}
      description={'Descubre y conecta con comunidades estudiantiles de la Universidad Nacional de Ingeniería. Encuentra información sobre objetivos, actividades y contacto.'}
      questions={questions1}
      styleQA={layout.sectionQA}
      styleImg={layout.sectionImg}
    />

    <Business
      title={'¿Qué beneficios obtengo al participar en una comunidad estudiantil?'}
      description={'Desarrolla habilidades sociales y profesionales, amplía tu red de contactos y vive experiencias enriquecedoras.'}
      questions={questions2}
      styleQA={layout.sectionQAReverse}
      styleImg={layout.sectionImgReverse}
    />
    <Testimonials />
    <CTA />
    <Footer />
  </div>
</div>
</div>);
};

export default MainLayout;
