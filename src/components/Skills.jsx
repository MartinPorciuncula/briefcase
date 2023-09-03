import React from "react";

const Skills = () => {
  return (
    <article className="p-4  flex justify-center">
      <section className="font-semibold w-80 flex gap-4 flex-col text-try">
        <span className="">
          But with everything seen about me, you may be wondering, what Skills
          do I have in programming? let's review!
        </span>
        <div className="flex gap-4">
          <i class="bx bxl-html5 text-4xl hover:scale-125 hover:animate-bounce"></i>
          <i class="bx bxl-css3 text-4xl hover:scale-125 hover:animate-bounce"></i>
          <i class="bx bxl-javascript text-4xl hover:scale-125 hover:animate-bounce"></i>
          <i class="bx bxl-react text-4xl hover:scale-125 hover:animate-bounce"></i>
          <i class="bx bxl-tailwind-css text-4xl hover:scale-125 hover:animate-bounce"></i>
        </div>
        <span>
          As you can see I use the main technologies for the creation of the Web
          Page, however I am still a junior and I continue to learn new things
          every day, but with a lot to teach and be taught{" "}
        </span>
      </section>
    </article>
  );
};

export default Skills;
