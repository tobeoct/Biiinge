import React from 'react';
import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';
import picture from '../../../assets/images/section1-bg.png';
import '../../Explore/explore.scss';
import '../title.scss';
import { Trailer } from '../../../components/common/Trailers';
import data from '../../../datasource/movies.json';
import VideoPlayer from '../../../components/VideoPlayer';
import video from '../../../assets/videos/mov.mp4';
export const SectionDetails=()=>{
   
    return <React.Fragment >
      <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut" offset={0} isVisible={true}>
  
    <Trailer className={"title-section1"} type={"lotr"} ></Trailer >
    {/* <VideoPlayer src={video}/> */}
    <div className="scrolling-wrapper" style={{opacity:0.4}}>
      {data.payload.map(item=>{
        return <div style={{width:"100px",height:"150px", display:"inline-block"}}><img src={require(`../../../assets/images/${item.imageUrl}`)}/></div>
      })}
      {data.payload.map(item=>{
        return <div style={{width:"100px",height:"150px", display:"inline-block"}}><img src={require(`../../../assets/images/${item.imageUrl}`)}/></div>
      })}
      
    </div>
    </ScrollAnimation>
</React.Fragment>
}