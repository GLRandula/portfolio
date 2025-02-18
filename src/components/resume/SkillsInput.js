const SkillsInput = ({ title, icon }) => {
  return (
    <div className="border border-designColor px-10 py-2 text-lg tracking-wide bg-transparent text-gray-400 hover:text-black hover:border-black hover:bg-designColor rounded-lg duration-300 flex items-center gap-2">
      {icon}
      <p>{title}</p>
    </div>
  );
};

export default SkillsInput;