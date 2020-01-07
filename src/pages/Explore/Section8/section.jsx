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
 import data from "../../../datasource/kidstv.json";
import ThemeContext from '../../../contexts/theme-context';
import {WITHCONTAINERPAYLOAD} from '../../../variables/payloads';
import trailer from "../../../assets/videos/mov.mp4";
import { Trailer } from '../../../components/common/Trailers';
import { Filters } from '../common/Filters';
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
  obj.className="explore-section8__kidstv__container ";
  obj.id="";
  obj.isSection= false;
  obj.height=undefined;
  const Image = withSettings(
    "no-height","explore-section8__teaser",eyeCatcher
  );
  const CardsSection = withContainer(
    Cards,obj
  );
    return <React.Fragment >
    {/* <Image></Image> */}
    <Header text={"Kids TV"} style={{ borderColor: "rgba(225, 225, 225,0.99)",background:"#409DE0"}}></Header>
    <Filters style={{background:"#409DE0"}}></Filters>
     <CardsSection payload={data.payload} type={"card"}  opacity={myOpacity}   ></CardsSection>
<Trailer className={"explore-section8__kidstv"}></Trailer>
<CardsSection payload={data.payload} type={"card"}  opacity={myOpacity}   ></CardsSection>

     {/* <div className="explore-section8__tvshows__container" >
  <div className="explore-section8__tvshows__row scrolling-wrapper">
      
    <div className="explore-section8__tvshows__card" ><img src={impact} style={{objectFit:"cover"}}/></div>
    <div className="explore-section8__tvshows__card" ><img src={jeopardy} style={{objectFit:"cover"}}/></div>
    <div className="explore-section8__tvshows__card" ><img src={eyeCatcher} style={{objectFit:"cover"}}/></div>
    <div className="explore-section8__tvshows__card" ><img src={eyeCatcher} style={{objectFit:"cover"}}/></div>
    <div className="explore-section8__tvshows__card" ><img src={eyeCatcher} style={{objectFit:"cover"}}/></div>
    <div className="explore-section8__tvshows__card" ><img src={eyeCatcher} style={{objectFit:"cover"}}/></div>
    <div className="explore-section8__tvshows__card" ><img src={eyeCatcher} style={{objectFit:"cover"}}/></div>
    <div className="explore-section8__tvshows__card" ><img src={eyeCatcher} style={{objectFit:"cover"}}/></div>
  </div>
  </div> */}
</React.Fragment>
}

//,display:"none"