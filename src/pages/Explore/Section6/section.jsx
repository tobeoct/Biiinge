import React, { useEffect, useContext, useState } from 'react';
import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';
import {withSettings} from '../../../components/common/Images';
import {withContainer} from '../../../components/common/Containers';
import eyeCatcher from '../../../assets/images/eye-catcher-biiinge.svg';
import jeopardy from '../../../assets/images/jeopardy.jpg';
import impact from '../../../assets/images/impact.jpeg';
import '../explore.scss';
import { Header } from '../common/Headers/header';
import { Cards } from '../common/Card';
 import data from "../../../datasource/schedules.json";
import ThemeContext from '../../../contexts/theme-context';
import {WITHCONTAINERPAYLOAD} from '../../../variables/payloads';
import {Teaser} from '../../../components/common/Images/teaser';
export const SectionDetails=({type=""})=>{
  let [withContainerPayload, setWithContainerPayload] = useState(WITHCONTAINERPAYLOAD);
  
 let [myOpacity,setMyOpacity]=useState(1);
  let {display}=useContext(ThemeContext);

  useEffect(()=>{
    if(display===true){
      setMyOpacity(1);    }else{
        setMyOpacity(0);
      }
  },[display])
  const obj = withContainerPayload;
  obj.type="no-height";
  obj.className="explore-section6__schedules__container scrolling-wrapper";
  obj.id="";
  obj.isSection= false;
  obj.height=undefined;
  const CardsSection = withContainer(
    Cards,obj
  );
    return <React.Fragment >
       <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" isVisible={true}>
     <Teaser className={"explore-section6__teaser"} image={eyeCatcher}></Teaser>
    </ScrollAnimation>
    <Header text={"TV Schedules For Wednesday, January 1st"}></Header>
     <CardsSection payload={data.payload} type={"card-6"}  opacity={myOpacity}   ></CardsSection>

     {/* <div className="explore-section6__schedules__container" >
  <div className="explore-section6__schedules__row scrolling-wrapper">
      
    <div className="explore-section6__schedules__card" ><img src={impact} style={{objectFit:"cover"}}/></div>
    <div className="explore-section6__schedules__card" ><img src={jeopardy} style={{objectFit:"cover"}}/></div>
    <div className="explore-section6__schedules__card" ><img src={eyeCatcher} style={{objectFit:"cover"}}/></div>
    <div className="explore-section6__schedules__card" ><img src={eyeCatcher} style={{objectFit:"cover"}}/></div>
    <div className="explore-section6__schedules__card" ><img src={eyeCatcher} style={{objectFit:"cover"}}/></div>
    <div className="explore-section6__schedules__card" ><img src={eyeCatcher} style={{objectFit:"cover"}}/></div>
    <div className="explore-section6__schedules__card" ><img src={eyeCatcher} style={{objectFit:"cover"}}/></div>
    <div className="explore-section6__schedules__card" ><img src={eyeCatcher} style={{objectFit:"cover"}}/></div>
  </div>
  </div> */}
</React.Fragment>
}

//,display:"none"