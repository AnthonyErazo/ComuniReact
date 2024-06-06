import styles, { layout } from "../style";
import { Business, Footer, Navbar, Hero, SomeGroups } from "./";
import { questions1, questions2 } from "../constants";
import { useEffect, useState } from "react";
import SliderItem from "./SliderItem";
import Arrows from "./Arrows";
import { imagen1, imagen10, imagen11, imagen3, imagen7, imagen8 } from "../assets";
import { useLocation } from "react-router-dom";
import Loading from "./Loading";

const MainLayout = () => {
  const [itemActive, setItemActive] = useState(1);
  const [loading, setLoading] = useState(false);
  const countItems = 6;

  const onNext = () => {
    setItemActive(itemActive + 1);
    if (itemActive >= countItems) {
      setItemActive(1);
    }
  };

  const onPrevius = () => {
    setItemActive(itemActive - 1);
    if (itemActive === 1) {
      setItemActive(6);
    }
  };
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  if(loading) return <Loading />
  return (
    <>
      <div className="bg-primary w-full overflow-hidden">
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
        <section id="info" className='h-screen relative '>
          <ul>
          <SliderItem
              itemActive={itemActive}
              color={'white'}
              id={1}
              image={imagen1}
              brand='Unete'
              name='Participa'
              desc='Únete a la acción y participa en actividades emocionantes organizadas por las comunidades estudiantiles de la UNI. ¡Tu viaje comienza aquí!'
            />
            <SliderItem
              itemActive={itemActive}
              color={'white'}
              id={2}
              image={imagen7}
              brand='Explora'
              name='Comunidad'
              desc='Descubre un mundo de posibilidades y encuentra nuevas comunidades estudiantiles para unirte y participar.'
            />
            <SliderItem
              itemActive={itemActive}
              color={'white'}
              id={3}
              image={imagen8}
              brand='Conectate'
              name='Pasiones'
              desc='Encuentra tu comunidad y haz conexiones significativas que comparten tus intereses y pasiones.'
            />
            <SliderItem
              itemActive={itemActive}
              color={'white'}
              id={4}
              image={imagen11}
              brand='Vive'
              name='Experiencia'
              desc='Sumérgete en la vida estudiantil y vive una experiencia única participando en las comunidades más vibrantes de la UNI.'
            />
            <SliderItem
              itemActive={itemActive}
              color={'white'}
              id={5}
              image={imagen10}
              brand='Crea'
              name='Tu Comunidad'
              desc='Haz realidad tus ideas y crea tu propia comunidad en COMUNI. Comparte tu pasión y conecta con otros estudiantes.'
            />
            <SliderItem
              itemActive={itemActive}
              color={'white'}
              id={6}
              image={imagen3}
              brand='Descubre'
              name='Oportunidad'
              desc='Explora un mundo de oportunidades y descubre experiencias únicas en las diversas comunidades estudiantiles de la UNI.'
            />
          </ul>
          <Arrows onClickPrev={() => onPrevius()} onClickNext={() => onNext()} />
        </section>
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
            <SomeGroups />
            <Footer setLoading={setLoading} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
