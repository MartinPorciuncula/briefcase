import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return <main className="min-h-screen bg-[url(/images/bg-briefcase.jpg)] font-Kanit bg-cover bg-center w-screen overflow-hidden">
  <Navbar />
  <Home />
  <AboutMe />
  <Skills />
  <Projects />
  <Contact />
  </main>;
}

export default App;
