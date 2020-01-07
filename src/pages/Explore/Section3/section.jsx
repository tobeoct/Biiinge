import React, { useEffect, useContext, useState } from 'react';
import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';
import {withSettings} from '../../../components/common/Images';
import {withContainer} from '../../../components/common/Containers';
import eyeCatcher from '../../../assets/images/eye-catcher-you.svg';
import '../explore.scss';
import { Header } from '../common/Headers/header';
import { Cards } from '../common/Card';
 import data from "../../../datasource/friends.json";
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
  obj.id="explore-section3__friends__container";
  obj.className="scrolling-wrapper";
  obj.isSection= false;
  obj.height=undefined;
  const Image = withSettings(
    "no-height","explore-section3__teaser",eyeCatcher
  );
  const CardsSection = withContainer(
    Cards,obj
  );
  const obj2 = obj;
  obj2.type="no-height";
  obj2.id="explore-section3__friends__watched";
  obj2.className="scrolling-wrapper";
  obj2.isSection= false;
  obj2.height=undefined;
  const MoviesFriendsWatched = withContainer(
    Cards,obj2
  );
    return <React.Fragment >
      {/* <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut" isVisible={true}>
  
    </ScrollAnimation> */}
    
    <Image></Image>
    <Header text={"Friends Recently Watched"}></Header>

    <CardsSection payload={data.payload} type={"rounded"} opacity={myOpacity}></CardsSection>
    {type==="rounded"?<div style={{width:"100%",height:"232px",background:"#0F0F0F", paddingTop:"1.5%"}}>
      <MoviesFriendsWatched payload={data.payload[1].watched} type={"wide"} opacity={1}></MoviesFriendsWatched>
    </div>:<React.Fragment></React.Fragment>}
</React.Fragment>
}

//,display:"none"