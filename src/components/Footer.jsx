import styles from "../style";
import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarked, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Button from "./Button";

const Footer = () => (
  <>
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>¿Tienes una idea para una nueva comunidad?</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Sube tu propio grupo a COMUNI y conecta con otros estudiantes que compartan tu visión.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button title={'Crear/Modificar'} route={'/dashboard/inicio'} />
      </div>
    </section>
    <section id='contact' className='flex flex-col justify-center items-center bg-primary'>
      <div className="justify-center items-center  max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
        <div className="info-form">
          <h2 className={styles.heading2}>Contacto</h2>
          <p className={`${styles.paragraph} leading-7 mb-8`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui eligendi est voluptates quae ipsam eius, in quasi odio porro aut vel beatae aperiam.</p>
          <div className=''>
            <a href="#" className={`${styles.paragraph} font-semibold mb-4 no-underline flex gap-4`}><FaPhoneAlt className='w-5' /> 123-456-789</a>
            <a href="#" className={`${styles.paragraph} font-semibold mb-4 no-underline flex gap-4`}><MdEmail className='w-5' /> email@email.com</a>
            <a href="#" className={`${styles.paragraph} font-semibold mb-4 no-underline flex gap-4`}><FaMapMarked className='w-5' /> Ciudad, Pais</a>
          </div>
        </div>
        <form className='form-contact' action="#" autoComplete="off">
          <input type="text" name="nombre" placeholder="Tu Nombre" className="w-full p-4 text-base border border-gray-300 mb-5 rounded-lg outline-none" />
          <input type="email" name="email" placeholder="Tu Email" className="w-full p-4 text-base border border-gray-300 mb-5 rounded-lg outline-none" />
          <textarea name="mensaje" placeholder="Tu Mensaje..." className="w-full min-h-[140px] max-h-[150px] p-4 text-base border border-gray-300 mb-5 rounded-lg outline-none"></textarea>
          <button onClick={() => { }} type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none`}>
            Enviar
          </button>
        </form>
      </div>
    </section>
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ 2022 Comuni.
        </p>
        <div className="flex flex-row md:mt-0 mt-6 gap-5">
          <FaFacebook className="fill-white w-6"/>
          <FaInstagram className="fill-white w-6"/>
          <FaLinkedin className="fill-white w-6"/>
          <FaTwitter className="fill-white w-6"/>
        </div>
      </div>
    </section>
  </>
);

export default Footer;
