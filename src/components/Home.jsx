import React from "react";

const Home = () => {
  return (
    <article className="text-text-white  w-full p-2">
      <article className="  w-full flex justify-between h-full pt-12 relative">
        <section className="p-2 z-10 bg-bg-100/50 grid gap-2">
          <h3 className="text-1xl font-semibold mb-1">Welcome,</h3>
          <h2 className="text-2xl font-bold">To my briefcase,Traveler</h2>
          <a href="#Contact" className="mt-4 place-self-start px-4 border rounded-full text-lg hover:scale-110 hover:animate-pulse">
           Contact Me
         </a>
        </section>
        <section className="p-2 w-full absolute left-10 top-3">
          <img className="w-[50%]" src="./images/astronaut2(try).png" />
        </section>
      </article>
    </article>
  );
};
// -Crear Header -Crear estado -Usarlo props en cerrar y abrir (Navbar abrir) (Header cerrar) -Estilizar navbar -listo :)

export default Home;
