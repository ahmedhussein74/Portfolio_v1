import "../css/Home.css";
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { Box } from "@mui/material";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box
      id="home"
      component="section"
      className="h-screen flex flex-wrap items-center content-center"
    >
      <p className="text-white text-4xl w-full h-fit pl-5 mb-5">
        Hi, My name is Ahmed Hussein
      </p>
      <p className="text-white text-4xl w-full h-fit pl-5 mt-5">
        I'm a Front end Developer
      </p>
    </Box>
  );
};

export default Home;
