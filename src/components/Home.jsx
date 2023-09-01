import React from "react";

const Home = () => {
  return (
    <article className="text-text-white  w-full h-[300px] p-2">
      <article className="  w-full flex justify-between h-full pt-12">
        <section className="p-2">
          <h3 className="text-1xl font-semibold mb-1">Welcome,</h3>
          <h2 className="text-2xl font-bold">To my briefcase,Traveler</h2>
          <button className="mt-4 px-4 border rounded-full text-lg">
            Contact Me!
          </button>
        </section>
        <section className="p-2 w-full">
          <img className="h-36" src="./images/astronaut2.png" />
        </section>
      </article>
    </article>
  );
};

export default Home;
