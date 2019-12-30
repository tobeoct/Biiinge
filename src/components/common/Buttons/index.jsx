import React from 'react';
export const Button=({type,text})=>{
    let className = "biiinge-button";
    if(type==='accent')
    {
        className+=" biiinge-button__accent";
    }
    return <button className={className} style={{marginRight:"30px"}}>{text}</button>
}