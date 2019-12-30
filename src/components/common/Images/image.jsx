import React, { useState, useEffect } from 'react';
import { Overlay } from '../Overlay';
export const Image=({type,picture})=>
{
    const [style,setStyle] =useState({
        width:"100%",
        height:"100%",
        objectFit:"cover"
    });
  
    useEffect(()=>{
        if(type==="xs"){
        setStyle({
            width:"60px",
            height:"100vh",
            objectFit:"cover"
        });
        }
        if(type==="no-height"){
            setStyle({
                width:"100%",
                height:"auto",
                objectFit:"cover"
            });
            }
    
    },[type]);
    return <React.Fragment><Overlay></Overlay><img style={style} src={picture} /></React.Fragment> 
    
}