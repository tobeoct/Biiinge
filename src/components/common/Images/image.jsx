import React, { useState, useEffect } from 'react';
import { Overlay } from '../Overlay';
export const Image=({type,picture,height,overlayType})=>
{
    const [style,setStyle] =useState({
        width:"100%",
        height:"100%",
        objectFit:"cover"
    });
    const [myHeight,setMyHeight] =useState(height);
    useEffect(()=>{

        setMyHeight(height);
        if(type==="xs"){
        setStyle({
            width:"60px",
            height:"100vh",
            objectFit:"cover"
        });
        }
        if(type==="no-height" ){
            setStyle({
                width:"100%",
                objectFit:"cover"
            });
            }

            if( type==="height"){
                setStyle({
                    width:"100%",
                    height:myHeight,
                    objectFit:"cover"
                });
            }
    
    },[type,height]);
    // if(type!=="no-height"){
    return <React.Fragment><Overlay type={overlayType}></Overlay><img style={style} src={picture} /></React.Fragment> 
    // }
    // else{
    //     return <React.Fragment><img style={style} src={picture} /></React.Fragment> 
    // }
}