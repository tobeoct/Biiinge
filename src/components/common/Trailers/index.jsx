import React from "react";
import trailer from "../../../assets/videos/mov.mp4";
export const Trailer=({className})=>{
  let name = className;
  if(name===undefined){
    name="explore-section5__movies explore-trailer__card";
  }else{
    name+= " explore-trailer__card";
  }
    return  <div className={name}>
    {/* <img src={trailer}/> */}
    <video controls>
  <source src={trailer} type="video/mp4"/>
  <source src={trailer} type="video/ogg"/>
  Your browser does not support HTML5 video.
</video>
     </div>
}