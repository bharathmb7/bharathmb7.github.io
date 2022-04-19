import React from 'react';
import './WorkElement.css';

function WorkElement(props){
    return(
        <div className="big-container"  id={props.name}>
            <div className="work-ele-container">
                <h3> <img src={props.pic}/> {props.title}</h3>
                <h4>{props.subTitle}</h4>
                <p>{props.content}</p>
            </div>
            <div className="date-container">
                <h1>{props.date}-present</h1>
                <h1>({props.duration})</h1>
            </div>
        </div>
    )
}

export default WorkElement;
