import "../css/Home.css";

const Home = () => {
  return (
    <section className="h-screen overfloow-hidden">
      <p className="text-white">
        Hi, my name is Ahmed Hussein <br />
        and I'm a <br />
        <span>Front end Developer</span>
      </p>
      <div className="mycircle rounded-full flex justify-center items-center"></div>
    </section>
  );
};

export default Home;
