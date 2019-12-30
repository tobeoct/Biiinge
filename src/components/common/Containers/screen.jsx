import React, { useState, useEffect } from 'react';
export const Screen=({children,type, className,isSection})=>
{
    const [style,setStyle] =useState({
        width:"100%",
        height:"100vh",
        background:"#111111",
        top:0,
        bottom:0
    });
  
    useEffect(()=>{
        if(type==="xs"){
        setStyle({
            width:"60px",
            height:"100vh",
            background:"#111111",
            opacity:"0.8",
            zIndex:5,
            position:"fixed",
            top:0,
            bottom:0
        });
        }
    
    },[type]);
    if(isSection){
    return <section style={style} id={className}>
        {children}
    </section >
    }else{
        return <div style={style} id={className}>
        {children}
    </div >
    }
}