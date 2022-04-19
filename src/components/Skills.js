import React from 'react'; 
import './Skills.css';
import Tile from './Tile';

function Skills(){
    return(
        <div className="skills-container">
            <div className="skills-title">
                <h1>Skills</h1>
            </div>
            <div className="tiles">
                <Tile name='html' col='#8C331C'/>
                <Tile name='css' col='#152B7E' />
                <Tile name='javascript' col='#84701B' />
                <Tile name='react' col='#183942'/>
                <Tile name='java' col='#032944'/>
                <Tile name='wordpress' col='#103D51'/>
                <Tile name='cpp' col='#022D52'/>
                <Tile name='figma' col='#390202'/>
                <Tile name='photoshop' col='#0C4C7A'/>
                <Tile name='premiere' col='#454594'/>
            </div>
        </div>
    )
}

export default Skills;