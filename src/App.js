
import './App.css';
import About from './Components/About';
import Centers from './Components/Centers';
import Facilities from './Components/Facilities';
import Features from './Components/Features';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Reviews from './Components/Reviews';
import Members from './Components/Members';

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
     
    </div>
  );
}

export default App;
