import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import Home from './views/Home';
import Tell from './components/Tell/Tell';
import Cars from './components/Cars/Cars';
import Booking from './components/Booking/Booking';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
    <Navbar/>
    </div>
    <Routes>
      <Route exact path="/"  element={<Home/>}/>
      <Route path="/cars" element={<Cars/>}/>
      <Route path="/bookings" element={<Booking/>}/>
      <Route path="/contact" element={<Tell/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
