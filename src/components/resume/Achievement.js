import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - Now</p>
          <h2 className="text-3xl md:text-4xl font-bold">Group Works</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Champions - IntelliHack NextGen 2024"
            subTitle="AI Hackathon, organized by IEEE CS Chapter of UCSC"
            result="1st Place"
            des="Participated as a member of Team Vertex with an inovative AI Powered software product called 'ViewMO - Research Platform'."
          />
          <ResumeCard
            title=" First Runners Up - 𝐆𝐄𝐍𝐄𝐒𝐈𝐙 '𝟐4"
            subTitle="Electronic, Robotics, and Innovation Club of KDU"
            result="2nd Place"
            des="Participated as a member of Team Vertex with an inovative AI Powered software product called 'ViewMO - Research Platform'."
          />
          <ResumeCard
            title="Finalists - TechX AI Ideathon"
            subTitle="Organized by IEEE CS Chapter 2023"
            result="Final 10"
            des="Participated as a member of Team Vertex with an inovative idea of AI Powered software solution for tourism problems."
          />
          <ResumeCard
            title="Finalists - Inovation Nation Sri Lanka"
            subTitle="Organized by IEEE CS Chapter 2022"
            result="Final 10"
            des="Participated as a member of Team Codz1.0 with an inovative idea of AI Powered software solution for online education."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - Now</p>
          <h2 className="text-3xl md:text-4xl font-bold">Personalities</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Webmaster - IEEE Student Branch"
            subTitle="University of Kelaniya - CS Chapter"
            result="Year 24"
            des="Managed the website, technical content, and digital presence, gaining experience in web development, content management."
          />
          <ResumeCard
            title="Member - IEEE Student Branch"
            subTitle="University of Kelaniya - CS Chapter"
            result="Year 24"
            des="Engaged in technical workshops, hackathons, and events, improving skills in teamwork, leadership, delegating, and organizing."
          />
          <ResumeCard
            title="Member - FOSS Community"
            subTitle="University of Kelaniya"
            result="Year 23/24"
            des="Contributed to open-source projects, workshops, enhancing collaboration, software development, and cutting-edge technology trends."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
