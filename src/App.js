

import './App.css';
import Navbar from './Components/Header/Navbar';
import {Routes } from 'react-router-dom';
import AutoPlay from './Components/Header/Slider';
import Colorcards from './Mainsection/Colorcards.jsx';
import BigDiscounts from './Mainsection/BigDiscounts.jsx';
// import NewArrivels from './Mainsection/NewArrivels.jsx';







function App() {

  return (
    <div className="App" id='App'>
    
    <Navbar/>
    
    <AutoPlay/>
    <Colorcards/>
    <BigDiscounts/>
    


   
    <Routes>
      {/* <Route path='/' element={<Home/>}/> */}
   
    
    </Routes>
    
    </div>
  );
}

export default App;
