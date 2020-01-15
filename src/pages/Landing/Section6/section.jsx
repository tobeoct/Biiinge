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
  const TitleText = withFormatting("Get An Account Today.","large-title","landing-section6__title")
  const Image = withSettings(
    "height","landing-section6__platforms",platform,"auto","none"
  );
  return <React.Fragment >
  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={80} isVisible={true}>
  <div className="landing-section6__account">
    <Overlay></Overlay>
    <div className="landing-section6__description">
    <TitleText></TitleText>
    <p>Access free content on all of your devices, sync your queue and continue watching anywhere.</p>
    <Button text={"Stop Wasting Time"}></Button>
  </div></div>
</ScrollAnimation>
</React.Fragment>
} 