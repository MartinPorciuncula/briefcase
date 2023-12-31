import React from 'react'
import emailjs from '@emailjs/browser';
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c8net73', 'template_pxwnwn7', e.target, 'l-j4W5wSPyT9EVKFI')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
   <section id="Contact"className='flex justify-center items-center gap-4 flex-row p-4'>
     <form  className='flex flex-col justify-center items-center gap-2 p-4 bg-bg-100/40  min-[400px]:h-96 w-96  min-[400px]:flex-col' onSubmit={sendEmail}>
      <label className='font-bold text-xl'>{t("contact.name")}</label>
      <input placeholder={t("contact.type-name")}  type="text" name="user_name" />
      <label className='font-bold text-xl'>{t("contact.email")}</label>
      <input  placeholder={t("contact.type-email")} type="email" name="user_email" />
      <label  className='font-bold text-xl'>{t("contact.message")}</label>
      <textarea  placeholder={t("contact.type-message")} name="message" />
      <input className='bg-try py-1 rounded-lg cursor-pointer px-6 hover:scale-125 transition-all hover:animate-pulse font-semibold' type="submit" value="Send" />
    </form>
    <article className='flex flex-col gap-6  min-[400px]:flex'>
    <a className='bg-primary2 px-6 rounded-lg  hover:scale-125  min-[400px]:w-20 hover:transition-all' href="https://w.app/c2JkuC" target='_blank'> <i className='bx bxl-whatsapp text-3xl'></i></a>  
    <a className='bg-primary2 px-6 rounded-lg hover:scale-125 min-[400px]:w-20 hover:transition-all'  href="https://www.linkedin.com/in/martin-porciuncula-77269b283/" target='_blank'> <i class='bx bxl-linkedin-square text-3xl'></i> </a>
    </article>
  </section>
  )
}

export default Contact