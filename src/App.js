import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <NavBar />
      <Banner />
      <Skills />
      <TechStack />
      <Projects />
    </div>
  );
}

export default App;
