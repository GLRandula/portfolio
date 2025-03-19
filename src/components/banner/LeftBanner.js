import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
// import { HiArrowRight } from "react-icons/hi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer.", "UI/UX Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY CAREER</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Lakith Randula</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          {/* a Full Stack Developer. */}
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#00f1ff"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Expertise in <strong>frontend/backend development, UI/UX Design</strong> crafting seamless, scalable, and user-friendly web applications. Skilled in modern frameworks, databases, and APIs.
        </p>
      </div>
      {/* <div className="w-48">
        <button className="w-full h-12 mt-10 bg-[#071929] border-2 border-white rounded-lg text-base text-white tracking-wider uppercase hover:text-designColor duration-300 hover:border-2 hover:border-designColor border-transparent">
          Download CV
        </button>
      </div> */}
      <div className="w-48">
        <a
          href="/cv.pdf"
          download="LakithRandula.pdf"
          className="w-full h-12 mt-10 bg-[#071929] border-2 border-white rounded-lg text-base text-white tracking-wider uppercase hover:text-designColor duration-300 hover:border-2 hover:border-designColor border-transparent flex items-center justify-center"
        >
          Download CV
        </a>
      </div>
      <div className="mt-10 flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/GLRandula" target="blank">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a
              href="https://www.facebook.com/share/12GDeYoggM4/"
              target="blank"
            >
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/glrandula" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        {/* <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LeftBanner;
