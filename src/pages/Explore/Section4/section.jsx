import React, { useEffect, useContext, useState } from 'react';
import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';
import {withSettings} from '../../../components/common/Images';
import {withContainer} from '../../../components/common/Containers';
import eyeCatcher from '../../../assets/images/eye-catcher-itching.svg';
import '../explore.scss';
import { Header } from '../common/Headers/header';
import { Cards } from '../common/Card';
 import data from "../../../datasource/just-aired.json";
import ThemeContext from '../../../contexts/theme-context';
import {WITHCONTAINERPAYLOAD} from '../../../variables/payloads';
import { Pagination } from '../../../components/common/Pagination';
import {Teaser} from '../../../components/common/Images/teaser';
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
  const CardsSection = withContainer(
    Cards,obj
  );
    return <React.Fragment >
 <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" isVisible={true}>
  
 <Teaser className={"explore-section4__teaser"} image={eyeCatcher}></Teaser>
     </ScrollAnimation>
    <Header text={"Just Aired Episodes"}></Header>
   <CardsSection payload={data.payload} type={""} cardType={"sheared"} opacity={myOpacity}></CardsSection>
  <Pagination></Pagination>
</React.Fragment>
}