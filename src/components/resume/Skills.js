import { FaTools, FaCodeBranch, FaNodeJs, FaReact, FaPhp, FaGitAlt, FaGithub, FaLaravel, FaJava, FaPython, FaDocker, FaAws, FaFigma } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { SiNextdotjs, SiTypescript, SiExpress, SiDotnet, SiSpringboot, SiRedux, SiDjango, SiBootstrap, SiMongodb, SiPostgresql, SiVorondesign, SiMysql, SiTailwindcss, SiWordpress, SiHtml5, SiCss3, SiCsharp, SiC, SiFastapi, SiRedis, SiVisualstudiocode, SiIntellijidea, SiPycharm, SiJupyter, SiGooglecolab, SiPostman, SiXampp, SiCanva } from "react-icons/si";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const techStack = [
  { title: "Javascript", icon: <IoLogoJavascript /> },
  { title: "Reactjs", icon: <FaReact /> },
  { title: "Nextjs", icon: <SiNextdotjs /> },
  { title: "Nodejs", icon: <FaNodeJs /> },
  { title: "Typescript", icon: <SiTypescript /> },
  { title: "Expressjs", icon: <SiExpress /> },
  { title: "PHP", icon: <FaPhp /> },
  { title: "ASP .NET", icon: <SiDotnet /> },
  { title: "Laravel", icon: <FaLaravel /> },
  { title: "SpringBoot", icon: <SiSpringboot /> },
  { title: "Redux Toolkit", icon: <SiRedux /> },
  { title: "Django", icon: <SiDjango /> },
  { title: "MongoDB", icon: <SiMongodb /> },
  { title: "PostgreSQL", icon: <SiPostgresql /> },
  { title: "Firebase", icon: <IoLogoFirebase /> },
  { title: "Tailwindcss", icon: <SiTailwindcss /> },
  { title: "MYSQL", icon: <SiMysql /> },
  { title: "WordPress", icon: <SiWordpress /> },
  { title: "HTML5", icon: <SiHtml5 /> },
  { title: "CSS3", icon: <SiCss3 /> },
  { title: "Java", icon: <FaJava /> },
  { title: "C#", icon: <SiCsharp /> },
  { title: "Python", icon: <FaPython /> },
  { title: "C", icon: <SiC /> },
  { title: "Bootstrap", icon: <SiBootstrap /> },
  { title: "FastAPI", icon: <SiFastapi /> },
  { title: "Docker", icon: <FaDocker /> },
  { title: "AWS", icon: <FaAws /> },
  { title: "Redis", icon: <SiRedis /> },
  { title: "Git", icon: <FaGitAlt /> },
  { title: "UI/UX Design", icon: <SiVorondesign  /> },
];

const tools = [
  { title: "VS Code", icon: <SiVisualstudiocode /> },
  { title: "Visual Studio", icon: <SiDotnet /> },
  { title: "Intellij", icon: <SiIntellijidea /> },
  { title: "PyCharm", icon: <SiPycharm /> },
  { title: "Jupyter Notebook", icon: <SiJupyter /> },
  { title: "Google Colab", icon: <SiGooglecolab /> },
  { title: "Github", icon: <FaGithub  /> },
  { title: "Postman", icon: <SiPostman /> },
  { title: "XAMPP", icon: <SiXampp /> },
  { title: "Figma", icon: <FaFigma /> },
  { title: "Canva", icon: <SiCanva /> },
];

const Skills = () => {
  return (
    <>
      <div className="wrapper mt-14">
        <Title text="Tech Stack" icon={<FaCodeBranch />} />
        <div className="flex gap-4 flex-wrap">
          {techStack.map((skill, index) => (
            <SkillsInput key={index} title={skill.title} icon={skill.icon} />
          ))}
        </div>
      </div>

      <div className="wrapper mt-14">
        <Title text="Tools" icon={<FaTools />} />
        <div className="flex gap-4 flex-wrap">
          {tools.map((tool, index) => (
            <SkillsInput key={index} title={tool.title} icon={tool.icon} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;