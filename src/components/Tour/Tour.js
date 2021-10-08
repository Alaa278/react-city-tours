import React, { Component, useState } from 'react'
import "./Tour.css"

const Tour = ({tour, remveTour}) => {
    const [ShowInfo, setShowInfo] = useState(false);
    const handelInfo=()=>{
        setShowInfo(!ShowInfo) ;
    };
        const { name, img, city, info, id } = tour;
        return (
            <article className='tour'>
                <div className='img-container'>
                    <img src={img} />
                    <button className='close-btn' onClick={() => {remveTour(id)}}>X</button>
                </div>
                <div className='tour-info'>
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>info {""} <button onClick={handelInfo}>Click Here</button> </h5>
                    {ShowInfo && <p>{info}</p>} 
                </div>

            </article>
        )
   
}



export default Tour
