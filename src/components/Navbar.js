import React from 'react';
import './Navbar.css';
// import NavElement from './NavElement';
import { useState, useRef } from 'react';


function Navbar(){

    const [Nav,setNav] = useState(false);

    // const handleNav = () => {
    //     setNav(!Nav);
    // }

    // handleNav when scrolled up
    var prevScrollpos = window.pageYOffset;

    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            setNav(true);
        } else {
            setNav(false);
        }
        prevScrollpos = currentScrollPos;
    };

    // var prevScrollpos = window.pageYOffset;

    // window.onscroll = function() {
    //     var currentScrollPos = window.pageYOffset;
    //         if (prevScrollpos > currentScrollPos) {
    //             document.getElementById("navbar").style.top = "0";
    //         } else {
    //             document.getElementById("navbar").style.top = "-100px";
    //         }
    //     prevScrollpos = currentScrollPos;
    // }





    return (
        <div className='navbar-container'>
            <nav className={Nav? 'navbar' : 'navbar-inactive'}>
                {/* <NavElement children='about' to='/about'/>
                <NavElement children='work' to='/work'/>
                <NavElement children='skills' to='/skills'/>
                <NavElement children='contact' to='/contact'/> */}
                <li className="nav-item">
                    {/* <a  className="nav-link" activeClassName="active" onClick={scrollToAbout}>
                        about
                    </a>
                    <a  className="nav-link" activeClassName="active" onClick={scrollToWork}>
                        work
                    </a>
                    <a  className="nav-link" activeClassName="active" onClick={scrollToSkills}>
                        skills
                    </a>
                    <a  className="nav-link" activeClassName="active" onClick={scrollToContact}>
                        contact
                    </a> */}
                </li>
            </nav>
        </div>
    );

    
}

export default Navbar;