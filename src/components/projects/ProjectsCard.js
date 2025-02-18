import React from 'react'
import { BsGithub } from "react-icons/bs";
// import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, link }) => {
  return (
    <div className="w-full h-full p-8 rounded-lg shadow-shadowOne flex flex-col bg-[#1f2744] group hover:bg-[#325b8593] transition-colors duration-300">
      <a href={link}>
      <div className="w-full h-[280px] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
            <div className="flex gap-2">
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <BsGithub />
              </span>
            </div>
          </div>
          <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
      </a>
    </div>
  );
}

export default ProjectsCard