import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Front-End Development"
          des="Crafting responsive, interactive, and user-friendly web interfaces."
         
        />
        <Card
          title="Back-End Development"
          des="Building secure, scalable server-side logic and APIs."
          icon={<AiFillAppstore />}
        />
        <Card
          title="UI/UX Design"
          des="Enhancing user experience through intuitive, visually appealing designs."
          icon={<SiAntdesign />}
        />
        <Card
          title="Database Management"
          des="Organizing, storing, and optimizing data for seamless access."
          icon={<SiProgress />}
        />
        <Card
          title="Version Control"
          des="Tracking and managing code changes efficiently with Git."
          icon={<FaMobile />}
        />
        <Card
          title="Web Hosting"
          des="Deploying websites on servers for global accessibility and performance."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features