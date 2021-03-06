import React from 'react';
import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';
import picture from '../../../assets/images/landing-bg.png';
import '../landing.scss';
import { withSettings } from '../../../components/common/Images';
import {Button} from '../../../components/common/Buttons';
import { withFormatting } from '../../../components/common/Text';
import { Overlay } from '../../../components/common/Overlay';
export const SectionDetails=()=>{
  const Image = withSettings(
    "height","landing-section1__bg",picture,"80vh"
  );
  const TitleText = withFormatting("BIIINGE","large-title","landing-section1__title")
 
    return <React.Fragment >
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={80} isVisible={true}>
    {/* <Image></Image> */}
    <div className="imposter-image">
      <Overlay type={"radial"}></Overlay>
    <div className="landing-section1__description">
    <TitleText></TitleText>
    <h3><i>Bringing the theatre experience to your finger tips</i></h3>
    <p>Stream, share and enjoy unlimited access 
to thousands of <span>MOVIES</span></p>
<Button text={"Watch Now"} url={"login"}></Button>
    </div>
    </div>
    </ScrollAnimation>
</React.Fragment>
}