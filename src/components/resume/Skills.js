import { FaTools, FaCodeBranch  } from "react-icons/fa";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <><div className="wrapper mt-14">
      <Title text="Tech Stack" icon={<FaCodeBranch />} />
      <div className="flex gap-4 flex-wrap">
        {[
          { title: "Javascript", link: "#" },
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
          { title: "FastAPI", link: "#" },
          { title: "Docker", link: "#" },
          { title: "AWS", link: "#" },
          { title: "Cloud", link: "#" },
          { title: "Redis", link: "#" },
          { title: "Git", link: "#" },
          { title: "UI/UX Design", link: "#" },
        ].map((skill, index) => (
          <SkillsInput key={index} title={skill.title} link={skill.link} />
        ))}
      </div>
    </div><div className="wrapper mt-14">
        <Title text="Tools" icon={<FaTools />} />
        <div className="flex gap-4 flex-wrap">
          {[
              { title: "VS Code", link: "#" },
              { title: "Visual Studio", link: "#" },
              { title: "Intellij", link: "#" },
              { title: "PyCharm", link: "#" },
              { title: "Jupyter NoteBook", link: "#" },
              { title: "Google Colab", link: "#" },
              { title: "Github", link: "#" },
              { title: "Postman", link: "#" },
              { title: "XAMPP", link: "#" },
              { title: "Figma", link: "#" },
              { title: "Canva", link: "#" },
          ].map((skill, index) => (
            <SkillsInput key={index} title={skill.title} link={skill.link} />
          ))}
        </div>
      </div></>
  );
};

export default Skills;
