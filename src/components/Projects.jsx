import React from "react";

const Projects = () => {
  return (
    <section id="Projects" className="text-try font-semibold flex flex-col gap-4 p-4">
      <span className="w-[50%] place-self-center min-[400px]:text-xl  min-[400px]:place-self-center">
        And we come to the most important part! My projects to which in each one
        I have dedicated hours and dedication, love and suffering, but we didn't
        talk about the last thing, did we? Without further ado, here are the
        links! Have fun!
      </span>
      <div className="flex flex-col gap-6 min-[400px]:grid min-[400px]:grid-cols-3 min-[400px]:mt-20 min-[400px]:p-4">
      <a className="hover:scale-125 cursor-pointer hover:translate-y-10" href="https://e-commerce-martin-porciuncula.netlify.app" target="_blank">
  <img src="./images/Project1.PNG" alt="E-commerce"/>
</a>
      <a className="hover:scale-125 cursor-pointer hover:translate-y-10" href="https://first-react-deliverable.netlify.app" target="_blank">
  <img src="./images/Project2.PNG" alt="E-commerce"/>
</a>
      <a className="hover:scale-125 cursor-pointer hover:translate-y-10" href="  https://second-deliverable-react.netlify.app" target="_blank">
  <img src="./images/Project3.PNG" alt="E-commerce"/>
</a>
      <a className="hover:scale-125 cursor-pointer hover:translate-y-10" href="https://third-deliverable-visualicer.netlify.app" target="_blank">
  <img src="./images/Project4.PNG" alt="E-commerce"/>
</a>
      <a className="hover:scale-125 cursor-pointer hover:translate-y-10" href="    https://fourth-react-deliverable.netlify.app" target="_blank">
  <img src="./images/Project5.PNG" alt="E-commerce"/>
</a>
      <a className="hover:scale-125 cursor-pointer hover:translate-y-10" href=" https://delightful-crostata-e05e9c.netlify.app" target="_blank">
  <img src="./images/Project6.PNG" alt="E-commerce"/>
</a>     
      </div>
    </section>
  );
};

export default Projects;
