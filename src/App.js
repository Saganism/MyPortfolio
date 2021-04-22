import './App.css'
import Navbar from './components/Navbar'
import HeaderPhoto from './components/HeaderPhoto'
import MyProjects from './components/MyProjects'
import CodingExperience from './components/CodingExperience'
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeaderPhoto />
      <MyProjects />
      <CodingExperience />
      <Contact />
    </div>
  );
}

export default App;
