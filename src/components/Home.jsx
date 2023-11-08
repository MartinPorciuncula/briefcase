import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  // const handleClickChangeLanguages = () => {
  //   i18n(i18n.changeLanguage(i18n.language === "es" ? "en" : "es"));
  // };

  const { t } = useTranslation();

  return (
    <article className="text-text-white  w-full p-2">
      <article
        id="Home"
        className="w-full flex justify-between h-full pt-12 relative min-[400px]:flex  min-[400px]:justify-center"
      >
        <section className="p-2 z-10 bg-bg-100/50 grid gap-2 w-[90%] min-[400px]:h-56 min-[400px]:w-[70%] min-[400px]:flex min-[400px]:justify-center min-[400px]:items-center min-[400px]:flex-col">
          <h3 className="text-1xl font-semibold mb-1 min-[400px]:text-2xl">
            {t("home.welcome")},
          </h3>
          <h2 className="text-2xl font-bold min-[400px]:text-3xl">
            {t("home.to-my")}
          </h2>
          <a
            href="#Contact"
            className="mt-4 place-self-start px-4 border rounded-full text-lg hover:scale-110 hover:animate-pulse min-[400px]:flex min-[400px]:place-self-center"
          >
            {t('home.contact-me')}
          </a>
          <audio
            className="h-10 w-60"
            controls
            src=".\audios\X2Download.app - across the stars ~ lofi (256 kbps).mp3"
          />
        </section>
        <section className="p-2 w-full absolute left-10 top-3 min-[400px]:flex min-[400px]:justify-center">
          <img
            className="w-[50%] min-[400px]:w-[180px]"
            src="./images/astronaut2(try).png"
          />
        </section>
      </article>
      {/* <button onClick={handleClickChangeLanguages}>EN / ES</button> */}
    </article>
  );
};
// -Crear Header -Crear estado -Usarlo props en cerrar y abrir (Navbar abrir) (Header cerrar) -Estilizar navbar -listo :)Contact

export default Home;
