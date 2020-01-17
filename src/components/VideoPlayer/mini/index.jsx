import React, { useState } from 'react';
import { Trailer } from '../../common/Trailers';
import trailer from "../../../assets/videos/mov.mp4";
import lotr from "../../../assets/videos/lotr.mp4";
export const BackgroundVideo=()=>{
    let [myStyle,setMyStyle] = useState({
        display:"block"
    });
   
    const onDisplay=()=>{
        setMyStyle({
            display:"none"
        });
        var x = document.getElementById("myVideo");
        x.pause();
    }
    return <div className="biiinge-trailer__mini" style={myStyle}>
        <div className="explore-trailer__card">
    
    <video autoPlay controls id="myVideo">
  <source src={trailer} type="video/mp4"/>
  <source src={trailer} type="video/ogg"/>
  Your browser does not support HTML5 video.
</video>
<div className="explore-trailer__card__actions">
<div onClick={onDisplay}><p>X</p></div>
</div>
<div className="explore-trailer__card__details">
<div className="pull-left"><p>YOU S02 E01</p></div>
<div className="pull-right"><p>[TRAILER]</p></div>
</div>
     </div>
    </div>
}