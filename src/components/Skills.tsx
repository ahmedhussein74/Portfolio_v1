import "../css/Skills.css";
import { Grid } from "@mui/material";

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
    "Express"
  ];

  return (
    <section id="skills" className="min-h-fit py-4">
      <h2 className="text-center font-bold">
        Skills
      </h2>
      <Grid
        container
        spacing={5}
        justifyContent='space-around'
      >
        {skills.map((val, index) => (
          <Grid item xs={8} sm={4} md={4} key={index}>
            <span className="block w-4/5 lg:w-2/4 mx-auto p-2 rounded-full text-white">{val}</span>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default Skills;
