import React, { useEffect,useState } from 'react';
import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';
import data from "../../../datasource/gears.json";
import '../landing.scss';
import {WITHCONTAINERPAYLOAD} from '../../../variables/payloads';
import { withFormatting } from '../../../components/common/Text';
import { Button } from '../../../components/common/Buttons';
import { withContainer } from '../../../components/common/Containers';
import { Cards } from '../../Explore/common/Card';
import { Overlay } from '../../../components/common/Overlay/index.jsx';
export const SectionDetails=()=>{

  const TitleText = withFormatting("TV Shows","large-title","landing-section4__title")
  const MovieTitleText = withFormatting("Movies","large-title","landing-section4__title")
  const KidsTitleText = withFormatting("Kids TV","large-title","landing-section4__title")
  
  return <React.Fragment >
  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={80} isVisible={true}>
  <div className="landing-section4__tvshows landing-section4__segment">
    <Overlay></Overlay>
    <div className="landing-section4__collage"></div>
  <div className="landing-section4__description">
    <TitleText></TitleText>
    <Button text="Browse Shows" url={"explore"}></Button>
  </div>
  </div>
</ScrollAnimation>
<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={80} isVisible={true}>
  <div className="landing-section4__movies landing-section4__segment">
    <Overlay></Overlay>
    <div className="landing-section4__collage"></div>
  <div className="landing-section4__description">
    <MovieTitleText></MovieTitleText>
    <Button text="Browse Movies"  url={"explore"}></Button>
  </div>
  </div>
</ScrollAnimation>
<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={80} isVisible={true}>
  <div className="landing-section4__kids landing-section4__segment">
    <Overlay></Overlay>
    <div className="landing-section4__collage"></div>
  <div className="landing-section4__description">
    <KidsTitleText></KidsTitleText>
    <Button text="Browse Kids"  url={"explore"}></Button>
  </div>
  </div>
</ScrollAnimation>


</React.Fragment>
} 