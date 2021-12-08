import React,{useState} from 'react'
import './Navbar.css'
import Button from './Button'
import {Link} from 'react-router-dom'

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
                    <img className="tech" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRlY2hub2xvZ3klMjBvZmZpY2V8ZW58MHx8MHx8&w=1000&q=80" alt="img"/>
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
                        <Link to='/services' className="nav-links" 
                        onClick={closeMenu}>Services </Link>
                        
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className="nav-links" 
                        onClick={closeMenu}>About </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/company' className="nav-links" 
                        onClick={closeMenu}>Company </Link>
                        
                    </li>
                    <li className='nav-item'>
                        <Link to='/media' className="nav-links" 
                        onClick={closeMenu}>Media </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contacts' className="nav-links" 
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
