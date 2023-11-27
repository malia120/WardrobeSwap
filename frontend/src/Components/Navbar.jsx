import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa"
import { Link } from "react-router-dom";
import "../Style/App.css";


export function Navbar() {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return(
        <header> 
            <img src={require('../Assets/logo.png')} alt="Logo" className="logo"></img>
            <nav ref={navRef}>
                <Link to="/women">Women</Link>
                <Link to="/men">Men</Link>
                <Link to="/children">Children</Link>
                <Link to="/about-us">About us</Link>
                <Link to="/this-platform">This platform</Link>
                <button className="nav-button nav-close-button" onClick={showNavBar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-button" onClick={showNavBar}>
                <FaBars/>
            </button>
        </header>
    );

}

export default Navbar;