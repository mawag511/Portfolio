import './App.css';
import { NavBar } from './components/NavBar.js';
import { Banner } from './components/Banner.js';
import { AboutMe } from './components/AboutMe.js';
import { Work } from './components/Work.js';
import { Contacts } from './components/Contacts.js';
import { Footer } from './components/Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutMe />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
