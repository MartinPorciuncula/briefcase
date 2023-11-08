import React from "react";
import { useTranslation } from "react-i18next";

const LinkToProjects = ({ projects }) => {
  return projects.map((p) => (
    <a
      className="bg-bg-300 px-8 rounded-lg hover:scale-125 min-[400px]:w-20 hover:transition-all min-[400px]:mr- flex flex-col justify-center items-center"
      href={p.link}
      target="_blank"
    >
      {p.name} <i class="bx bxl-github text-3xl"></i>{" "}
    </a>
  ));
};

const Projects = () => {
  const { t } = useTranslation();
  const projects = [
    { name: "Airport", link: "https://github.com/MartinPorciuncula/first_backend_app" },
    { name: "Repairs", link: "https://github.com/MartinPorciuncula/second_backend_app" },
    { name: "Meals", link: "https://github.com/MartinPorciuncula/third_backend_app" },
  ];
  return (
    <section
      id="Projects"
      className="text-try font-semibold flex flex-col gap-4 p-4"
    >
      <span className="w-[50%] place-self-center min-[400px]:text-xl  min-[400px]:place-self-center">
        {t("projects.description")}
      </span>
      <div className="flex flex-col gap-6 min-[400px]:grid min-[400px]:grid-cols-3 min-[400px]:mt-20 min-[400px]:p-4">
        <a
          className="hover:scale-125 cursor-pointer hover:translate-y-10 hover:transition-all"
          href="https://e-commerce-martin-porciuncula.netlify.app"
          target="_blank"
        >
          <img src="./images/Project1.PNG" alt="E-commerce" />
        </a>

        <a
          className="hover:scale-125 cursor-pointer hover:translate-y-10 hover:transition-all"
          href="https://first-react-deliverable.netlify.app"
          target="_blank"
        >
          <img src="./images/Project2.PNG" alt="GalakInfo" />
        </a>

        <a
          className="hover:scale-125 cursor-pointer hover:translate-y-10 hover:transition-all"
          href="  https://second-deliverable-react.netlify.app"
          target="_blank"
        >
          <img src="./images/Project3.PNG" alt="WheatherInfo" />
        </a>

        <a
          className="hover:scale-125 cursor-pointer hover:translate-y-10 hover:transition-all"
          href="https://third-deliverable-visualicer.netlify.app"
          target="_blank"
        >
          <img src="./images/Project4.PNG" alt="RickandMorty" />
        </a>

        <a
          className="hover:scale-125 cursor-pointer hover:translate-y-10 hover:transition-all"
          href="https://fourth-react-deliverable.netlify.app"
          target="_blank"
        >
          <img src="./images/Project5.PNG" alt="UsersCrud" />
        </a>

        <a
          className="hover:scale-125 cursor-pointer hover:translate-y-10 hover:transition-all"
          href="https://delightful-crostata-e05e9c.netlify.app"
          target="_blank"
        >
          <img src="./images/Project6.PNG" alt="Pokedex" />
        </a>
      </div>

      <div className="flex flex-col">
        <span className="w-[50%] place-self-center min-[400px]:text-xl  min-[400px]:place-self-center text-bg-100 text-lg">
        {t("projects.not-frontend")}
        </span>
        <div className="p-4 w-[100%] flex flex-row justify-center items-center gap-3">
          <LinkToProjects projects={projects} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
