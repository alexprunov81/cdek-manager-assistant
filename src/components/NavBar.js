import React from 'react';

const NavBar = () => {
    return (
        <nav className="white" role="navigation">
            <div className="nav-wrapper container">
                <a id="logo-container" style={{color: "#4db6ac", fontWeight: 600}}  className="brand-logo">CDEK</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li className="active"><a style={{color: "#4db6ac", fontWeight: 500}} href="#">Фильтр накладных консолидации</a></li>
                    <li><a style={{color: "#4db6ac", fontWeight: 500}} href="#">Инвентаризация</a></li>
                    <li><a style={{color: "#4db6ac", fontWeight: 500}} href="#">Справка</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar