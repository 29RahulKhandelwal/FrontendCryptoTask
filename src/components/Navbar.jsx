import React from 'react'
import Symbol from "../assets/symbol.svg"
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-white nav">
            <div class="container-fluid  navStyle">
                <a class="navbar-brand mb-0" href="#"><img className='brandSymbol' src={Symbol} alt="" /> <span className='brandName'>Crypto Tracker</span></a>
                <span>
                <i class="fa-solid fa-magnifying-glass fa-lg icons"></i>
                <i class="fa-solid fa-bars fa-lg icons"></i>
                </span>
            </div>
        </nav>
    )
}

export default Navbar