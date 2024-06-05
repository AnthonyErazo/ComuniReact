import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index,question }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== question.length - 1 ? "mb-6" : "mb-0"}`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = ({title,description,questions,styleQA,styleImg}) =>  (
  <section id="QA" className={styleQA}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      {title}
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      {description}
      </p>
    </div>

    <div className={`${styleImg} flex-col`}>
      {questions.map((question, index) => (
        <FeatureCard key={question.id} {...question} question={question} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
