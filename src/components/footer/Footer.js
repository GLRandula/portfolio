import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
// import {logo} from "../../assets/index"
import { Link } from "react-scroll";
import { navLinksdata } from "../../constants";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-40">
      <div className="w-full h-full flex flex-col gap-8">
        {/* <img className="w-28" src={logo} alt="logo" /> */}
        <h2 className="text-2xl text-white font-extrabold uppercase hover:text-designColor cursor-pointer relative group overflow-hidden duration-300">
          Lakith Randula
          <span className="absolute left-0 bottom-0 w-[216px] h-[2px] bg-designColor -translate-x-[100%] group-hover:translate-x-0 duration-300" />
        </h2>
        <p className="text-base text-gray-400 tracking-wide">
          Let's build seamless, scalable, and innovative web solutions together.
          Contact me for collaboration!
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/GLRandula" target="blank">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
          <a href="https://www.facebook.com/share/12GDeYoggM4/" target="blank">
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
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Quick Link
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">
          Contact Me
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              <p className="flex gap-4">
                Phone: <span className="">+94 76 745 4067</span>
              </p>
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%]"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
              <p className="text-base">
                Email: <span className="">lakithrandula6@gmail.com</span>
              </p>
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%]"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg relative">
              <p className="text-base">
                Address:{" "}
                <span className="">131\H; Henadeniya, Ankokkawala.</span>
              </p>
              <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%]"></span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
