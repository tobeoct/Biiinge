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
export const SectionDetails=()=>{

  const TitleText = withFormatting("Gear Up","large-title","title_section2__title")
  let [withContainerPayload, setWithContainerPayload] = useState(WITHCONTAINERPAYLOAD);
  let obj = withContainerPayload;
  obj.type="no-height";
  obj.id="landing-section3__gear__container";
  obj.className="scrolling-wrapper";
  obj.isSection= false;
  obj.height=undefined;
  
  const CardsSection = withContainer(
    Cards,obj
  );
  return <React.Fragment >
  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" offset={80} isVisible={true}>
  <div className="row">
<div className="col-md-4" >
  <div className="landing-section3__description">
  <ScrollAnimation animateIn="slideInLeft" animateOut="fadeOut" offset={80} isVisible={true}>
  <TitleText></TitleText>
  <p>Purchase our extended experience gears for that better viewing experience</p>
  <Button text={"Experience It"}></Button>
  </ScrollAnimation>
  </div>
  
</div>
<div className="col-md-8">
<ScrollAnimation animateIn="slideInRight" animateOut="fadeOut" offset={80} isVisible={true}>
<CardsSection payload={data.payload} type={"card-gear"}></CardsSection>
</ScrollAnimation>
</div>
  </div>
</ScrollAnimation>
</React.Fragment>
} 