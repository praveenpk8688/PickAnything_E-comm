import './App.css';
import Navbar from './Components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Mobile from './Components/Mobile';
import Tv from './Components/Tv';
import Laptop from './Components/Laptop';
import Printer from './Components/Printer';
import Tablets from './Components/Tablets';
import Home from './Components/Home';



function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    <Route path='/Mobile' element={<Mobile/>}/>
    <Route path='/Tv' element={<Tv/>}/>
    <Route path='/Laptop' element={<Laptop/>}/>
    <Route path='/Tablets' element={<Tablets/>}/>
    <Route path='/Printer' element={<Printer/>}/>
    
    </Routes>
    
    </>
  );
}

export default App;
