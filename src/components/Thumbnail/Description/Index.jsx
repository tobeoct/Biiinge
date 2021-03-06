import React from 'react';
import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';
import star from '../../../assets/icons/star.svg';
import { SVG } from '../../common/Images/svg';
import { Button } from '../../common/Buttons';
export const  ThumbnailDescription=()=>{
    return <div id="explore-section1__description">
            <Animated animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
  
        <div className="explore-section1__ratings d-flex">
<span><SVG vector={star}></SVG></span><span>8.5 </span><span style={{marginLeft:"10px",opacity:0.7}}>  ACTION  |  ADVENTURE</span>
        </div>
        </Animated>
        <div style={{maxWidth:"600px"}}>
        <Animated animationIn="slideInLeft" animationOut="slideOutLeft" isVisible={true}>

        <h1>Star Wars </h1> 
<h2>The Rise Of Skywalker </h2>
<h5>The surviving Resistance faces the First Order once more as Rey, Finn and Poe Dameron's journey continues. With the power and knowledge of generations behind them, the final battle commences.</h5>
</Animated>
<Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>

<div className="d-flex"  id="explore-section1__thumbnail-actions"><Button text={"Watch Now"} url={"title"}></Button><Button text={"Add To List"} type={"accent"} url={"title"}></Button></div>
</Animated>
<Animated animationIn="fadeInUp" animationOut="fadeInDown" isVisible={true}>
<div className=" d-flex" style={{margin:"20px auto"}}>
<span style={{opacity:0.7, marginRight:"5px"}}>Duration : </span><span style={{marginRight:"10px"}}> 1hr 30mins   </span><span>|  </span><span style={{marginLeft:"10px",opacity:0.7}}>   Available in</span>
        </div>
        </Animated>
</div>
    </div>
}