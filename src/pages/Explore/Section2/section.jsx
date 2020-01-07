import React, { useEffect,useState } from 'react';
import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';
import {withSettings} from '../../../components/common/Images';
import {withContainer} from '../../../components/common/Containers';
import eyeCatcher from '../../../assets/images/eye-catcher-are.svg';
import '../explore.scss';
import { Header } from '../common/Headers/header';
import { Cards } from '../common/Card';
 import data from "../../../datasource/movies.json";
import {WITHCONTAINERPAYLOAD} from '../../../variables/payloads';
import { Filters } from '../common/Filters';
export const SectionDetails=()=>{
  let [withContainerPayload, setWithContainerPayload] = useState(WITHCONTAINERPAYLOAD);
  let obj = withContainerPayload;
  obj.type="no-height";
  obj.id="explore-section2__trending__container";
  obj.className="scrolling-wrapper";
  obj.isSection= false;
  obj.height=undefined;
  useEffect(()=>{
    // fetch('../../../datasource/movies.json').then(response => {
    //   return response.json();
    // }).then(data => {
    //   // Work with JSON data here
    //   console.log(data);
    // }).catch(err => {
    //   // Do something for an error here
    // });
  })
  const Image = withSettings(
    "no-height","explore-section2__teaser",eyeCatcher
  );
  const CardsSection = withContainer(
    Cards,obj
  );
    return <React.Fragment >
      {/* <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut" isVisible={true}>
  
    </ScrollAnimation> */}
    
    <Image></Image>
    <Header text={"Trending"}></Header>
<Filters></Filters>
    <CardsSection payload={data.payload}></CardsSection>
</React.Fragment>
}