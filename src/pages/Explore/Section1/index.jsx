import React from 'react';
import {withContainer} from '../../../components/common/Containers';
import { SectionDetails } from './section';
export const Section1=()=>{
    
      const Section = withContainer(
     SectionDetails,  {type:"",id:"explore-section1__container",className:"",isSection: true, height:undefined}
      );
    return <Section></Section>


}