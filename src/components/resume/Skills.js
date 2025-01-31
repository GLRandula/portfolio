import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div className="wrapper mt-20">
      <Title text="Tech Stack" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        {[
          { title: "Javascript", link: "#"},
          { title: "Reactjs", link: "#" },
          { title: "Nextjs", link: "#" },
          { title: "Nodejs", link: "#" },
          { title: "Typescript", link: "#" },
          { title: "Expressjs", link: "#" },
          { title: "PHP", link: "#" },
          { title: "ASP .NET", link: "#" },
          { title: "Laravel", link: "#" },
          { title: "SpringBoot", link: "#" },
          { title: "Redux Toolkit", link: "" },
          { title: "django", link: "#" },
          { title: "MongoDB", link: "#" },
          { title: "PostgreSQL", link: "#" },
          { title: "Google Firebase", link: "#" },
          { title: "Tailwindcss", link: "#" },
          { title: "MYSQL", link: "#" },
          { title: "WordPress", link: "#" },
          { title: "HTML5", link: "#" },
          { title: "CSS3", link: "#" },
          { title: "Java", link: "#" },
          { title: "C#", link: "#" },
          { title: "Python", link: "#" },
          { title: "C", link: "#" },
          { title: "Boostrap", link: "#" },
          { title: "VS Code", link: "#" },
          { title: "FastAPI", link: "#" },
          { title: "Postman", link: "#" },
          { title: "Docker", link: "#" },
          { title: "AWS", link: "#" },
          { title: "Cloud", link: "#" },
          { title: "Redis", link: "#" },
          { title: "Git", link: "#" },
          { title: "Github", link: "#" },
          { title: "Trello", link: "#" },
          { title: "UI Design", link: "#" },
          { title: "Figma", link: "#" }
        ].map((skill, index) => (
          <SkillsInput key={index} title={skill.title} link={skill.link} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
