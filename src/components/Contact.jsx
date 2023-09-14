import React from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
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
   <section className=''>
     <form className='flex flex-col justify-center items-center gap-2 p-4' onSubmit={sendEmail}>
      <label className='font-bold text-xl'>Name</label>
      <input placeholder='Type Here Your Name' type="text" name="user_name" />
      <label className='font-bold text-xl'>Email</label>
      <input  placeholder='Type Here Your Email' type="email" name="user_email" />
      <label  className='font-bold text-xl'>Message</label>
      <textarea name="message" />
      <input className='bg-try py-1 rounded-lg cursor-pointer px-6 hover:scale-125 transition-all hover:animate-pulse font-semibold' type="submit" value="Send" />
    </form>
   </section>
  )
}

export default Contact