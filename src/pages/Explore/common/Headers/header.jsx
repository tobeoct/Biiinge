import React, { useState, useEffect } from 'react';
export const Header =({text, style, type})=>{
    let [myStyle,setMystyle] = useState(style);
    useEffect(()=>{
        if(style===undefined)
        {
            setMystyle({});
        }else{
            setMystyle(style);
        }
    },[style]) 
  
    return <div id="explore-sections__titlebar" className="row" style={myStyle}>
        <div className="pull-left" style={{width:"90%"}}>
{type!=="small"?<h1>{text}</h1>:<h3>{text}</h3>}
</div>
<div className="d-flex d-flex-right pull-right" style={{width:"10%"}}>
    <div className="explore-sections__titlebar__togglebar"></div>
    <div className="explore-sections__titlebar__togglebar"></div>
</div>
    </div>
   
}