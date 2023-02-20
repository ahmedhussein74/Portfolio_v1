import "../css/Projects.css";
import todoapp from "../imgs/To-Do-App.png";
import cashback from "../imgs/Cash-Back.png";
import mint from "../imgs/mint.png";
import portfolio from "../imgs/Ahmed-Hussein.png";
import aflami from "../imgs/Aflami.png";
import weatherapp from "../imgs/Weather-App.png";

const Projects = () => {
  const arr = [
    {
      live: "https://todo-react-app-blush.vercel.app/",
      code: "https://github.com/ahmedhussein74/todo-react-app",
      image: todoapp,
    },
    {
      live: "https://ahmedhussein74.github.io/CashBack/",
      code: "https://github.com/ahmedhussein74/CashBack",
      image: cashback,
    },
    {
      live: "https://ahmedhussein74.github.io/delivery/",
      code: "https://github.com/ahmedhussein74/delivery",
      image: mint,
    },
    {
      live: "https://ahmedhussein74.github.io/portfolio/",
      code: "https://github.com/ahmedhussein74/portfolio",
      image: portfolio,
    },
    {
      live: "https://ahmedhussein74.github.io/MyFilm/",
      code: "https://github.com/ahmedhussein74/MyFilm",
      image: aflami,
    },
    {
      live: "https://ahmedhussein74.github.io/Weather-App/",
      code: "https://github.com/ahmedhussein74/Weather-App",
      image: weatherapp,
    },
  ];
  return (
    <section id="projects" className="py-4">
      <h1 className="text-center">Projects</h1>
      <main className="pt-8 justify-center">
        {arr.map((val, index) => (
          <div className="card-div" key={index}>
            <img src={val.image} />
            <div>
              <a href={val.live} className="bg-red-700 rounded">
                Live
              </a>
              <a href={val.code} className="bg-blue-700 rounded">
                Code
              </a>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Projects;
