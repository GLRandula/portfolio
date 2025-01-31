const SkillsInput = ({ title, link }) => {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        <p className="border border-designColor px-10 py-2 text-lg tracking-wide bg-transparent text-gray-400 hover:text-black hover:border-black hover:bg-designColor rounded-lg duration-300">
          {title}
        </p>
      </a>
    );
  };
  
  export default SkillsInput;
  