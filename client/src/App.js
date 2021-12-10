import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Benefits from './components/Benefits/Benefits';
import Head from './components/About/Head';
import Cards from './components/Cards/Cards';
import Process from './components/Process/Process';
import CarDetail from './components/CarDetail.js/CarDetail';
import Carousels from './components/Carousel/Carousels';
import More from './components/More/More';
import Image from './components/Parallax/Image';
import Customer from './components/Customers/Customer';
import DutyMen from './components/CustomerService/DutyMen';
import Message1 from './components/Message1/Message1';
import Message from './components/Message/Message';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import FirstPage from './components/FirstPage/FirstPage'


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <div className="App">
      <FirstPage/>
      <Header/>
      <Head/>
      <About/>
      <Benefits/>
      <Cards/>
      <Process/>
      <CarDetail/>
      <Carousels/>
      <More/>
      <Image/>
      <Customer/>
      <Message1/>
      <Message/>
      <Contact/>  
      <Footer/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
