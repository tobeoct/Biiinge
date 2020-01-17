import React from 'react';
import {withContainer} from '../../../components/common/Containers';
import { SectionDetails } from './section';
export const Section1=()=>{
    
      const Section = withContainer(
     SectionDetails,  {type:"",id:"title-section1__container",className:"",isSection: true, height:undefined}
      );
    return <Section></Section>


}