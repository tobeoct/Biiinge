import React from 'react';
import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';
import picture from '../../../assets/images/section1-bg.png';
import {withSettings} from '../../../components/common/Images';
import { ThumbnailDescription } from '../../../components/Thumbnail/Description/Index';
import '../explore.scss';
import { Trailer } from '../../../components/common/Trailers';
export const SectionDetails=()=>{
    const Image = withSettings(
        "","explore-section1__image ",picture,undefined,"radial"
      );
    return <React.Fragment >
      <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut" isVisible={true}>
  
   <Image></Image>
    </ScrollAnimation>
    <ThumbnailDescription></ThumbnailDescription>
</React.Fragment>
}