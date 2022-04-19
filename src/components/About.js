import React from 'react';
import './About.css';

function About() {
    return(
        <div className="about-container">
            <div className='white-keeb-container'>
                <img src="white_keeb.png" className="white-keeb" />
            </div>
            <div className="about">
                <h3>about</h3>
                <p>If I could describe myself in a sentence, that would be <b>'open to learning'</b>.  I am an undergrad student studying computer science. I am well versed in front-end web development. And now I am fairly intrigued by blockchain technology and I believe it’s the next big thing. I wish to learn more about it and advance to web3.</p>
            </div>
        </div>
    )
}

export default About;