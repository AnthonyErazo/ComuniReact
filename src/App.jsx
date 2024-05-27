import styles, { layout } from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Hero } from "./components";
import Services from "./components/Services"
import { questions1, questions2 } from "./constants";
import Testimonials from "./components/Testimonials";

const App = () => (
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

    <div className="">
      <Services />
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Business
          title={'¿Qué es COMUNI?'}
          description={'Descubre y conecta con comunidades estudiantiles de la Universidad Nacional de Ingeniería. Encuentra información sobre objetivos, actividades y contacto.'}
          questions={questions1}
          styleQA={layout.sectionQA}
        />

        <Business
          title={'¿Qué beneficios obtengo al participar en una comunidad estudiantil?'}
          description={'Desarrolla habilidades sociales y profesionales, amplía tu red de contactos y vive experiencias enriquecedoras.'}
          questions={questions2}
          styleQA={layout.sectionQAReverse}
        />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
