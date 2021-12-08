import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Benefits from './components/Benefits/Benefits';
import Cards from './components/Cards/Cards';
import Process from './components/Process/Process';
import CarDetail from './components/CarDetail.js/CarDetail';
import Carousels from './components/Carousel/Carousels';
import More from './components/More/More';
import Image from './components/Parallax/Image';
import Customer from './components/Customers/Customer';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <div className="App">
      <Header/>
      <Benefits/>
      <Cards/>
      <Process/>
      <CarDetail/>
      <Carousels/>
      <More/>
      <Image/>
      <Customer/>
      
      </div>
    </BrowserRouter>
    
  );
}

export default App;
