
import './App.css';
import Navbar from './Components/Header/Navbar';
import {Routes } from 'react-router-dom';
import AutoPlay from './Components/Header/Slider';
import Colorcards from './Components/Mainsection/Colorcards.jsx';
import BigDiscounts from './Components/Mainsection/BigDiscounts.jsx';
import NewArrivels from './Components/Mainsection/NewArrivels.jsx';
// import RandomProductPicker from './Mainsection/random.jsx';
// import RandomProduct from './Mainsection/random.jsx';
import Bestsales from './Components/Mainsection/Bestsales.jsx';
import Footer from './Components/Footer/Footer.jsx';



function App() {

  return (
    <div className="App" id='App'>
    
    <Navbar/>
    <AutoPlay/>
    <Colorcards/>
    <BigDiscounts/>
    <NewArrivels/>
    <Bestsales/>
    <Footer/>
   
    


   
    <Routes>
      {/* <Route path='/' element={<Home/>}/> */}
   
    
    </Routes>
    
    </div>
  );
}

export default App;
