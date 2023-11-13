import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa"
import "../Style/App.css";

export function Navbar() {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return(
        <header> 
            <h3>Logo</h3>
            <nav ref={navRef}>
                <a href="/#">Women</a>
                <a href="/#">Men</a>
                <a href="/#">Children</a>
                <a href="/#">About us</a>
                <a href="/#">This platform</a>
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