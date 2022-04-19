import React from 'react'; 
import './Tile.css';

function Tile(props){
    return(
        <div className="tile-container">
            <div className="tile" id={props.name} style={{backgroundColor:props.col}}>
                <img src={"/"+props.name+".png"} />
                <div className='film'>
                <p className='nam' >{props.name}</p>
                </div>
            </div>
        </div>
        // <div className="tile" style={{backgroundColor:props.col}}>
        //     <img src={props.src} />
        // </div>

    
    )
}

export default Tile;