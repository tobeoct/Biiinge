import React, { useState, useEffect } from 'react';
export const Overlay=({type})=>{
    let [myBG, setMyBG] = useState("linear-gradient(180deg, rgba(34, 34, 34, 0) -37.05%, #121212 100%)"); 
    let [myOpacity, setMyOpacity] = useState(0.4);
    useEffect(()=>{
        if(type==="radial")
        {
           setMyBG("radial-gradient(50% 50% at 50% 50%, rgba(51, 51, 51, 0) 0%, rgba(0, 0, 0, 1) 100%)");
           setMyOpacity(0.7);
        }
        else if(type==="none"){
            setMyBG("transparent");
        }
        else if(type==="login"){
            setMyBG("radial-gradient(50% 50% at 50% 50%, rgba(17, 17, 17, 0.76) 0%, #111111 100%)");
            setMyOpacity(0.95);
        }
        else{
            setMyBG("linear-gradient(180deg, rgba(34, 34, 34, 0) -37.05%, #0d0d0d 100%)");
        }
    },[type])
   
    const style = {
        width:"100%",
        height:"100%",
        position:"absolute",
        zIndex:1,
        background: myBG,
        opacity:myOpacity
    }
    return  <div id="biiinge-image__overlay" style={style}></div>
}