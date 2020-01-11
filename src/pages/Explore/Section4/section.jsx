import React, { useEffect, useContext, useState } from 'react';
import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';
import {withSettings} from '../../../components/common/Images';
import {withContainer} from '../../../components/common/Containers';
import eyeCatcher from '../../../assets/images/eye-catcher-itching.svg';
import euphoria from '../../../assets/images/euphoria.png';
import strangerThings from '../../../assets/images/stranger-things.jpg';
import power from '../../../assets/images/power.png';
import '../explore.scss';
import { Header } from '../common/Headers/header';
import { Cards } from '../common/Card';
 import data from "../../../datasource/just-aired.json";
 import moviesWatchedData from "../../../datasource/movies.json";
import ThemeContext from '../../../contexts/theme-context';
import {WITHCONTAINERPAYLOAD} from '../../../variables/payloads';
export const SectionDetails=({type=""})=>{
  let [withContainerPayload, setWithContainerPayload] = useState(WITHCONTAINERPAYLOAD);
  
 let [myOpacity,setMyOpacity]=useState(1);
  let {display}=useContext(ThemeContext);

  useEffect(()=>{
    // fetch('../../../datasource/movies.json').then(response => {
    //   return response.json();
    // }).then(data => {
    //   // Work with JSON data here
    //   console.log(data);
    // }).catch(err => {
    //   // Do something for an error here
    // });
    if(display===true){
      setMyOpacity(1);    }else{
        setMyOpacity(0);
      }
  },[display])
  const obj = withContainerPayload;
  obj.type="no-height";
  obj.id="explore-section4__justaired__container";
  obj.className="scrolling-wrapper";
  obj.isSection= false;
  obj.height=undefined;
  const Image = withSettings(
    "no-height","explore-section4__teaser",eyeCatcher,undefined,"none"
  );
  const CardsSection = withContainer(
    Cards,obj
  );
    return <React.Fragment >
      {/* <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut" isVisible={true}>
  
    </ScrollAnimation> */}
     <Image></Image>
    <Header text={"Just Aired Episodes"}></Header>
  
    {/* <div className="biiinge-sheared-card"><img src={strangerThings} className="biiinge-sheared-card__image-left"/></div>
    <div className="biiinge-sheared-card" ><img src={euphoria} className="biiinge-sheared-card-active"/></div>
    <div className="biiinge-sheared-card"><img src={power} className="biiinge-sheared-card__image-right"/></div> */}
   <CardsSection payload={data.payload} type={""} cardType={"sheared"} opacity={myOpacity}></CardsSection>
  
</React.Fragment>
}

//,display:"none"