import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { TechStack } from './components/TechStack';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer'; // Import Footer
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <TechStack />
      <Experience />
      <Certifications />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;