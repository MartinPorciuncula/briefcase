import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  const handleClickChangeLanguages = () => {
    i18n(i18n.changeLanguage(i18n.language === "es" ? "en" : "es"));
  };

  return (
    <main className="min-h-screen bg-[url(/images/outerspace-6.gif)] font-Kanit bg-cover bg-center w-screen overflow-hidden">
      <button
        onClick={() => handleClickChangeLanguages()}
        className="bg-try py-1 px-4 rounded-lg m-2 hover:scale-110 transition-all
        "
      >
        EN / ES
      </button>
      <Navbar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
