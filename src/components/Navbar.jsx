import React from 'react'
import { useTranslation } from "react-i18next"

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <article className='flex text-primary3 font-bold p-2 max-w-[1024px] mx-auto'>
       <section className='flex gap-1 w-full min-[400px]:justify-between'>
        
        <a href='#Home' className='hover:scale-110 cursor-pointer'> {t("navbar.home")}</a>
        <a href='#AboutMe' className='hover:scale-110 cursor-pointer'>{t("navbar.about")}</a>      
        <a href='#Projects' className='hover:scale-110 cursor-pointer'>{t("navbar.projects")}</a>
        <a href='#Skills' className='hover:scale-110 cursor-pointer'>{t("navbar.skills")}</a>
        <a href='#Contact' className='hover:scale-110 cursor-pointer min-[400px]:mr-4'>{t("navbar.contact")}</a>
        </section>
    </article>
  )
}

export default Navbar