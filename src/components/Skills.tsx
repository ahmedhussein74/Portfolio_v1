import "../css/Skills.css";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "Javascript",
    "SASS",
    "Bootstrap",
    "AJAX",
    "JSON",
    "React",
    "Tailwind",
    "Redux",
    "Material UI",
    "PHP",
    "MySQL",
    "Node",
    "Express",
    "MongoDB"
  ];

  return (
    <section id="skills" className="py-12">
      <h1 className="text-center text-white">Skills</h1>
      <div className="skills grid gap-12 justify-center py-12">
        {skills.map((val, index) => (
          <span key={index} className="p-2 rounded-full text-white text-center">
            {val}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
