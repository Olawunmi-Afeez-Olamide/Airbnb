import React from 'react';
import grid from './grid1.png'
export default function Hero(){
    return(
        <div className="myGrid">
            <img src={grid} alt="logo " className="grid" />
            <div className="text-container">
                <h4 className="text-header">Online Experiences</h4>
                <p className="notes">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
            </div>
        </div>

    )
}