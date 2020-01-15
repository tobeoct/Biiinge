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
import platform from '../../../assets/images/platforms.png';
import { withSettings } from '../../../components/common/Images/index.jsx';
export const SectionDetails=()=>{
  const TitleText = withFormatting("No Limits.","large-title","landing-section5__disclaimer")
  const StreamTitleText = withFormatting("Stream Anywhere, Anytime.","large-title","landing-section5__title")
  const Image = withSettings(
    "height","landing-section5__platforms",platform,"auto","none"
  );
  return <React.Fragment >
  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={80} isVisible={true}>
  <div className="landing-section5__nolimits">
    <Overlay></Overlay>
    <TitleText></TitleText>
  </div>
</ScrollAnimation>
<ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={80} isVisible={true}>
  <div className="landing-section5__stream">
 <StreamTitleText></StreamTitleText>
 <p>Biiinge is available for free on Android, iOS, Roku, Apple TV, Amazon Fire TV, Xfinity X1, Xbox, Samsung Smart TVs, Sony Smart TVs, PlayStation and the web.</p>
  <Image></Image>
  <Button text={"Supported Devices"}></Button>
  </div>
</ScrollAnimation>
</React.Fragment>
} 