import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        id="hero"
        className=" min-h-screen w-full px-4 md:px-16 lg:px-72 py-10 md:py-32 "
      >
        <div className="flex flex-col items-center justify-start">
          <div className="relative flex h-[100px] w-full flex-col items-center justify-center  ">
            <span className="pointer-events-none  bg-gradient-to-b from-gray-400 to-gray-300/80 bg-clip-text text-center text-5xl md:text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 ">
              Hi I&apos;m{" "}
              <span className=" bg-gradient-to-b from-violet-600 via-violet-600 to-indigo-600 bg-clip-text ">Rakshit Kharb!</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-center md:gap-10 sm:py-4 items-center mt-8 md:mt-0">
          <div className="text-center md:text-left md:px-4 md:w-1/2">
            <div className="text-sm px-2 sm:px-0 font-normal text-white dark:text-white">
              I am a third-year student studying Computer Science, with a strong
              focus on Generative AI and Deep Learning. I enjoy exploring the
              latest advancements in AI and applying them to build innovative
              and impactful applications. My work primarily revolves around
              building intelligent systems that combine creativity with
              cutting-edge technology.
            </div>
          </div>
          <div className="mb-6 md:mb-0">
            <img
              className="rounded-full h-32 w-32 md:h-40 md:w-40 lg:h-44 lg:w-44 object-cover"
              src="image.jpeg"
              alt="profile_pic"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 justify-center items-center py-2">
          <Link href="https://drive.google.com/file/d/1DLuoKdzXzi_LWRKWbWZaozi6hV85TCBA/view?pli=1" target="_blank">
            <button className="w-40 h-10 rounded-xl bg-purple-500 hover:bg-purple-900 dark:border-white border-white text-white text-sm">
              Download CV
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
