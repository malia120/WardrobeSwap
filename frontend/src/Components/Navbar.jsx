import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa"
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import "../Style/App.css";

/**
 * Component showing the navigation bar of the website.
 * Uses React imports for useRef for accessing the navigation aspects 
 * to toggle its responsiveness.
 *
 * @returns  navigation bar components.
 */


export function Navbar() {
    // useRef to access the navigation element

    const navRef = useRef();

     /**
     * Toggles the responsiveness of the navigation bar by adding or removing the "responsive_nav" class.
     * 
     * @function
     */

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return(
        <header> 
            <Link to= "/"><img src={require('../Assets/logo.png')} alt="Logo" className="logo"></img></Link>
            <nav ref={navRef}>
                <Link to="/women">Women</Link>
                <Link to="/men">Men</Link>
                <Link to="/children">Children</Link>
                <Link to="/about-us">About us</Link>
                <Link to="/this-platform">This platform</Link>
                </nav>
                <div className="auth-buttons">
                    <Link to="/login" className="auth-button">Login</Link>
                    <Link to="/cart" className="auth-button cart-button"><FaCartShopping /></Link>
                </div>
                <button className="nav-button nav-close-button" onClick={showNavBar}>
                    <FaTimes/>
                </button>
            <button className="nav-button" onClick={showNavBar}>
                <FaBars/>
            </button>
        </header>
    );

}

export default Navbar;