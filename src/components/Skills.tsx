import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Skills.css";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []); 
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
    "MySQL",
    "Node",
    "Express",
    "MongoDB",
  ];

  return (
    <section id="skills" className="py-12">
      <h1 className="text-center text-white">Skills</h1>
      <div className="skills grid gap-12 justify-center py-8">
        {skills.map((val, index) => (
          <span
            key={index}
            className="p-2 rounded-full text-white text-center"
            data-aos="zoom-in"
          >
            {val}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
