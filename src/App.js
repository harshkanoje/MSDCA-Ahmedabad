
import './App.css';
import About from './Components/About';
import Centers from './Components/Centers';
import Facilities from './Components/Facilities';
import Features from './Components/Features';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Reviews from './Components/Reviews';
import Members from './Components/Members';
import Images from './Components/Images';
import Contact from './Components/Contact';
import Why from './Components/Why';
import Achievement from './Components/Achievement';
import Concept from './Components/Concept';
import Ambassadors from './Components/Ambassadors';

function App() {
  return (
    <div className="App">
    <Navbar/>
     <Header/>
     <About/>
     <Features/>
     <Facilities/>
     <Achievement/>
     <br/>
     <Centers/>
     <Why/>
     <br/>
     <Concept/>
     <br/>
     <Reviews/>
     <br/>
     <Members/>
     <Images/>
     <Ambassadors/>
     <Contact/>
     
    </div>
  );
}

export default App;
