import React, { useEffect, useContext, useState } from 'react';
import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';
import {withSettings} from '../../../components/common/Images';
import {withContainer} from '../../../components/common/Containers';
import eyeCatcher from '../../../assets/images/eye-catcher-to.svg';
import '../explore.scss';
import { Header } from '../common/Headers/header';
import { Cards } from '../common/Card';
 import data from "../../../datasource/movies.json";
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
  obj.className="explore-section5__movies__container";
  obj.id="";
  obj.isSection= false;
  obj.height=undefined;
  const Image = withSettings(
    "no-height","explore-section5__teaser",eyeCatcher
  );
  const CardsSection = withContainer(
    Cards,obj
  );
  const obj2 = obj;
  obj2.type="no-height";
  obj2.className="explore-section5__movies"
  obj2.isSection= false;
  obj2.height=undefined;
  const CardsSection2 = withContainer(
    Cards,obj2
  );
    return <React.Fragment >
    <Image></Image>
    <Header text={"Movies"}></Header>
    <Filters></Filters>
     <CardsSection2 payload={data.payload} type={"card"}  opacity={myOpacity}   ></CardsSection2>
    <Trailer></Trailer>
     <CardsSection2 payload={data.payload} type={"card"}  opacity={myOpacity}   ></CardsSection2>
   
</React.Fragment>
}

//,display:"none"