import React from 'react';
import {withContainer} from '../../../components/common/Containers';
import { SectionDetails } from './section';
export const Section1=()=>{
    
      const Section = withContainer(
        SectionDetails,"","explore-section1__container", true
      );
    return <Section></Section>
}