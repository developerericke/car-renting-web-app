import React,{useState} from 'react'
import './Navbar.css'
import Button from './Button'
import {Link} from 'react-router-dom'
import NavPic from './nav.png'

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
                <Link to="/" className="navbar-logo">CarHire</Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                    <li className='nav-item'>
                        <Link to='/' className="nav-links" 
                        onClick={closeMenu}>Home</Link>
                    </li>

                    <li className='nav-item' >
                        <Link to='/cars' className="nav-links" 
                        onClick={closeMenu}>Cars </Link>
                        
                    </li>
                    <li className='nav-item'>
                        <a href='#about' className="nav-links" 
                        onClick={closeMenu}>About </a>
                    </li>
                    <li className='nav-item'>
                        <Link to='/bookings' className="nav-links" 
                        onClick={closeMenu}>MyBookings </Link>
                        
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className="nav-links" 
                        onClick={closeMenu}>Contacts</Link>
                    </li>
                    <li className='nav-item'>
                    <Button/>
                    </li>
                    
                </ul>
            </nav>
        </>
    )
}

export default Navbar
