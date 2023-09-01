import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return <main className="min-h-screen bg-[url(/images/bg-briefcase.jpg)] font-Kanit bg-cover bg-center">
  <Navbar />
  <Home />
  <AboutMe />
  <Contact />
  </main>;
}

export default App;
