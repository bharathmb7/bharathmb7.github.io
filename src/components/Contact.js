import React from 'react'
import './Contact.css'
// import { a , BrowserRouter as Router } from 'react-router-dom';


function Contact() {
    return (
        <div className="contact-container">
            <h1>contact me</h1>
            <div className="link-container">
                <a href=""></a>
                <a href='https://www.linkedin.com/in/bharathmb/' target="_blank"><button id='linkedin'>
                        <img src="/linkedin.png" alt="" /><p>linkedin</p>
                    </button></a>
                <a href='mailto:bmb583219@gmail.com' target="_blank"><button id='mail'>
                        <img src="/mail.png" alt="" /><p>mail</p>
                    </button></a>
                <a href='https://github.com/bharathmb7' target="_blank"><button id='github'>
                        <img src="/github.png" alt="" /><p>github</p>
                    </button></a>
                <a href='https://leetcode.com/bharathmb/' target="_blank"><button id='leetcode'>
                        <img src="/leetcode.png" alt="" /><p>leetcode</p>
                    </button></a>
            </div>
            <img src="/rgb.png" className='rgb' alt="" />
        </div>
    )
}

export default Contact
