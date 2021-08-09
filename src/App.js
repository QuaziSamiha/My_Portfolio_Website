import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import Particles from './components/Particles/Particles';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
      {/* <Particles /> */}
    </div>
  );
}

export default App;
