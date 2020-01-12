import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export const Button=({type,text,cName})=>{
    let myClass = cName===undefined?"":cName;
    let className = "biiinge-button "+myClass;
    let linkClassName = "";
    if(type==='accent')
    {
        className+=" biiinge-button__accent";
        linkClassName="color-white";
    }
    if(type==='rounded')
    {
        className+=" biiinge-button__rounded";
    }
    if(type==='small')
    {
        className+=" biiinge-button__small";
        linkClassName="color-black";
    }
    return <Link className={linkClassName} to={'/title'} ><button className={className} style={{marginRight:"30px"}}>{text}</button></Link>
}