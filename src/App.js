import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer'; // Import Footer
import { PaperPlane } from './components/PaperPlane';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <PaperPlane />
      <NavBar />
      <Banner />
      <Skills />
      <Experience />
      <Certifications />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;