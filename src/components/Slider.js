import React from 'react';





export default function Myslide(props){
    return(
        <div className="slider">
            <div className="objects">
                <img src={`../public/images/${props.img}`} alt="logo " className="pics"  />


                    <div className="details">
                        <i class="fa-solid fa-star"></i>
                        <span>{props.rating}</span>
                        <span>{props.review} • </span>
                        <span >{props.country}</span>
                    </div>
                <p>{props.title}</p>
                <p>From {props.price} per person</p>
        

              
            </div>
           
           
            
        </div>
    )
}