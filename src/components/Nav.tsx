import "../css/Nav.css";

const Nav = () => {
  return (
    <nav className="rounded-full flex justify-around items-center fixed bottom-5">
      <a href="#home" className="rounded-full no-underline">
        <i className="fa-solid fa-house"></i>
      </a>
      <a href="#skills" className="rounded-full no-underline">
        <i className="fa-solid fa-star"></i>
      </a>
      <a href="#projects" className="rounded-full no-underline">
        <i className="fa-sharp fa-solid fa-gear"></i>
      </a>
      <a href="#contact" className="rounded-full no-underline">
        <i className="fa-solid fa-envelope"></i>
      </a>
      <a href="#personal" className="rounded-full no-underline">
        <i className="fa-solid fa-user"></i>
      </a>
    </nav>
  );
};

export default Nav;
