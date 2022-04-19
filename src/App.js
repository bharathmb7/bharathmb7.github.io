import React, { useRef, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/landing';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { Link , BrowserRouter as Router } from 'react-router-dom';

function App() {

  //const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const [Nav,setNav] = useState(false);

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

  const about = useRef(null);
  const work = useRef(null);
  const skills = useRef(null);
  const contact = useRef(null);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToAbout = () => window.scrollTo({ top: about.current.offsetTop, behavior: 'smooth' });
  const scrollToWork = () => window.scrollTo({ top: work.current.offsetTop, behavior: 'smooth' });
  const scrollToSkills = () => window.scrollTo({ top: skills.current.offsetTop, behavior: 'smooth' });
  const scrollToContact = () => window.scrollTo({ top: contact.current.offsetTop, behavior: 'smooth' });



  return (
      <Router>
          <div className="container">            
              {/* <Navbar /> */}

              <div className='navbar-container'>
            <nav className={Nav? 'navbar' : 'navbar-inactive'}>
                {/* <NavElement children='about' to='/about'/>
                <NavElement children='work' to='/work'/>
                <NavElement children='skills' to='/skills'/>
                <NavElement children='contact' to='/contact'/> */}
                <li className="nav-item">
                    <a  className="nav-link" activeClassName="active" onClick={scrollToAbout}>
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
                    </a>
                </li>
            </nav>
        </div>

              <a onClick={scrollToTop}>
                <img src="/logo.png" alt="" className='logo'/>
              </a>
              <Landing />            
          </div>

          <div ref={about} className="container1">
            <About/>
          </div>

          <div ref={work} className="container2">
            <Work/>
          </div>

          <div ref={skills} className="container3">
            <Skills/>
          </div>

          <div ref={contact} className="container4">
            <Contact/>
          </div>

      </Router>
  );
}

export default App;
