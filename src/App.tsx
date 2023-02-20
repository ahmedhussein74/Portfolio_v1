import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Square from './components/Square';

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Home />
      <Square />
      <Nav />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
