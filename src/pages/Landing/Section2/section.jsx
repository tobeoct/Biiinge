import React, { useEffect,useState } from 'react';
import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';
import {withSettings} from '../../../components/common/Images';
import marvel from '../../../assets/images/lotr.jpg';
import '../landing.scss';
import {WITHCONTAINERPAYLOAD} from '../../../variables/payloads';
import { withFormatting } from '../../../components/common/Text';
import { Button } from '../../../components/common/Buttons';
import { Header } from '../../Explore/common/Headers/header';
import { Overlay } from '../../../components/common/Overlay';
export const SectionDetails=()=>{
  let [withContainerPayload, setWithContainerPayload] = useState(WITHCONTAINERPAYLOAD);
  let obj = withContainerPayload;
  obj.type="no-height";
  obj.id="title-section2__container";
  obj.className="container";
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
    "height","landing-section2__teaser",marvel,"300px"
  );
  const TitleText = withFormatting("Joint Movie Experience","large-title","landing-section2__title")
  // const CardsSection = withContainer(
  //   Cards,obj
  // );
  return <React.Fragment >
  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={80} isVisible={true}>
{/* <Image></Image> */}
{/* <div className="imposter-image"> */}
<Overlay></Overlay>
<div className="landing-section2__description">
<TitleText></TitleText>
<p>Invite your friends, family, loved ones and even strangers to join you while you enjoy your movie together</p>
<Button text={"Host A Friend"}></Button>
</div>
{/* </div> */}
</ScrollAnimation>
</React.Fragment>
}