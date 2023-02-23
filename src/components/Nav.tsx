import "../css/Nav.css";

const Nav = () => {
  return (
    <nav className="rounded-full flex justify-around items-center fixed bottom-5">
      <a href="#home" className="grid rounded-full no-underline">
        <i className="fa-solid fa-house"></i>
      </a>
      <a href="#skills" className="grid rounded-full no-underline">
        <i className="fa-solid fa-star"></i>
      </a>
      <a href="#projects" className="grid rounded-full no-underline">
        <i className="fa-sharp fa-solid fa-gear"></i>
      </a>
      <a href="#contact" className="grid rounded-full no-underline">
        <i className="fa-solid fa-envelope"></i>
      </a>
    </nav>
  );
};

export default Nav;
