import React, { useState, useEffect } from 'react';
import { Overlay } from '../Overlay';
export const Image=({type,picture,height,overlayType})=>
{
    const [style,setStyle] =useState();
    const [myHeight,setMyHeight] =useState(height);
    useEffect(()=>{

        setMyHeight(height);
        if(type==="xs"){
        setStyle({
            width:"60px",
            height:"100vh"
        });
        }
        // if(type==="no-height" ){
        //     setStyle({
        //         width:"100%",
        //         objectFit:"cover"
        //     });
        //     }

            if( type==="height"){
                setStyle({
                    height:myHeight
                });
            }

            if( type==="rounded"){
                setStyle({
                    width:myHeight,
                    height:myHeight,
                    objectFit:"cover",
                    borderRadius:myHeight,
                    position:"relative",
                    zIndex:"2",
                    border:"2px solid #333333"
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