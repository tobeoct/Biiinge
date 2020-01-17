import React from "react";
import trailer from "../../../assets/videos/mov.mp4";
import lotr from "../../../assets/videos/lotr.mp4";
import ScrollAnimation from "react-animate-on-scroll";
export const Trailer=({className,type})=>{
  let name = className;
  if(name===undefined){
    name="explore-section5__movies explore-trailer__card";
  }else{
    name+= " explore-trailer__card";
  }
    return   <ScrollAnimation animateIn="fadeIn"  isVisible={true} offset={80}><div className={name}>
    {/* <img src={trailer}/> */}
    <video controls>
  <source src={type==="lotr"?lotr:trailer} type="video/mp4"/>
  <source src={type==="lotr"?lotr:trailer} type="video/ogg"/>
  Your browser does not support HTML5 video.
</video>
<div className="explore-trailer__card__details">
<div className="pull-left"><p>YOU S02 E01</p></div>
<div className="pull-right"><p>[TRAILER]</p></div>
</div>
     </div>
     </ScrollAnimation>
}