import { IconBriefcase, IconBriefcaseFilled } from "@tabler/icons-react";
import React from "react";

const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-12 ">
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 relative inline-block ">
        <span
          className=" bg-gradient-to-b from-violet-600 via-violet-600 to-gray-900 text-transparent bg-clip-text
"
        >
          Experience
        </span>
      </h2>
      <div className="flex md:flex-row flex-col justify-center items-center md:justify-normal md:items-start">
        <div>
          <IconBriefcaseFilled color="white" size={50} />
        </div>
        <p className="text-gray-400 text-md md:text-lg max-w-2xl mx-auto">
          From December 2024 to January 2025, I worked as a Research Intern at
          my college, where I focused on projects in Generative AI and Deep
          Learning. This experience strengthened my understanding of machine
          learning workflows, research methodologies, and collaborative
          development in academic settings.
        </p>
      </div>
    </div>
  );
};

export default Experience;
