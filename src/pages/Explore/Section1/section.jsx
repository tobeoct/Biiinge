import React from 'react';
import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';
import picture from '../../../assets/images/section1-bg.png';
import {withSettings} from '../../../components/common/Images';
import { ThumbnailDescription } from '../../../components/Thumbnail/Description/Index';
import '../explore.scss';
import { Pagination } from '../../../components/common/Pagination';
export const SectionDetails=()=>{
    const Image = withSettings(
        "","explore-section1__image ",picture,undefined,"radial"
      );
    return <React.Fragment >
     <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDelay="500" animationInDuration="2000" isVisible={true}>
   <Image></Image>
    </Animated>
    <ThumbnailDescription></ThumbnailDescription>
    <Pagination></Pagination>
</React.Fragment>
}