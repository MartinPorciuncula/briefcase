import React from "react";

const Home = () => {
  return (
    <article className="text-text-white  w-full p-2">
      <article id="Home" className="  w-full flex justify-between h-full pt-12 relative min-[400px]:flex  min-[400px]:justify-center">
        <section className="p-2 z-10 bg-bg-100/50 grid gap-2 w-[90%] min-[400px]:h-56 min-[400px]:w-[50%] min-[400px]:flex min-[400px]:justify-center min-[400px]:items-center min-[400px]:flex-col" >
          <h3 className="text-1xl font-semibold mb-1 min-[400px]:text-2xl">Welcome,</h3>
          <h2 className="text-2xl font-bold min-[400px]:text-3xl">To my briefcase,Traveler</h2>
          <a href="#Contact" className="mt-4 place-self-start px-4 border rounded-full text-lg hover:scale-110 hover:animate-pulse min-[400px]:flex min-[400px]:place-self-center">
           Contact Me
         </a>
        </section>
        <section className="p-2 w-full absolute left-10 top-3 min-[400px]:flex min-[400px]:justify-center">
          <img className="w-[50%] min-[400px]:w-[180px]" src="./images/astronaut2(try).png" />
        </section>
      </article>
    </article>
  );
};
// -Crear Header -Crear estado -Usarlo props en cerrar y abrir (Navbar abrir) (Header cerrar) -Estilizar navbar -listo :)Contact

export default Home;
