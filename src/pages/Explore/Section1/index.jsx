import React from 'react';
import {withContainer} from '../../../components/common/Containers';
import { SectionDetails } from './section';
export const Section1=()=>{
    
      const Section = withContainer(
     SectionDetails,  {type:"height",id:"explore-section1__container",className:"",isSection: true, height:"90vh"}
      );
    return <Section></Section>


}