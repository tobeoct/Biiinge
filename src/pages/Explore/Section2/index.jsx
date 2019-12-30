import React  from 'react';
import {withSettings} from '../../../components/common/Images';
import {withContainer} from '../../../components/common/Containers';
import eyeCatcher from '../../../assets/images/eye-catcher-are.svg';
export const Section2=()=>{
  const Image = withSettings(
    "no-height","explore-section2__teaser",eyeCatcher
  );
    const Section = withContainer(
        Image,"","explore-section2__container", true
      );
    return <Section></Section>
}