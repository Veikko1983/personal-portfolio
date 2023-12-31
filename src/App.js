//import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { WorkExperience } from "./components/WorkExperience";
import { Education } from "./components/Education";
import "bootstrap/dist/css/bootstrap.min.css";
import { Languages } from "./components/Languages";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Education />
      <WorkExperience />
      <Skills />
      <Projects />
      <Languages />
      <Footer />
    </div>
  );
}
export default App;
