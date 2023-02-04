import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Square from './components/Square';

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Home />
      <Square />
      <Nav />
    </div>
  );
}

export default App;
