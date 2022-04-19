import React from 'react';
import WorkElement from './WorkElement';
import './Work.css';
import { useState } from 'react';

function Work(){

    const workData = [
        {
            "title": "Web Development Intern",
            "name": 'logyify',
            "date" : 'oct 21',
            "duration" : '5 mos',
            "icon": "./angles.png",
            "subTitle": "Logyify India",
            "content": "Currently working with a team to create a website for the firm. Which involves and appointment booking system. My tasks involve designing the UI using Figma and coding the frontend using React.js, and integrating it with the wordpress CMS and building necessary plugins for wordpress."
        },
        {
            "title": "Team member",
            "name": 'quatlas',
            "date" : 'jan 21',
            "duration" : '1 yr 3 mos',
            "icon": "./plane.png",
            "subTitle": "Quatlas Aeromodelling",
            "content": "Involved in design, development, and manufacture of small-scale RC cargo aircraft from scratch."
        },
        {
            "title": "Bacelor of Engineering ",
            "name": 'be',
            "date" : 'jan 21',
            "duration" : '2nd year',
            "icon": "./books.png",
            "subTitle": "Computer Science",
            "content": "Ramaiah Institute of Technology"
        }
    ]
    
    return(
        <div className="works-container">
            <div className="work-text">
                <h1>work</h1>
                <h5>and</h5>
                <h1>edu</h1>
            </div>
        <div className="work-container">

            {
                workData.map((data,key) => {
                    return(
                        <WorkElement title={data.title} subTitle={data.subTitle} content={data.content} pic={data.icon} date={data.date} duration={data.duration} name={data.name}/>
                    )
                })
            }

        </div>
        </div>
    )
}

export default Work;