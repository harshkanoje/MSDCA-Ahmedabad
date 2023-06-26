
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

function App() {
  return (
    <div className="App">
    <Navbar/>
     <Header/>
     <About/>
     <Features/>
     <Facilities/>
     <Centers/>
     <Reviews/>
     <Members/>
     <Images/>
     <Contact/>
     
    </div>
  );
}

export default App;
