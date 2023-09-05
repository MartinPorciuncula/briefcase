import React from "react";

const Skills = () => {
  return (
    <article id="Skills"className="p-4  flex justify-center min-[400px]:text-xl">
      <section className="font-semibold flex gap-4 flex-col text-try">
        <span className="">
          But with everything seen about me, you may be wondering, what Skills
          do I have in programming? let's review!
        </span>
        <div className="flex gap-4 justify-center">
          <i class="bx bxl-html5 text-4xl min-[400px]:text-5xl  hover:scale-125 hover:animate-bounce"></i>
          <i class="bx bxl-css3 text-4xl  min-[400px]:text-5xl hover:scale-125 hover:animate-bounce"></i>
          <i class="bx bxl-javascript text-4xl  min-[400px]:text-5xl hover:scale-125 hover:animate-bounce"></i>
          <i class="bx bxl-react text-4xl  min-[400px]:text-5xl hover:scale-125 hover:animate-bounce"></i>
          <i class="bx bxl-tailwind-css text-4xl  min-[400px]:text-5xl hover:scale-125 hover:animate-bounce"></i>
        </div>
      </section>
    </article>
  );
};

export default Skills;
