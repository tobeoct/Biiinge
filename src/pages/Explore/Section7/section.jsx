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
 import data from "../../../datasource/tvshows.json";
import ThemeContext from '../../../contexts/theme-context';
import {WITHCONTAINERPAYLOAD} from '../../../variables/payloads';
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
  obj.className="explore-section7__tvshows__container ";
  obj.id="";
  obj.isSection= false;
  obj.height=undefined;
  const Image = withSettings(
    "no-height","explore-section7__teaser",eyeCatcher
  );
  const CardsSection = withContainer(
    Cards,obj
  );
    return <React.Fragment >
    {/* <Image></Image> */}
    <Header text={"TV Shows"}></Header>
    <Filters></Filters>
     <CardsSection payload={data.payload} type={"card-3"}  opacity={myOpacity}   ></CardsSection>
<Trailer></Trailer>
<CardsSection payload={data.payload} type={"card-3"}  opacity={myOpacity}   ></CardsSection>

    
</React.Fragment>
}

//,display:"none"