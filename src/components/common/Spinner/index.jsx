import React from 'react';
import biiinge from '../../../assets/images/eye-catcher-biiinge.png';
import spinner from '../../../assets/images/spinner.svg';
export const Spinner=()=>{
    return <div className="spinner" style={{width: "100vw", height: "100vh", position: "fixed", top:0,left:0, background:"#111111", zIndex: 99, display: "flex",justifyContent: "center",justifyItems: "center",alignItems: "center"}}>
    <div style={{width:"800px"}}>
        <img src={biiinge} />
        <div style={{width:"80px", margin:"auto"}}>
        <img src={spinner} />
    </div>
    </div>
    
  </div>
}