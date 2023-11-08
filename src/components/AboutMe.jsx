import React from 'react'
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <article id="AboutMe"className='flex justify-center p-4 mt-20'>
    <section className="w-[50%] min-[400px]:text-xl">
     <span className='text-try font-bold'>
     {t("about-me.about")}
</span>
    </section>
    </article>
  )
}

export default AboutMe