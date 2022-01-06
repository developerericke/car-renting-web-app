import React,{useState} from 'react'
import './Navbar.css'
import Button from './Button'
import NavPic from './nav.png'
import {HashLink as Link} from 'react-router-hash-link';

const Navbar = () => {
    const [click,setClick] = useState(false);

    const handleClick =()=>{
        setClick(!click);
    }
    const closeMenu =() => {setClick(false)}
    return (
        <>
            <nav className="navbar">
            <div className="listItem">
                    <img className="tech" src={NavPic} alt="img"/>
                </div>
                <h1 className="navbar-logo">CarHire</h1>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <li className='nav-itemx'>
                        <Link to='/' className="nav-links" 
                        onClick={closeMenu}>Home</Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/upload' className="nav-links" 
                        onClick={closeMenu}>Uploads </Link>
                        
                    </li>
                    <li className='nav-item'>
                        <Link smooth to='#about' className="nav-links" 
                        onClick={closeMenu}>About </Link>
                    </li>
                    <li className='nav-item'>
                        <Link smoooth to='#book' className="nav-links" 
                        onClick={closeMenu}>Book </Link>
                        
                    </li>
                    <li className='nav-item'>
                        <Link smoooth to='/bookings' className="nav-links" 
                        onClick={closeMenu}>MyBookings </Link>
                        
                    </li>
                    <button className='nav-itemb'>
                        <Link to='/contact' className="nav-links" 
                        onClick={closeMenu}>Contacts</Link>
                    </button>
                    <li className='nav-item'>
                    <Button/>
                    </li>
                    
                </ul>
            </nav>
        </>
    )
}

export default Navbar
