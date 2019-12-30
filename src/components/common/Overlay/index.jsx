import React from 'react';
export const Overlay=()=>{
    const style = {
        width:"100%",
        height:"100%",
        position:"absolute",
        zIndex:1,
        background: "radial-gradient(50% 50% at 50% 50%, rgba(51, 51, 51, 0) 0%, rgba(0, 0, 0, 0.7) 100%)"
    }
    return  <div id="biiinge-image__overlay" style={style}></div>
}