import './App.css';
import Navbar from './Components/Header/Navbar';
import { Route,Routes } from 'react-router-dom';
import AutoPlay from './Components/Header/Slider';
// import Mobile from './Components/Mobile';
// import Tv from './Components/Tv';
// import Laptop from './Components/Laptop';
// import Printer from './Components/Printer';
// import Tablets from './Components/Tablets';
// import Home from './Components/Home-E-comm';



function App() {

  return (
    <>
    <Navbar/>
    <AutoPlay/>
   
    <Routes>
      {/* <Route path='/' element={<Home/>}/> */}
   
    
    </Routes>
    
    </>
  );
}

export default App;
