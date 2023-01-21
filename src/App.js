import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Important from "./component/Important"
import Shop from "./component/Shop"
import Home from "./component/Home"
import Navbar from "./component/Navbar"
import Loyalty from './component/Loyalty';
import About from './component/About';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/important' element={<Important/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/loyalty' element={<Loyalty/>}/>
        <Route path='/about' element={<About/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
